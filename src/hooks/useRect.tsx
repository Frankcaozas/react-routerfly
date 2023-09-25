import { useLayoutEffect, useCallback, useState } from "react";

type RectResult = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  marginLeft: number;
  marginTop: number
};

function getRect<T extends HTMLElement>(element?: T): RectResult {
  let rect: RectResult = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    marginLeft: 0,
    marginTop: 0
  };
  if (element) {
    const { left, top, width, height, bottom, right } = element.getBoundingClientRect()
    const domStyle = window.getComputedStyle(element)
    const marginTop = domStyle.marginTop
    const marginLeft = domStyle.marginLeft
    Object.assign(rect, {left, top, width, height, bottom, right, marginLeft, marginTop})
  }
  return rect;
}

export function useRect<T extends HTMLElement>(
  ref: HTMLElement | null
): RectResult {
  const [rect, setRect] = useState<RectResult>(
    ref ? getRect(ref) : getRect()
  );

  const handleResize = useCallback(() => {
    if (!ref) return;
    setRect(getRect(ref)); // Update client rect
  }, [ref]);

  useLayoutEffect(() => {
    const element = ref;
    if (!element) return;

    handleResize();

    // @ts-ignore
    if (typeof ResizeObserver === "function") {
      // @ts-ignore
      let resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(element);
      return () => {
        if (!resizeObserver) return;
        resizeObserver.disconnect();
        // resizeObserver = null;
      };
    } else {
      window.addEventListener("resize", handleResize); // Browser support, remove freely
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [ref]);

  return rect;
}