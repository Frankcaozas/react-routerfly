import { useNavigate } from 'react-router';
import Footer from '../components/footer/Footer';
import FloatProxy from '../FloatProxy';
const IndexPage = () => {
  const navigate = useNavigate()
  const goFoo = () => {
    navigate('/foo')
  }
  const goBar = () => {
    navigate('/bar')
  }
  return (
    <div p='x-10 y-20' un-text="center gray-700 dark:gray-200 ma">
      <div>
      <FloatProxy overflow-hidden w-50 h-50 rounded-xl mx-a/>
      </div>


      <h1>home page</h1>
      <button btn onClick={goFoo}>foo</button>
      <button btn onClick={goBar}>bar</button>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;