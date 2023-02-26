import { memo, useContext, useEffect, useRef } from 'react';
import { metadataContext } from './Float';

export const FloatProxy = (props: any) => {
  const { children, ...attr } = props
  // console.log('style: '+style);
  const { setMetadata, setPrxyEl, proxyEl, isLanded, setIsLanded } = useContext(metadataContext)
  const el = useRef(null)

  // if(!el){
  //   setIsLanded(true)
  // }
  useEffect(() => {
    setMetadata(attr)
    setPrxyEl(el.current)
    console.log(attr)
  }, [props])

  useEffect(() => {
    const lifOff = () => {
      Promise.resolve().then(() => {
        setIsLanded(false)
        console.log('liftoff')
      })
      setPrxyEl(undefined)
    }
    return () => {
      // setIsLanded(false)
      // console.log('liftoff')
      // setPrxyEl(undefined)
      lifOff()
    }
  }, [])

  return (
    <div {...props}
      ref={el}>

    </div>
  );
};

