import React from 'react';
import { Outlet } from 'react-router';
import { Float, FloatContainer, metadataContext } from '../../src';
import TheImage from './components/TheImage';

const App = () => {
  return (
    <Float>
      <>
      {<FloatContainer ><TheImage /></FloatContainer>}
      <Outlet />
      </>
    </Float>
  );
};

export default App;