import React, { ReactElement } from 'react';
import RouterflyCraft from './RouterflyCraft';

type RouterflyInstance = {
  attr: any[],
  setAttr: any
  proxyElement: HTMLElement[],
  setProxyElement: any,
  isLanded: boolean[],
  setIsLanded: any,
  component: {id: string, child: ReactElement}[],
  setComponent: any,
  // getPortalElement: (id: string, children: ReactElement) => ReactElement
}

export const RouterflyContext = React.createContext<RouterflyInstance>({} as RouterflyInstance)

const RouterflyCarrier = (props: { children: ReactElement }) => {
  const [attr, setAttr] = React.useState<any[]>([])
  const [proxyElement, setProxyElement] = React.useState<HTMLElement[]>([])
  const [component, setComponent] = React.useState<{id: string, child: ReactElement}[]>([])
  const [isLanded, setIsLanded] = React.useState<boolean[]>([])
  
  // const getPortalElement = (id: string, children: ReactElement) => {
  //   if (!component[+id]) {
  //     // 传送children到element
  //     const element = document.createElement('div')
  //     element.style.width = '100%'
  //     element.style.height = '100%'

  //     setComponent((prevNodes: any) => ({
  //       ...prevNodes,
  //       [id]: children,
  //     }))
  //     return children
  //   }
  //   return component[+id]
  // }
  
  return (
    <RouterflyContext.Provider value={
      {
        attr, setAttr,
        proxyElement, setProxyElement,
        isLanded, setIsLanded,
        component, setComponent,
      }
    }>
      {props.children}
      {Object.entries(component).map(([_id, component])=>{
        return <RouterflyCraft component={component.child} key={_id} port={_id}></RouterflyCraft>
      })}
    </RouterflyContext.Provider>
  );
};

export default RouterflyCarrier;