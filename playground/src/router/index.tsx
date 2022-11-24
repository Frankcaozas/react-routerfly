import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages";
import Bar from "../pages/bar";
import Foo from "../pages/foo";
export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <IndexPage />
      },
      {
        path: '/foo',
        element: <Foo/>
      },
      {
        path:'/bar',
        element: <Bar/>
      }
    ]
  }
])