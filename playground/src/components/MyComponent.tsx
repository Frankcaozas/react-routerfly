import { useState } from 'react';
import { images } from '../data';

const MyComponent = ({ index, className }: { index: number, className?: string }) => {
  const [counter, setCounter] = useState(Math.round(Math.random() * 100))
  return (
    <div
      className={className}
      overflow-hidden w-full h-full
      transition-all duration-900
      relative select-none
      cursor-pointer
    >
      <img
        object-cover
        w-full h-full

        src={images[index]}
      />
      <div
        absolute pt-5 left-0 right-0 bottom-0
        // bg-gradient-to-t 
        // from-black:40 
        text-white font-mono flex
        items-center justify-center
        onClick={(e) => {
          e.stopPropagation()
          setCounter(counter + 1)
        }}
      >
        {counter}
      </div>
    </div>
  );
};

export default MyComponent;