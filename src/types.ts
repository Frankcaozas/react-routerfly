export interface RouterFlyOptions {
  /**
   * The duration of the animation in milliseconds.
   * @default 600
   */
  duration?: number
  /**
   * Easing function to use.
   * @see https://easings.net/
   * @default 'cubic-bezier(0.45, 0, 0.55, 1)'
   */
  easing?: string
  /**
   * Should keep the component alive if no proxy is presented
   *
   * @default false
   */
  keepAlive?: boolean
}

export type ResolvedRouterFlyOptions = Required<RouterFlyOptions>

export interface StarportCraftProps {
  /**
   * The id of the starport instance across routes
   */
  port: string
}

export interface RouterFlyProxyProps extends RouterFlyOptions, StarportCraftProps {
}

export interface RouterFlyProps extends RouterFlyProxyProps {
  /**
   * Props that apply to the proxy when it is mounted.
   */
  mountedProps?: Record<string, any>
  /**
   * Props that apply to the proxy before it is mounted.
   */
  initialProps?: Record<string, any>
}
