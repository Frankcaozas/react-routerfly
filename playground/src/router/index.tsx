import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import IndexPage from "../pages";
import Detail from "../pages/detail";
import None from "../pages/none";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <IndexPage />
      },
      // {
      //   path: '/foo',
      //   element: <Foo/>
      // },
      {
        path:'/bar',
        element: <None/>
      },
      {
        path:'/:index',
        element: <Detail/>
      }
    ]
  }
])