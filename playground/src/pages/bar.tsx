import { useNavigate } from 'react-router';

const Bar = () => {
  const nav = useNavigate()
  const back = () => {
    nav('/')
  }


  return (
    <div p='x-10 y-20' un-text="center gray-700 dark:gray-200 ma"  >
      <h1>bar page</h1>
      <button btn
        onClick={back}>
        back
      </button>
    </div>

  );
};

export default Bar;
