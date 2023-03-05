import { Component, memo, useContext, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { metadataContext, routerFlyContext } from './Float';

export const FloatProxy = (props: any) => {
  const { children, port: p, ...attr } = props
  const port = p - 1
  // console.log(attr);
  // const { setMetadata, setPrxyEl, proxyEl, isLanded, setIsLanded } = useContext(metadataContext)
  const { metadata,
    setMetadata,
    proxyEl,
    setPrxyEl,
    isLanded,
    setIsLanded,
    comp,
    setComp } = useContext(routerFlyContext)
  const el = useRef(null)
  if(!el){
    
  }
  // const instance = getInstance(port, props.children)
  // const { proxyEl, isLanded, metadata } = instance
  // console.log(props.children === instance.component)
  useEffect(() => {
    if (!comp[port]) {
      console.log('setcomp')
      setComp((pre) => {
        pre[port] = children
        console.log(children)
        return [...pre]
      })
    }
  setMetadata((pre) => {
    pre[port] = attr
    return [...pre]
  })
  setPrxyEl((pre) => {
    pre[port] = el.current
    return [...pre]
  })

  // instance.metadata = attr
  // instance.proxyEl = el.current
  // instance.component = props.children
  // updatePortMap(port, instance)
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

