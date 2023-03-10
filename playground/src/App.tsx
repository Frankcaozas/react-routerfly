import { Outlet } from 'react-router';
import { Float, RouterFlyCarrier } from '../../src';
import TheNav from './components/TheNav';

const App = () => {
  return (
    <RouterFlyCarrier>
      <>
        <TheNav/>
        <main p='x-5' un-text="center gray-700 dark:gray-200 ">
          <Outlet />
        </main>

      </>
    </RouterFlyCarrier>
  );
};

export default App;