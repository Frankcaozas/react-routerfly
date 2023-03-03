import React, { useContext, useEffect, useState, CSSProperties, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import { routerFlyContext } from './Float';
import KeepAlive from './KeepAlive/KeepAlive';

export const FloatContainer = (props: any) => {
  // const { metadata, proxyEl, isLanded, setIsLanded } = useContext(metadataContext)
  // console.log(metadata)
  const {port, component} = props
  const { portMap, getInstance, updatePortMap } = useContext(routerFlyContext)
  const instance = getInstance(port, props.component)
  const { proxyEl, isLanded, metadata } = instance
  // console.log('container', instance)

  const [rect, setReact] = useState<DOMRect>(proxyEl?.getBoundingClientRect())


  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft

  let style: CSSProperties = {
    position: 'absolute',
    left: (rect?.left) + scrollLeft + 'px',
    top: (rect?.top) + scrollTop + 'px',
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
      transition: 'all 1s ease-in-out'
    }
  }
  // console.log(style.left, style.top)

  const update = () => {
    Promise.resolve().then(() => { })
    setReact(proxyEl?.getBoundingClientRect())
    console.log('rect update')
  }
  useEffect(() => {
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [portMap,metadata, window.location.pathname])


  const children = React.cloneElement(props.component, { ...metadata })
  console.log(children.props)

  return (
    <div
      {...metadata}
      style={{
        ...style,
      }}
      onTransitionEnd={async () => {
        await Promise.resolve().then(() => {
          // setIsLanded(true) 
          instance.isLanded = true
          updatePortMap(port, instance)
        })
      }}>
      {/* {children} */}
      {metadata && (isLanded && proxyEl) ?
        createPortal(
          <KeepAlive id={port}>{component}</KeepAlive>
          , proxyEl)
        :
        <KeepAlive id={port}>{component}</KeepAlive>
      }
    </div>
  );
};

