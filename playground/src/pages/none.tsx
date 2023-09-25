import { useNavigate } from 'react-router';

const None = () => {
  const nav = useNavigate()
  const back = () => {
    nav('/')
  }

  return (
    <div>
      <h1 py-5>none page</h1>
      <button btn 
        onClick={back}>
        back
      </button>
    </div>

  );
};

export default None;
