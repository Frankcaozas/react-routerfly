import { Component, memo, useContext, useEffect, useRef } from 'react';
import { metadataContext, routerFlyContext } from './Float';

export const FloatProxy = (props: any) => {
  const { children,port, ...attr } = props
  // console.log(attr);
  // const { setMetadata, setPrxyEl, proxyEl, isLanded, setIsLanded } = useContext(metadataContext)
  const { portMap, getInstance, updatePortMap } = useContext(routerFlyContext)
  const el = useRef(null)

  const instance = getInstance(port, props.children)
  const { proxyEl, isLanded, metadata } = instance
  console.log(props.children === instance.component)
  useEffect(() => {
    // setMetadata(attr)
    // setPrxyEl(el.current)
    instance.metadata = attr
    instance.proxyEl = el.current
    instance.component = props.children
    updatePortMap(port, instance)
  }, [props])

  useEffect(() => {
    const lifOff = () => {
      Promise.resolve().then(() => {
        // setIsLanded(false)
        instance.isLanded  = false
        updatePortMap(port, instance)
      })
      // setPrxyEl(undefined)
      instance.proxyEl = null
      updatePortMap(port, instance)
    }
    return () => {
      lifOff()
    }
  }, [])

  return (
    <div {...metadata}
      ref={el}>
    </div>
  );
};

