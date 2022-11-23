import React, { createContext, ReactElement, useState } from 'react';


export const metadataContext = createContext<any>({
  
})
const Float = (props: {children: ReactElement}) => {
  const [metadata, setMetadata] = useState<any>()
  const [proxyEl, setPrxyEl] = useState<HTMLElement>()
  
  return (
    <metadataContext.Provider value={{
      metadata,setMetadata,
      proxyEl,setPrxyEl
    }}>
      {props.children}
    </metadataContext.Provider>
  );
};

export default Float;