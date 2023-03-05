import React, { useContext, useEffect, useState, CSSProperties, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import { routerFlyContext } from './Float';
import KeepAlive from './KeepAlive/KeepAlive';

export const FloatContainer = (props: any) => {
  // const { metadata, proxyEl, isLanded, setIsLanded } = useContext(metadataContext)
  // console.log(metadata)
  const { port: p , component} = props
  const port = p 
  const { metadata,
    setMetadata,
    proxyEl,
    setPrxyEl,
    isLanded,
    setIsLanded,
    comp,
    setComp } = useContext(routerFlyContext)
  // const instance = getInstance(port, props.component)
  // const { proxyEl, isLanded, metadata } = instance
  // console.log('container', instance)
  const el = proxyEl[port]
  function getRect() {
    if (!el) {
      return {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
      } as DOMRect
    }
    return el!.getBoundingClientRect()
  }

  const [rect, setReact] = useState<DOMRect>(el?.getBoundingClientRect())


  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft

  let style: CSSProperties = {
    position: 'absolute',
    left: (rect?.left ) + scrollLeft + 'px',
    top: (rect?.top ) + scrollTop + 'px',
    width: `${rect?.width}px`,
    height: `${rect?.height}px`,
  }
  if (!rect || !proxyEl[port]) {
    style = {
      ...style,
      zIndex: -1,
      display: 'none',
    }
  }
  if (isLanded[port]) {
    style.display = 'none'
  } else {
    style = {
      ...style,
      transition: 'all 1s ease-in-out'
    }
  }
  // style = {
  //   ...style,
  //   transition: 'all 1s ease-in-out'
  // }
  console.log(style.left, style.top)
  console.log(port,isLanded, el )
  const update = () => {
    Promise.resolve().then(() => { })
    setReact(el?.getBoundingClientRect())
    console.log('rect update')
  }
  useEffect(() => {
    // window.addEventListener('resize', update)
    update()
    return () => {
      // window.removeEventListener('resize', update)
    }
  }, [metadata[port], window.location.pathname])

  // console.log(comp[port], component, component.props)
  const children = React.cloneElement(component, { ...metadata[port] })
  console.log(children);

  return (
    <div
      {...metadata[port]}
      style={{
        ...style,
        ...(metadata[port].style)
      }}
      onTransitionEnd={async () => {
        await Promise.resolve().then(() => {
          setIsLanded((pre) => {
            pre[port] = true
            return [...pre]
          })
          // instance.isLanded = true
          // updatePortMap(port, instance)
        })
      }}
    >
      {/* {children} */}
      { (isLanded[port] && el) ?
        createPortal(
          <KeepAlive id={port}>{component}</KeepAlive>
          , el)
        :
        <KeepAlive id={port}>{component}</KeepAlive>
      }
    </div>
  );
};

