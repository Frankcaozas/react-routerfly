import { ReactElement, ReactNode, useState } from 'react'

function crateRouterFlyInstance(port: string, component: ReactNode) {
  // const [metadata, setMetadata] = useState<any>()
  // const [proxyEl, setPrxyEl] = useState<HTMLElement | null>()
  // const [isLanded, setIsLanded] = useState<boolean>(true)
  const metadata: any = null
  const proxyEl: HTMLElement | null = null
  const isLanded: boolean = true
  return {
    port,
    metadata,
    proxyEl,
    isLanded,
    component,
  }
}

export type RouterFlyInstance = ReturnType<typeof crateRouterFlyInstance>

export function createRouterFlyContext() {
  // const [portMap, setPortMap] = useState(new Map<String, RouterFlyInstance>())
  // function getInstance(port: string, component?: ReactNode) {
  //   let context = portMap.get(port)
  //   if (!context) {
  //     context = crateRouterFlyInstance(port, component)
  //     portMap.set(port, context)
  //   }
  //   context.component = component
  //   return context
  // }

  // function updatePortMap(port: string, instance: RouterFlyInstance){
  //   setPortMap(new Map(portMap.set(port, instance)))
  // }

  // return {
  //   portMap,getInstance, updatePortMap
  // }
  const [metadata, setMetadata] = useState<any[]>([])
  const [proxyEl, setPrxyEl] = useState<(HTMLElement | null)[]>([])
  const [isLanded, setIsLanded] = useState<boolean[]>([])
  const [comp, setComp] = useState<ReactElement[]>([])
  return {
    metadata,
    setMetadata,
    proxyEl,
    setPrxyEl,
    isLanded,
    setIsLanded,
    comp,
    setComp,
  }
}
export type RouterFlyContext = ReturnType<typeof createRouterFlyContext>
