import { createContext, useContext, useEffect, useState } from 'react'
import { useMedia } from 'react-use'

const ThemeContext = createContext({
  theme: 'system',
  setTheme: () => {}
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system'
    }
    return 'system'
  })

  const systemPrefersDark = useMedia('(prefers-color-scheme: dark)', false)

  useEffect(() => {
    const root = window.document.documentElement
    const isDark = theme === 'dark' || (theme === 'system' && systemPrefersDark)

    root.classList.remove('light', 'dark')
    root.classList.add(isDark ? 'dark' : 'light')

    // Persist theme preference
    if (theme !== 'system') {
      localStorage.setItem('theme', theme)
    } else {
      localStorage.removeItem('theme')
    }
  }, [theme, systemPrefersDark])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
