// 本地存储工具类
export class Storage {
  private static instance: Storage
  private storage: globalThis.Storage

  constructor() {
    this.storage = window.localStorage
  }

  static getInstance(): Storage {
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }

  // 设置值
  set(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value)
      this.storage.setItem(key, serializedValue)
    } catch (error) {
      console.error('Storage set error:', error)
    }
  }

  // 获取值
  get<T = any>(key: string, defaultValue?: T): T | null {
    try {
      const item = this.storage.getItem(key)
      if (item === null) {
        return defaultValue || null
      }
      return JSON.parse(item)
    } catch (error) {
      console.error('Storage get error:', error)
      return defaultValue || null
    }
  }

  // 删除值
  remove(key: string): void {
    this.storage.removeItem(key)
  }

  // 清空所有
  clear(): void {
    this.storage.clear()
  }

  // 检查是否存在
  has(key: string): boolean {
    return this.storage.getItem(key) !== null
  }

  // 获取所有键
  keys(): string[] {
    return Object.keys(this.storage)
  }

  // 获取存储大小
  size(): number {
    return this.storage.length
  }
}

// 导出单例实例
export const storage = Storage.getInstance()

// 常用存储键名
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER_INFO: 'userInfo',
  THEME: 'theme',
  LANGUAGE: 'language'
} as const 