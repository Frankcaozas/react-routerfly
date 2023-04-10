import '@unocss/reset/tailwind.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'uno.css'
import { router } from './router'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <RouterProvider router={router} />
)
