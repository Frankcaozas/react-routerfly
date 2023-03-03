import React, { useContext, useEffect, useState, CSSProperties, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router';
import { metadataContext } from './Float';
import KeepAlive from './KeepAlive/KeepAlive';

export const FloatContainer = memo((props: any) => {
  const { metadata, proxyEl, isLanded, setIsLanded } = useContext(metadataContext)
  // console.log(metadata)
  const [rect, setReact] = useState<DOMRect>()
  
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
  
  let style: CSSProperties = {
    position: 'absolute',
    left: (rect?.left ?? 0) + scrollLeft + 'px',
    top: (rect?.top ?? 0) + scrollTop + 'px',
    width: `${rect?.width}px`,
    height: `${rect?.height}px`,
  }
  if (!rect || !proxyEl) {
    style = {
      ...style,
      zIndex: -1,
      display: 'none',
    }
  }
  if (isLanded) {
    style.display = 'none'
  } else {
    style = {
      ...style,
      transition: 'all .8s ease-in-out'
    }
  }

  const update = () => {
    setReact(proxyEl?.getBoundingClientRect())
    console.log('rect update')
  }
  useEffect(() => {
    // window.addEventListener('resize', update)
    update()
    return () => {
      // window.removeEventListener('resize', update)
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

