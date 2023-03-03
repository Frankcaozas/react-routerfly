import { createContext, memo, ReactElement, useState } from 'react';
import { createRouterFlyContext, RouterFlyContext } from './context';
import { FloatContainer } from './FloatContainer';
import { AliveScope } from './KeepAlive/AliveScope';



export const CacheContext = createContext({});
export const metadataContext = createContext<any>({})
export const routerFlyContext = createContext<RouterFlyContext>({})
export const Float = (props: { children: ReactElement }) => {

  const context = createRouterFlyContext()
  // const [metadata, setMetadata] = useState<any>()
  // const [proxyEl, setPrxyEl] = useState<HTMLElement>()
  // const [isLanded, setIsLanded] = useState<boolean>(false)

  return (
    
    <routerFlyContext.Provider value={context}>
      {/* <metadataContext.Provider value={{ metadata, setMetadata, proxyEl, setPrxyEl, isLanded, setIsLanded }}> */}
        <AliveScope>
          {props.children}
          {
          Array.from(context.portMap.entries())
            .map(([port, { component }]) => {
              return (<FloatContainer 
                port={port} 
                key={port}
                component={component} />)
            })
        }
        </AliveScope>
        
      {/* </metadataContext.Provider> */}

    </routerFlyContext.Provider>
  );
};

