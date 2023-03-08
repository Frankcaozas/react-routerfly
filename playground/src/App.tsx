import { Outlet } from 'react-router';
import { Float } from '../../src';

const App = () => {
  return (
    <Float>
      <>
        <main p='x-5 y-10' un-text="center gray-700 dark:gray-200 ">
          <Outlet />
        </main>

      </>
    </Float>
  );
};

export default App;