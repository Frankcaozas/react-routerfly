import { CSSProperties, ReactNode, memo, useContext, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useRect } from '../hooks/useRect';
import KeepAlive from './KeepAlive/KeepAlive';
import { routerFlyContext } from '../context';

// interface RouterFlyCraftProps {
//   port: string,
//   component: ReactNode,
//   metadata: any
//   proxyEl: ReactNode,
//   isLanded: boolean,
//   setIsLanded: RouterFlyContext['setIsLanded']
// }
export const RouterFlyCraft = memo((props: {
  port: string,
  component: ReactNode,
  keepAlive?: boolean
}) => {
  const { port: p, component, keepAlive = true } = props
  const port = p
  const { metadata,
    proxyEl,
    isLanded,
    setIsLanded,
  } = useContext(routerFlyContext)
  const el = proxyEl[port]
  const rect = useRect(el)
  
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
  const style = useMemo(() => {
    let style: CSSProperties = {
      position: 'absolute',
      zIndex: 999,
      left: 0,
      top: 0,
      width: `${rect?.width}px`,
      height: `${rect?.height}px`,
      transform: `translate3d(calc(${rect.left}px - ${rect.marginLeft}),calc(${rect.top}px - ${rect.marginTop}),0px)`,
    }
    if (!rect || !proxyEl[port]) {
      style = {
        ...style,
        zIndex: -1,
        display: 'none',
      }
    }
    if (isLanded[port]) {
      style = {
        ...style,
        display: 'none'
      }
    } else {
      style = {
        ...style,
        transition: 'all 1s ease-in-out'
      }
    }
    return style
  }, [rect, proxyEl[port], isLanded[port], scrollLeft, scrollTop])
  const c = keepAlive ? <KeepAlive id={port}>{component}</KeepAlive> : component
  return (
    <div
      {...metadata[port]}
      style={{
        ...style,
      }}

      onTransitionEnd={async () => {
        await Promise.resolve().then(() => {
          setIsLanded((pre) => {
            // console.log('landed');
            return { ...pre, [port]: true }
          })
        })
      }}
    >

      {(isLanded[port] && el) ?
        createPortal(
          // <KeepAlive id={port}>{component}</KeepAlive>
          c
          , el, port)
        : c
        // <KeepAlive id={port}>{component}</KeepAlive>
      }
    </div>
  );
});

