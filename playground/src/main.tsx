import '@unocss/reset/tailwind.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'uno.css'
import TheImage from './components/TheImage'
import Float, { metadataContext } from './Float'
import FloatContainer from './FloatContainer'
import { router } from './router'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<Float>
        <>
                <RouterProvider router={router} />
                <metadataContext.Consumer>
                        {(context) => {
                                return (<FloatContainer >
                                        <TheImage  />
                                 </FloatContainer>)
                        }
                        }

                </metadataContext.Consumer>

        </>

</Float>
)
