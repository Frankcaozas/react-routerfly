import React, { CSSProperties, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import KeepAlive from './KeepAlive/KeepAlive';
import { routerFlyContext } from './RouterFlyCarrier';

export const RouterFlyCraft = (props: any) => {
  const { port: p, component } = props
  const port = p
  const { metadata,
    proxyEl,
    isLanded,
    setIsLanded,
  } = useContext(routerFlyContext)

  const el = proxyEl[port]
  

  const [rect, setReact] = useState<DOMRect | undefined>(el?.getBoundingClientRect())


  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft

  let style: CSSProperties = {
    position: 'absolute',
    zIndex: 999,
    left: (rect?.left ?? 0) + scrollLeft + 'px',
    top: (rect?.top ?? 0) + scrollTop + 'px',
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
  // console.log(style.left, style.top)
  // console.log(port,isLanded, el )
  const update = () => {
    Promise.resolve().then(() => { })
    setReact(el?.getBoundingClientRect())
    // console.log('rect update')
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
  // console.log(children);
  const portal = (isLanded[port] && el !== null)

  return (
    <div
      {...metadata[port]}
      style={{
        ...style,
        // ...(metadata[port].style)
      }}
      onTransitionEnd={async () => {
        await Promise.resolve().then(() => {
          setIsLanded((pre) => {
            console.log('landed');
            pre[port] = true
            return [...pre]
          })
          // instance.isLanded = true
          // updatePortMap(port, instance)
        })
      }}
    >
      {/* {children} */}
      {(isLanded[port] && el) ?
        createPortal(
          <KeepAlive id={port}>{component}</KeepAlive>
          , el)
        :
        <KeepAlive id={port}>{component}</KeepAlive>
      }
    </div>
  );
};

