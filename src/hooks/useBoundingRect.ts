import { useState } from 'react'

export function useBoundingRect(el: HTMLElement) {
  const [rect, setRect] = useState({
    height: 0,
    width: 0,
    left: 0,
    top: 0,
    update,
    listen,
    pause,
    margin: '0px',
    padding: '0px',
  })

  function update() {
    
    if (!el) return
    console.log('react update')
    const { height, width, left, top } = el.getBoundingClientRect()
    const domStyle = window.getComputedStyle(el)
    const margin = domStyle.margin
    const padding = domStyle.padding
    setRect(rect => Object.assign(rect, {
      height,
      width,
      left,
      top: document.body.scrollTop + top,
      margin,
      padding,
    }))
  }
  let animationId: number
  function listen() {
    update()
    animationId = window.requestAnimationFrame(update)
  }
  function pause() {
    cancelAnimationFrame(animationId)
  }

  return rect
}
