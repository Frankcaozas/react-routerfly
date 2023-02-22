import { useContext, useEffect, useRef } from 'react';
import { metadataContext } from './Float';

const FloatProxy = (props: any) => {
  const { children, ...attr } = props
  // console.log('style: '+style);
  const { setMetadata, setPrxyEl, proxyEl, isLanded, setIsLanded } = useContext(metadataContext)
  const el = useRef(null)

  useEffect(() => {
    setMetadata(attr)
    setPrxyEl(el.current)
  }, [props])

  useEffect(() => {
    const lifOff = async() =>{
      await Promise.resolve().then(() => {})
      setIsLanded(false)
      
      console.log('liftoff')
      setPrxyEl(undefined)
    }
    return () => {
      setIsLanded(false)
      
      console.log('liftoff')
      setPrxyEl(undefined)
      // lifOff()
    }
  }, [])

  return (
    <div {...props}
      ref={el}>

    </div>
  );
};

export default FloatProxy;