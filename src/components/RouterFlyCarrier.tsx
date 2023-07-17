import { createContext, ReactNode } from 'react';
import { createRouterFlyContext, RouterFlyContext } from '../context';
import { AliveScope } from './KeepAlive/AliveScope';
import { RouterFlyCraft } from './RouterFlyCraft';


export const routerFlyContext = createContext<RouterFlyContext>({} as RouterFlyContext)
export const RouterFlyCarrier = (props: { children: ReactNode, globalKeepAlive?: boolean }) => {

  const context = createRouterFlyContext()
  const { globalKeepAlive: globalKeepAlive = true } = props
  
  return (

    <routerFlyContext.Provider value={context}>

      <AliveScope>
        {props.children}
        {
          Object.values(context.comp).filter((comp) => comp !== undefined).map((comp, port) => {
            const keepAlive = comp.keepAlive
            let notKeepAlive : boolean
            if(globalKeepAlive){
              notKeepAlive = !keepAlive ? true : false
            }else{
              notKeepAlive = !keepAlive ? true : false
            }
            // console.log('keep', keepAlive)
            // console.log('not keep ',notKeepAlive)
            return (
              <RouterFlyCraft
                port={comp.port}
                key={port}
                component={comp.children}
                keepAlive={!notKeepAlive}
              />)
          })
        }
      </AliveScope>

    </routerFlyContext.Provider>
  );
};

