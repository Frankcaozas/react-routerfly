import React, { useRef, useEffect } from 'react'
import { useAliveScope } from './AliveScope'

const KeepAlive = (props: any) => {
  const { id, children } = props
  const getPortalElement = useAliveScope()
  const keepAliveRef = useRef<HTMLDivElement>(null)
  const appendPortalElement = () => {

    const portalElement = getPortalElement(id, children)
    keepAliveRef.current!.appendChild(portalElement)
  }
  useEffect(() => {
    appendPortalElement()
  }, [])

  return <div
    style={{ width: '100%', height: '100%' }}
    ref={keepAliveRef} />
}

export default KeepAlive
