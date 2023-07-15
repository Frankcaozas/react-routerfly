import { ReactNode, memo, useContext, useEffect, useRef } from 'react';
import { routerFlyContext } from './RouterFlyCarrier';
interface RouterFlyProps {
  children: ReactNode,
  keepAlive?: boolean
  [key: string]: any
}
export const RouterFly: React.FC<RouterFlyProps> = memo((props) => {
  const { children, port: p, keepAlive = false, ...attr } = props
  const port = p
  const {
    setMetadata,
    setPrxyEl,
    setIsLanded,
    comp,
    setComp } = useContext(routerFlyContext)
  const el = useRef(null)

  useEffect(() => {
    if (!comp[port]) {
      setComp((pre) => {
        return { ...pre, [port]: { children, port } }
      })
    }
    setMetadata((pre) => {
      return { ...pre, [port]: attr }
    })
    setPrxyEl((pre) => {
      return { ...pre, [port]: el.current }
    })
    setIsLanded((pre) => {
      return { ...pre, [port]: true }
    })
  }, [props])

  useEffect(() => {

    const lifOff = () => {
      Promise.resolve().then(() => {
        setIsLanded((pre) => {
          return { ...pre, [port]: false }
        })
      })

      setIsLanded((pre) => {
        return { ...pre, [port]: true }
      })

      setPrxyEl((pre) => {

        return { ...pre, [port]: null }
      })
    }
    return () => {
      lifOff()
    }
  }, [])

  return (
    <div {...attr}
      ref={el}>
    </div>
  );
});

