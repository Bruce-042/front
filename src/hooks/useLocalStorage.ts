import { ref, watch } from 'vue'
import { storage } from '@/utils/storage'

export function useLocalStorage<T>(key: string, defaultValue?: T) {
  const storedValue = (storage.get<T>(key, defaultValue) as T) || defaultValue
  const value = ref<T | null>(storedValue as T | null)

  // 设置值
  const setValue = (newValue: T) => {
    value.value = newValue
    storage.set(key, newValue)
  }

  // 删除值
  const removeValue = () => {
    value.value = null
    storage.remove(key)
  }

  // 监听值变化
  watch(value, (newValue: T | null) => {
    if (newValue === null) {
      storage.remove(key)
    } else {
      storage.set(key, newValue as any)
    }
  })

  return {
    value,
    setValue,
    removeValue
  }
} 