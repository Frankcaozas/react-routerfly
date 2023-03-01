import { memo, useContext, useEffect, useRef } from 'react';
import { metadataContext } from './Float';

export const FloatProxy = memo((props: any) => {
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
  }, [props])

  useEffect(() => {
    const lifOff = () => {
      Promise.resolve().then(() => {
        setIsLanded(false)
      })
      setPrxyEl(undefined)
    }
    return () => {
      lifOff()
    }
  }, [])

  return (
    <div {...props}
      ref={el}>

    </div>
  );
});

