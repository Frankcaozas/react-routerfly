import { useNavigate } from 'react-router';
import { useLocalStorage } from 'react-use';
import { RouterFly } from '../../../src/';
import MyComponent from '../components/MyComponent';
import { images } from '../data';
const IndexPage = () => {
  const navigate = useNavigate()
  const [localMode, setLocalMode] = useLocalStorage('img-mode', false);

  const goNone = () => {
    navigate('/bar')
  }

  return (
    <div items-center>

      <h1>Shared React component across routes with animations </h1>

      <div p2 flex="~ gap-2" justify-center>
        <button btn onClick={goNone} >go none</button>
        <button btn onClick={()=>{
          setLocalMode(!localMode)
        }}>toggle</button>
      </div>


      <div id="gallery" grid="~ cols-1 sm:cols-2 md:cols-3 lg:cols-4 xl:cols-6" px-10 justify-center>
        {
          images.map((src, index) => {
            return (
              <RouterFly
                key={index}
                port={String(index)}
                className={localMode ? 'aspect-16/9' : 'aspect-1/1 m2'}
                transition-all duration-800
                onClick={(e) => {
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