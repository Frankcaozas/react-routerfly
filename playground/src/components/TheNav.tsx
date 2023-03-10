import React from 'react';
import { useDark } from '../hooks/useDark';

const TheNav = () => {
  const setDark = useDark()
  const toggleDark = () => {
    setDark((pre) => !pre)
  }
  return (
    <nav
      px-8 py-4 mb-4
      border="b gray-400/10"
      flex="~ gap2"
      text-xl items-center
    >
      <div flex-auto />

      <div flex="~ gap4" items-center>
        <a
          className="icon-btn"
          i-carbon-logo-github
          rel="noreferrer"
          href="https://github.com/Frankcaozas/react-routerfly"
          target="_blank"
          title="GitHub"
        />
        <button className="icon-btn !outline-none" onClick={toggleDark}>
          <div i-carbon-sun dark:i-carbon-moon ></div>
        </button>
      </div>
    </nav>
  );
};

export default TheNav;