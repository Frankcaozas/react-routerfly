import { useNavigate } from 'react-router';
import Footer from '../components/footer/Footer';
import TheImage from '../components/TheImage';
import FloatProxy from '../FloatProxy';
const IndexPage = () => {
  const navigate = useNavigate()
  const go = () => {
    navigate('/foo')
  }
  return (
    <div p='x-10 y-20' un-text="center gray-700 dark:gray-200 ma">
      <div>
      <FloatProxy overflow-hidden w-50 h-50 rounded-xl mx-a/>
      </div>

      <h1>home page</h1>
      <button btn onClick={go}>go</button>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;