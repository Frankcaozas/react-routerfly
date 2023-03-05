import { createContext, ReactElement } from 'react';
import { createRouterFlyContext, RouterFlyContext } from './context';
import { FloatContainer } from './FloatContainer';
import { AliveScope } from './KeepAlive/AliveScope';



export const CacheContext = createContext({});
export const metadataContext = createContext<any>({})
export const routerFlyContext = createContext<RouterFlyContext>({} as RouterFlyContext)
export const RouterFlyCarrier = (props: { children: ReactElement }) => {

  const context = createRouterFlyContext()
  // console.log(context.comp)
  // const [metadata, setMetadata] = useState<any>()
  // const [proxyEl, setPrxyEl] = useState<HTMLElement>()
  // const [isLanded, setIsLanded] = useState<boolean>(false)

  return (

    <routerFlyContext.Provider value={context}>
      {/* <metadataContext.Provider value={{ metadata, setMetadata, proxyEl, setPrxyEl, isLanded, setIsLanded }}> */}
      <AliveScope>
        {props.children}
        {
          context.comp.map((comp, port) => {
            return (
              <FloatContainer
                port={port}
                key={port}
                component={comp}
              />)
          })
        }
      </AliveScope>

      {/* </metadataContext.Provider> */}

    </routerFlyContext.Provider>
  );
};

