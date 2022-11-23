import { CSSProperties, memo, ReactElement, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { RouterflyContext } from './RouterflyCarrier';
const RouterflyCraft = memo(({ component, port }: {
  component: ReactElement,
  port: string,
}) => {
  const state = useContext(RouterflyContext)
  const rect = state.proxyElement[+port].getBoundingClientRect()
  
  let mystyle: CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: `${rect?.width}px`,
    height: `${rect?.height}px`,
    margin: 0,
    padding: 0,
    transform: `translate3d(${rect?.left}px,${rect?.top}px,0px)`,
  }
  if (!state.proxyElement[+port]) {
    Object.assign(mystyle, {
      zIndex: -1,
      display: 'none',
    })
  }
  if (state.isLanded) {
    mystyle.display = 'none'
  }
  else {
    Object.assign(mystyle, {
      transitionProperty: 'all',
      transitionDuration: `800ms`,
      transitionTimingFunction: 'cubic-bezier(0.45, 0, 0.55, 1)',
    })
  }

  const divRef = useRef<HTMLElement>(null)
  // const update = async () => {
  //   // 等待一个tick，不然的话会出现抖动
  //   await Promise.resolve().then(() => {})
  //   state.setIsLanded(pre => ({...pre, [+port]: false}))
  //   if (divRef.current) {
  //     const style = divRef.current.style
  //     const rect = state.proxyElement[+port].getBoundingClientRect()
  //     if (rect) {
  //       const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  //       const scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft
  //       style.top = rect?.top + scrollTop + 'px'
  //       style.left = rect?.left + scrollLeft + 'px'
  //       style.opacity = '1'
  //       style.transform = 'none'
  //     } else {
  //       style.opacity = '0'
  //       style.transform = 'translateY(-20px) scale(0)'
  //       style.pointerEvents = 'none'
  //     }
  //   }
  //   clearTimeout(timer[+port])
  //   timer[+port] = setTimeout(() => {
  //     state.setIsLanded(pre => ({...pre, [+port]: true}))
  //   }, 900)
  // }
  // let timer: any[] = []
  // clearTimeout(timer[+port])
  // timer[+port] = setTimeout(() => {
  //   state.setIsLanded(pre => ({ ...pre, [+port]: true }))
  // }, 900)
  // useEffect(() => {
  //   update()
  //   let animationid = requestAnimationFrame(update)
  //   return () => {
  //     cancelAnimationFrame(animationid)
  //   }
  // }, [location.pathname, state.attr])

  console.log( mystyle);
  // console.log('carft')
  return (
    <div ref={divRef} {...state.attr[+port]}
      style={mystyle}
      onTransitionEnd={state.setIsLanded(pre => ({ ...pre, [+port]: true }))}
    >
      {
        state.attr[+port] && (state.isLanded[+port] && state.proxyElement[+port] ? (
          createPortal(
            state.attr[+port].children,
            state.proxyElement[+port]
          )
        ) :
          createPortal(
            state.attr[+port].children,
            document.querySelector('body')!
          )
        )
      }
    </div>
  );
});

export default RouterflyCraft;