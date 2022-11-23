import { useEffect, useState } from 'react'

export const useDark = () => {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('color-schema') || 'auto'
  const value =
    setting === 'dark' || (prefersDark && setting != 'light') ? true : false
  const [isDark, setIsDark] = useState<boolean>(value)
  useEffect(() => {
    localStorage.setItem('color-schema', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])
  return setIsDark
}
