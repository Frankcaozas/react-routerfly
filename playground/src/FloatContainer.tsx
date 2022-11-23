import React, { useContext, useEffect, useState } from 'react';
import { metadataContext } from './Float';



const FloatContainer = (props: any) => {
  const { metadata, setMetadata, proxyEl, setPrxyEl } = useContext(metadataContext)
  console.log(proxyEl?.getBoundingClientRect())
  // const rect: DOMRect = proxyEl?.getBoundingClientRect()
  const [rect, setReact] = useState<DOMRect>()
  const scrollY = window.scrollY
  const style: React.CSSProperties = {
    transition: 'all .5s ease-in-out',
    position: 'fixed',
    left: `${rect?.left ?? 0}px`,
    top: `${rect?.top ?? 0}px`,
  }
  
  const update = () => {
    setReact(proxyEl?.getBoundingClientRect())
    console.log('update')
  }
  useEffect(() => {
    update()
    const observer = new MutationObserver(update);
    const config = { attributes: true, childList: true, subtree: true };
    observer.observe(document.body,config);
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
      observer.disconnect();
    }
  },[props])
  return (
    <div style={style}>
      {
        React.cloneElement(props.children, { ...metadata })}
    </div>
  );
};

export default FloatContainer;