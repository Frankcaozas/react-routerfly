import { ReactElement, useState } from 'react'

export function createRouterFlyContext() {
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
