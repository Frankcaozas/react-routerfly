import { useNavigate } from 'react-router';
import FloatProxy from '../FloatProxy';
import React, { useState } from 'react';

const Foo = () => {
  const nav = useNavigate()
  const back = () => {
    nav('/')
  }
  const [size, setSize] = useState(100)
  const enlarge = () => {
    setSize(pre => pre + 10)
  }
  const reset = () => {
    setSize(100)
  }
  console.log(size);
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

      <div flex='~ col-reverse sm:row gap6' items-center>
        <FloatProxy style={style} transition-all 
          rounded="1/2" overflow-hidden text-center />
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
      </div>
    </div>

  );
};

export default Foo;
