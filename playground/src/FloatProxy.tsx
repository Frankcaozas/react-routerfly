import { useContext, useEffect, useRef } from 'react';
import { metadataContext } from './Float';

const FloatProxy = (props: any) => {
  const { children, ...attr } = props
  // console.log('style: '+style);
  const { setMetadata, setPrxyEl, proxyEl } = useContext(metadataContext)
  const el = useRef(null)
  useEffect(() => {
    setMetadata(attr)
    setPrxyEl(el.current)
  }, [props])

  useEffect(()=>{
    return ()=>{
      
        setPrxyEl(undefined)
      
    }
  },[])

  return (
    <div {...props}
    ref={el}>
      
    </div>
  );
};

export default FloatProxy;