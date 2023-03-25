import { useContext, useEffect, useRef } from 'react';
import { routerFlyContext } from './RouterFlyCarrier';

export const RouterFly = (props: any) => {
  const { children, port: p, ...attr } = props
  const port = p
  const {
    setMetadata,
    setPrxyEl,
    setIsLanded,
    comp,
    setComp } = useContext(routerFlyContext)
  const el = useRef(null)

  useEffect(() => {
    if (!comp[port]) {
      setComp((pre) => {
        pre[port] = children
        return {...pre, [port]: {children, port}}
      })
    }
    setMetadata((pre) => {
      return {...pre, [port]: attr}
    })
    setPrxyEl((pre) => {
      pre[port] = el.current
      return {...pre, [port]: el.current}
    })
    setIsLanded((pre) => {
      pre[port] = true
      return {...pre, [port]: true}
    })
  }, [props])

  useEffect(() => {

    const lifOff = () => {
      Promise.resolve().then(() => {
        setIsLanded((pre) => {
          pre[port] = false
          return {...pre, [port]: false}
        })
      })

      setIsLanded((pre) => {
        pre[port] = true
        return {...pre, [port]: true}
      })

      setPrxyEl((pre) => {
        pre[port] = null
        return {...pre, [port]: null}
      })
    }
    return () => {
      lifOff()
    }
  }, [])

  return (
    <div {...attr}
      ref={el}>
    </div>
  );
};

