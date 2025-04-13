import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Theme"
      type="button"
      className="flex items-center justify-center p-2 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={cycleTheme}
      title={`Theme: ${theme} ${theme === 'system' ? `(${resolvedTheme})` : ''}`}
    >
      {theme === 'light' ? (
        <SunIcon className="w-4 h-4" />
      ) : theme === 'dark' ? (
        <MoonIcon className="w-4 h-4" />
      ) : (
        <ComputerDesktopIcon className="w-4 h-4" />
      )}
    </button>
  )
}
