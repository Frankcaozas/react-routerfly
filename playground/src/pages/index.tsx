import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router';
import { useLocalStorage } from 'react-use';
import { RouterFly } from '../../../src';
import MyComponent from '../components/MyComponent';
import { images } from '../data';
const IndexPage = () => {
  const navigate = useNavigate()
  const [localMode, setLocalMode] = useLocalStorage('img-mode', true);

  const goNone = () => {
    navigate('/bar')
  }

  return (
    <div items-center>
      <h1 text-xl font-mono>Shared React component across routes with animations </h1>

      <div p2 flex="~ gap-2" justify-center my-5>
        <button btn onClick={goNone} >go none</button>
        <button btn onClick={() => {
          setLocalMode(!localMode)
        }}>toggle</button>
      </div>
      <h1 font-mono>click the img or the number </h1>

      <div id="gallery" grid="~ cols-1 sm:cols-2 md:cols-3 lg:cols-4 xl:cols-6" px-10 justify-center mt-5>
        {
          images.map((src, index) => {
            return (
              <RouterFly
                keepAlive={true}
                key={index}
                port={String(index) + 'routerfly'}
                className={localMode ? 'aspect-16/9' : 'aspect-1/1 m2'}
                transition-all duration-800 m-1
                onClick={(e: SyntheticEvent) => {
                  e.preventDefault()
                  navigate('/' + index)
                }}
              >
                <MyComponent
                  className={localMode ? 'rounded shadow-lg' : ''}
                  index={index}
                />
              </RouterFly>
            )
          })
        }
      </div>
    </div>
  );
};

export default IndexPage;