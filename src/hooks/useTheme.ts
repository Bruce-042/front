import { ref, watch, onMounted } from 'vue'
import { storage, STORAGE_KEYS } from '@/utils/storage'

export type Theme = 'light' | 'dark' | 'auto'

export function useTheme() {
  const currentTheme = ref<Theme>('light')

  // 获取系统主题
  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // 应用主题
  const applyTheme = (theme: Theme) => {
    const root = document.documentElement
    const actualTheme = theme === 'auto' ? getSystemTheme() : theme
    
    root.setAttribute('data-theme', actualTheme)
    root.classList.toggle('dark', actualTheme === 'dark')
  }

  // 设置主题
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme
    storage.set(STORAGE_KEYS.THEME, theme)
    applyTheme(theme)
  }

  // 切换主题
  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'auto']
    const currentIndex = themes.indexOf(currentTheme.value)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  // 监听系统主题变化
  const watchSystemTheme = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', () => {
      if (currentTheme.value === 'auto') {
        applyTheme('auto')
      }
    })
  }

  // 初始化主题
  const initTheme = () => {
    const savedTheme = storage.get<Theme>(STORAGE_KEYS.THEME, 'light')
    setTheme(savedTheme)
    watchSystemTheme()
  }

  onMounted(() => {
    initTheme()
  })

  return {
    currentTheme,
    setTheme,
    toggleTheme,
    getSystemTheme
  }
} 