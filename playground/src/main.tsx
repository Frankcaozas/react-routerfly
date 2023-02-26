import '@unocss/reset/tailwind.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'uno.css'
import TheImage from './components/TheImage'
import { router } from './router'
import  { metadataContext, Float } from '../../src/'
import {FloatContainer} from '../../src/'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <Float>
                <>
                        <RouterProvider router={router} />
                        <metadataContext.Consumer>
                                {() => {return (<FloatContainer ><TheImage /></FloatContainer>)}}
                        </metadataContext.Consumer>
                </>

        </Float>
)
