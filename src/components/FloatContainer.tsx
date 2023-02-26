import React, { useContext, useEffect, useState, CSSProperties, useRef } from 'react';
import { createPortal } from 'react-dom';
import { metadataContext } from './Float';
import KeepAlive from './KeepAlive/KeepAlive';

export const FloatContainer = (props: any) => {
  const { metadata, proxyEl, setProxyEl, isLanded, setIsLanded } = useContext(metadataContext)
  const [rect, setReact] = useState<DOMRect>()
  const containerRef = useRef(null)
  const scrollY = window.scrollY
  const fixed: CSSProperties = {
    transition: 'all .5s ease-in-out',
    position: 'fixed'
  }
  let style: CSSProperties
  if (!rect || !proxyEl) {
    style = {
      ...fixed,
      // display: 'none'
      opacity: 0,
      transform: 'translateY(-100px)',
      pointerEvents: 'none'
    }
  } else {
    style = {
      ...fixed,
      left: `${rect.left ?? 0}px`,
      top: `${rect.top ?? 0}px`,
    }
  }
  // style = {
  //   transition: 'all .5s ease-in-out',
  //   position: 'fixed',
  //   left: `${rect?.left ?? 0}px`,
  //   top: `${rect?.top ?? 0}px`,
  // }
  // console.log(style);

  // console.log(style);
  const update = () => {
    setReact(proxyEl?.getBoundingClientRect())
  }
  useEffect(() => {

    // const observer = new MutationObserver(update);
    // const config = { attributes: true, childList: true, subtree: true };
    // observer.observe(document.body,config);
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('resize', update)
      // observer.disconnect();
    }
  }, [props])

  const children = React.cloneElement(props.children, { ...metadata})

  return (
    <div
      {...metadata}
      ref={containerRef}
      style={{
        ...style,
        ...metadata?.style
      }}
      onTransitionEnd={ async() => {
        // await Promise.resolve().then(() => {setIsLanded(true)})
        setIsLanded(true)
        console.log('landed')
      }}>
      {!isLanded ?
        createPortal(
        <KeepAlive id={1}>{children}</KeepAlive> 
          // children
        , isLanded ?  proxyEl : containerRef.current)
        : 
        <KeepAlive id={1}>{children}</KeepAlive>
        // children 
        } 
    </div>
  );
};

