import { createContext, memo, ReactElement, useState } from 'react';
import { AliveScope } from './KeepAlive/AliveScope';



export const metadataContext = createContext<any>({

})
export const Float = memo((props: { children: ReactElement }) => {
  const [metadata, setMetadata] = useState<any>()
  const [proxyEl, setPrxyEl] = useState<HTMLElement>()
  const [isLanded, setIsLanded] = useState<boolean>(true)

  return (
    <metadataContext.Provider value={{
      metadata, setMetadata,
      proxyEl, setPrxyEl,
      isLanded, setIsLanded
    }}>  
        <AliveScope>{props.children}</AliveScope>
    </metadataContext.Provider>
  );
});

