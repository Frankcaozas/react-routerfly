import { useState } from 'react';
import { useNavigate } from 'react-router';
import { RouterFly } from '../../../src/';
import Footer from '../components/footer/Footer';
import MyComponent from '../components/MyComponent';
import { images } from '../data';
import { useDark } from '../hooks/useDark';
const IndexPage = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState(false)

  const goNone = () => {
    navigate('/bar')
  }

  
  return (
    <div >
      
      <h1>Shared component across routes with animations </h1>

      <button btn onClick={goNone} my-8>go none</button>
      <button btn onClick={() => { setMode((mode) => { return !mode }) }}>toggle</button>

      <div id="gallery" grid="~ cols-1 sm:cols-2 md:cols-3 lg:cols-4 xl:cols-6" px-10 justify-center>
        {
          images.map((src, index) => {
            return (
              <RouterFly
                key={index}
                port={String(index)}
                className={mode ? 'aspect-1/1 m2' : 'aspect-16/9'}
                transition-all duration-800
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/' + index)
                }}
              >
                <MyComponent
                  className={mode ? 'rounded shadow-lg' : ''}
                  index={index}
                />
              </RouterFly>
            )
          })
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;