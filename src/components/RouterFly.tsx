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
        return [...pre]
      })
    }
    setMetadata((pre) => {
      console.log('update meta')
      pre[port] = attr
      return [...pre]
    })
    setPrxyEl((pre) => {
      pre[port] = el.current
      return [...pre]
    })
    setIsLanded((pre) => {
      pre[port] = true
      return [...pre]
    })
  }, [props])

  useEffect(() => {

    const lifOff = () => {
      Promise.resolve().then(() => {
        setIsLanded((pre) => {
          pre[port] = false
          return [...pre]
        })
      })

      setIsLanded((pre) => {
        pre[port] = true
        return [...pre]
      })

      setPrxyEl((pre) => {
        pre[port] = null
        return [...pre]
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

