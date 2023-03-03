import React, { useContext, useEffect, useState, CSSProperties, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';
import { metadataContext } from './Float';
import KeepAlive from './KeepAlive/KeepAlive';

export const FloatContainer = memo((props: any) => {
  const { metadata, proxyEl, isLanded, setIsLanded } = useContext(metadataContext)
  console.log(metadata)
  const [rect, setReact] = useState<DOMRect>()
  const scrollY = window.scrollY
  const fixed: CSSProperties = {
    transition: 'all .8s ease-in-out',
    position: 'fixed'
  }
  let style: CSSProperties
  if (!rect || !proxyEl) {
    style = {
      ...fixed,
      display: 'none',
      zIndex: -1
    }
  } else {
    style = {
      ...fixed,
      left: `${rect.left ?? 0}px`,
      top: `${rect.top ?? 0}px`,
    }
  }
  const update = () => {
    setReact(proxyEl?.getBoundingClientRect())
    console.log('rect update')
  }
  useEffect(() => {
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [metadata, window.location.pathname])

  const children = React.cloneElement(props.children, { ...metadata })

  return (
    <div
      {...metadata}
      style={{
        ...style,
        ...metadata?.style
      }}
      onTransitionEnd={async () => {
        await Promise.resolve().then(() => { setIsLanded(true) })
      }}>
      {(isLanded && proxyEl) ?
        createPortal(<KeepAlive id={1}>{children}</KeepAlive>, proxyEl)
        : <KeepAlive id={1}>{children}</KeepAlive>

      }
    </div>
  );
});

