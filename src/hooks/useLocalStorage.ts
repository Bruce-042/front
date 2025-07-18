import { ref, watch } from 'vue'
import { storage } from '@/utils/storage'

export function useLocalStorage<T>(key: string, defaultValue?: T) {
  const storedValue = storage.get<T>(key, defaultValue)
  const value = ref<T | null>(storedValue)

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
  watch(value, (newValue) => {
    if (newValue === null) {
      storage.remove(key)
    } else {
      storage.set(key, newValue)
    }
  })

  return {
    value,
    setValue,
    removeValue
  }
} 