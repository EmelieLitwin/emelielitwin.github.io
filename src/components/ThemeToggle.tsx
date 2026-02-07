import { useEffect } from 'react'

export default function ThemeToggle() {
  useEffect(() => {
    // Always set dark theme
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return null
}
