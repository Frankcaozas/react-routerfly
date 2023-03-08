import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FloatProxy } from '../../../src';
import MyComponent from '../components/MyComponent';
import { images } from '../data';

const Detail = () => {
  const nav = useNavigate()
  const { index } = useParams()
  const next = (Number(index ? index : 0) + 1) % images.length
  const back = () => {
    nav('/')
  }
  const [size, setSize] = useState(100)
  const enlarge = () => {
    setSize(pre => pre + 30)
  }
  const reset = () => {
    setSize(100)
  }
  // console.log(size);
  const style = {
    width: size + 'px',
    height: size + 'px',
  }
  return (
    <div   >
      <h1>detail page</h1>
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

      <div className="circle-0" mx-a items-center max-w-180 my-5
        flex="~ col sm:row gap6">
        <FloatProxy style={style}
          port={String(index)}
          rounded="1/2" overflow-hidden text-center transition-all w-full h-full>
          <MyComponent index={index} />
        </FloatProxy>
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
      </div>

      <div flex='~ col sm:row gap6' className="circle-0" mx-a items-center max-w-180>
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
        <FloatProxy style={style}
          port={String(next)}
          rounded="1/2" overflow-hidden text-center transition-all w-full h-full>
          <MyComponent index={next} />
        </FloatProxy>
      </div>
    </div>

  );
};

export default Detail;
