import React from 'react';
import { Outlet } from 'react-router';
import { Float, FloatContainer } from '../../src';
import TheImage from './components/TheImage';

const App = () => {
  return (
    <Float>
      <>
      {/* {<FloatContainer port={1}><TheImage/></FloatContainer>} */}
      <Outlet />
      </>
    </Float>
  );
};

export default App;