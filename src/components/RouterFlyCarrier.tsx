import { createContext, ReactElement } from 'react';
import { createRouterFlyContext, RouterFlyContext } from '../context';
import { AliveScope } from './KeepAlive/AliveScope';
import { RouterFlyCraft } from './RouterFlyCraft';


export const routerFlyContext = createContext<RouterFlyContext>({} as RouterFlyContext)
export const RouterFlyCarrier = (props: { children: ReactElement }) => {

  const context = createRouterFlyContext()

  return (

    <routerFlyContext.Provider value={context}>
     
      <AliveScope>
        {props.children}
        {
          Object.values(context.comp).filter((comp)=>comp !== undefined).map((comp, port) => {
            return (
              <RouterFlyCraft
                port={comp.port}
                key={port}
                component={comp.children}
                keepAlive={comp.keepAlive}
              />)
          })
        }
      </AliveScope>

    </routerFlyContext.Provider>
  );
};

