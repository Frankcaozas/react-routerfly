import { useDark } from '../../hooks/useDark';
const footer = () => {
  const setDark = useDark()
  const toggleDark = () => {
    setDark((pre) => !pre)
  }
  return (
    <nav mt-10 >
      <button icon-btn >
        <div i-carbon-sun dark:i-carbon-moon onClick={toggleDark}></div>
      </button>
      <a
        icon-btn i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
        title="GitHub"
      />
      {/* <div className='emoji' icon-btn/> */}
    </nav>
  )
}


export default footer
