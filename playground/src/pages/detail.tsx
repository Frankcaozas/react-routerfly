import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { RouterFly } from '../../../src';
import MyComponent from '../components/MyComponent';
import { images } from '../data';

const Detail = () => {
  const nav = useNavigate()
  const { index } = useParams()
  const next = (Number(index ? index : 0) + 1) % images.length
  const back = () => {
    nav('/')
  }
  const [size, setSize] = useState(200)
  const enlarge = () => {
    setSize(pre => pre + 30)
  }
  const reset = () => {
    setSize(200)
  }
  const style = {
    width: size + 'px',
    height: size + 'px',
  }
  return (
    <div   >
      <h1 mb-2 font-mono>same instance of component in different pages</h1>
      <div flex='~ gap-2' justify-center>
        <button btn
          onClick={back}>
          back
        </button>
        <button onClick={enlarge} btn >
          enlarge
        </button>
        <button onClick={reset} btn >
          reset
        </button>
      </div>


      <div className="circle-0" mx-a items-center max-w-180 my-5
        flex="~ col sm:row gap6">
        <RouterFly style={style}
          port={String(index)+'routerfly'}
          rounded="1/2" overflow-hidden text-center transition-all w-full h-full>
          <MyComponent index={index} />
        </RouterFly>
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
      </div>

      <div flex='~ col sm:row gap6' className="circle-0" mx-a items-center max-w-180>
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
        <RouterFly style={style}
          port={String(next)+'routerfly'}
          rounded="1/2" overflow-hidden text-center transition-all w-full h-full>
          <MyComponent index={next} />
        </RouterFly>
      </div>
    </div>

  );
};

export default Detail;
