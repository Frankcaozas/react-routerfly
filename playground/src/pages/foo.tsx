import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FloatProxy } from '../../../src/';
import TheImage from '../components/TheImage';

const Foo = () => {
  const nav = useNavigate()
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
    <div p='x-10 y-20' un-text="center gray-700 dark:gray-200 ma"  >
      <h1>foo page</h1>
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

      <div class="circle-0" m10 items-center max-w-180
        flex="~ col sm:row gap6">
        <FloatProxy style={style}
          port={'1'}
          rounded="1/2" overflow-hidden text-center transition-all w-full h-full>
          <TheImage />
        </FloatProxy>
        <p flex-1 text-left>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div flex='~ col sm:row gap6' items-center>

        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
        {/* <FloatProxy style={style} 
          port={'2'}
          rounded="1/2" overflow-hidden text-center >
            <TheImage />
          </FloatProxy> */}
      </div>


    </div>

  );
};

export default Foo;
