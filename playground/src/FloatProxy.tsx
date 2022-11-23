import { useContext, useEffect, useRef } from 'react';
import { metadataContext } from './Float';

const FloatProxy = (props: any) => {
  const { children, ...attr } = props
  // console.log('style: '+style);
  const { metadata, setMetadata, proxyEl,setPrxyEl } = useContext(metadataContext)
  const el = useRef(null)
  useEffect(() => {
    setMetadata(attr)
    setPrxyEl(el.current)
  }, [props])


  return (
    <div {...props}
    ref={el}>
      
    </div>
  );
};

export default FloatProxy;