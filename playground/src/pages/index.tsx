import { useNavigate } from 'react-router';
import Footer from '../components/footer/Footer';
import {FloatProxy} from '../../../src/';
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
      <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
        <p flex-1 text-left>
          No one’s born being good at all things. You become good at things through hard work.You’re not a varsity athlete the first time you play a new sport. You don’t hit every note the first time you sing a song.You’ve got to practice. The same principle applies to your schoolwork.You might have to do a math problem a few times before you get it right. You might have to read something a few times before you understand it.You definitely have to do a few drafts of a paper before it’s good enough to hand in.
        </p>
    </div>
  );
};

export default IndexPage;