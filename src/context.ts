import { ReactNode, createContext, useState } from 'react'


export function createRouterFlyContext() {
  const [metadata, setMetadata] = useState<any>([])
  const [proxyEl, setPrxyEl] = useState<{ [prop: string]: HTMLElement | null }>(
    {}
  )
  const [isLanded, setIsLanded] = useState<{ [prop: string]: boolean }>({})
  const [comp, setComp] = useState<{
    [prop: string]: {
      children: ReactNode
      port: string
      keepAlive: boolean
    }
  }>({})
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

export const routerFlyContext = createContext<RouterFlyContext>(
  {} as RouterFlyContext
)
