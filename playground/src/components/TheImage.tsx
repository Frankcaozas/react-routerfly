import React, { useState } from 'react';
import { useAsyncError } from 'react-router';

const TheImage = (props: any) => {
  const [a, setA] = useState(false)
  const clickHandler = () => {
    setA(pre => !pre)
  }
  const [cnt, setCnt] = useState(1)
  const inc = () => { setCnt(pre => pre + 1) }
  return (
    <>
    <div {...props} relative>
      {a ? <img onClick={
        clickHandler
      }
        src="https://images.unsplash.com/photo-1618125214135-83ced9805c7b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTMyNDcw&ixlib=rb-1.2.1&q=80&w=512" alt="" /> :
        <img onClick={
          clickHandler
        }
          src="https://images.unsplash.com/photo-1620315808304-66597517f188?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTMyNTE4&ixlib=rb-1.2.1&q=80&w=512" alt="" />}
      <span
        className='absolute bottom-0 left-1/2 text-white'
        onClick={e => {
          e.stopPropagation()
          setCnt(cnt + 1)
        }}
      >
        {cnt}
      </span>
    </div>
    
    </>
  );
};

export default TheImage;