<br>
<p align="center">
React 跨路由共享组件 
</p>
<p align="center"><a href="https://friendly-paletas-0b8746.netlify.app/">Live Playground</a></p>
<p align="center">
Inspired by <a href="https://github.com/antfu/">Antfu</a>
</p>
<br>

## Why

我们经常会在不同页面使用同一个组件，他们在不同页面之间的位置和大小形状不同。
有时我们希望在路由间跳转时，相同组件能有流畅的过渡动画。

React 的组件结构以 **_树_** 的形式呈现，即使是相同的组件在不同的路由下也会有不同的实例，这意味着当用户在路由之间跳转时，同样的组件并不会跨路由共享。

<p align="center">
<img src="./graphs/readme1.png" width="400" />
</p>

已有的跨路由组件解决方案是 [FLIP](https://github.com/googlearchive/flipjs), 它可以模拟组件之间的过渡动画， 然而我们还是创建了两个组件实例， 并且组件内部的状态会丢失。

Routerfly 就是为了解决这一需求， 你可以将其理解为 [Vue Starport](https://github.com/antfu/vue-starport) 的 React 版本。

## How

既然我们无法在组件树的不同分支之间共享组件，我们其实上可以将组件提升到根节点上，从而它们独立于路由而存在。

使用一个 **代理组件** 获取该组件的位置，尺寸，props， 并将信息传递给真实的组件， 让它在切换路由时通过动画飞到另一个页面的位置。

<p align="center">
<img src="./graphs/readme2.png" width="400" />
</p>

但这样做有个问题，该组件在 DOM 树中的节点位置和原本不一样，它是漂浮于根节点的。当动画结束后。

<p align="center">
<img src="./graphs/readme2.png" width="400" />
</p>

用 [createPortal](https://beta.reactjs.org/reference/react-dom/createPortal) 函数将其传送到 DOM 树的实际节点。
通过这种“降落”机制， DOM 树就可以保持原有的结构。

## Usage

从 `vue-starport` 导出并添加 `<RouterFlyCarrier>` 组件到根组件 (`app.ts`)。 所有的 `<RouterFly>` 组件调用需要在 `<RouterFlyCarrier>` 组件内部。

```ts
import { RouterFlyCarrier } from 'react-routerfly'

const App = () => {
  return (
    <RouterFlyCarrier>
      <>
        <TheNav />
        <main p="x-5" un-text="center gray-700 dark:gray-200 ">
          <Outlet />
        </main>
      </>
    </RouterFlyCarrier>
  )
}

export default App
```

在某个页面， 使用`<RouterFly>`来包裹组件, 并传入`port`属性(number)

```ts
import {RouterFly} from 'react-routerfly'

const PageA = () => {
  return (
    <div>
    <!-- ... -->
    <RouterFly port="my-num" style="height:600px">
      <MyComponent prop={value} />
    </RouterFly>
  </div>
  );
};

export default App;
```

在另一个页面上，使用相同的port使其匹配
```ts
import {RouterFly} from 'react-routerfly'

const PageA = () => {
  return (
    <div>
    <!-- ... -->
    <RouterFly port="my-num" style="height:600px">
      <MyComponent prop={value} />
    </RouterFly>
  </div>
  );
};

export default App;
```

> 请注意，你可能需要对 `<RouterFly>` 添加一些样式，使其在没有内容时也能拥有的大小。 并且将布局相关的样式放在`<RouterFly>`上。

## Todo
- [ ] 可配置keepalive（当前默认开启keepalive，跳转到没有相应`<RouterFly>`代理的页面时，不会被销毁）