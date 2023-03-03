import '@unocss/reset/tailwind.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'uno.css'
import TheImage from './components/TheImage'
import { router } from './router'
import { Float } from '../../src/'
import { FloatContainer } from '../../src/'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <RouterProvider router={router} />
)
