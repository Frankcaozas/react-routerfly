import { useContext, useEffect, useRef } from 'react';
import { RouterflyContext } from './RouterflyCarrier';



const resolvedPromise = Promise.resolve()
const RoterflyProxy = (props: any) => {
  const state = useContext(RouterflyContext)
  const ref = useRef<HTMLDivElement>()

  //firtime directly land
  // state.setIsLanded((pre: any) => ({ ...pre, [props.port]: true }))
  const update = () => {
    if (ref.current) {
      const { width, height, top, left } = ref.current.getBoundingClientRect()
      const style = {
        height,
        width,
        top,
        left
      }
      state.setAttr((pre: any) => ({
        ...pre,
        [props.port]: {
          ...props,
          style,
        },
      }))
      console.log('updating...')
      state.setProxyElement((pre) => ({ ...pre, [props.port]: ref.current }))
    }
  }

  useEffect(() => {
    // 每次props发生变化时，重新起飞
    state.setIsLanded(pre => ({ ...pre, [props.port]: false }))
    update()
    window.addEventListener('resize', update)
    state.setProxyElement((pre) => ({ ...pre, [props.port]: ref.current }))
    state.setComponent(pre => ({ ...pre, [props.port]: [props.children] }))
    console.log(ref, state.proxyElement)
    return () => {

      resolvedPromise.then(() => state.isLanded && state.setIsLanded((pre: any) => ({ ...pre, [props.port]: true })))
      state.setProxyElement((pre: any) => ({ ...pre, [props.port]: null }))
      window.removeEventListener('resize', update)
    }
  }, [props])


  const { proprops, children } = props
  return <div ref={ref} {...proprops} >

  </div>
};

export default RoterflyProxy;