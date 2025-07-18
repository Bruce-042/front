declare module 'vue' {
  import { DefineComponent } from '@vue/runtime-dom'
  const _default: {
    install(app: any): void
  }
  export default _default
  export * from '@vue/runtime-dom'
  
  // Vue 3 Composition API
  export function createApp(rootComponent: any): any
  export function ref<T>(value: T): { value: T }
  export function reactive<T>(obj: T): T
  export function computed<T>(getter: () => T): { readonly value: T }
  export function watch(source: any, callback: any, options?: any): void
  export function onMounted(callback: () => void): void
}

declare module 'pinia' {
  export interface Pinia {
    install(app: any): void
  }
  
  export function defineStore(id: string, setup: () => any): any
  export function createPinia(): Pinia
}

declare module 'vue-router' {
  export interface RouteRecordRaw {
    path: string
    name?: string
    component?: any
    meta?: any
    children?: RouteRecordRaw[]
  }
  
  export interface Router {
    beforeEach(guard: any): void
    push(to: string | any): Promise<any>
    back(): void
  }
  
  export function createRouter(options: any): Router
  export function createWebHistory(base?: string): any
  export function useRouter(): Router
  export function useRoute(): any
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vant' {
  export function showToast(message: string): void
  export function showDialog(options: any): Promise<any>
  export function showLoading(message?: string): void
  export function closeLoading(): void
}

declare module 'axios' {
  export interface AxiosInstance {
    create(config?: any): AxiosInstance
    interceptors: {
      request: {
        use(onFulfilled?: any, onRejected?: any): void
      }
      response: {
        use(onFulfilled?: any, onRejected?: any): void
      }
    }
  }
  
  export interface InternalAxiosRequestConfig {
    headers?: any
    [key: string]: any
  }
  
  export interface AxiosResponse<T = any> {
    data: T
    status: number
    statusText: string
    headers: any
    config: any
  }
  
  export interface AxiosError {
    response?: {
      status: number
      data: any
    }
    message: string
  }
  
  export function create(config?: any): AxiosInstance
  const axios: AxiosInstance
  export default axios
}

// 相对路径模块声明
declare module './router' {
  const router: any
  export default router
}

declare module './stores' {
  const pinia: any
  export default pinia
}

declare module './App.vue' {
  const App: any
  export default App
}

// 路径别名模块声明
declare module '@/utils/storage' {
  export const storage: any
  export const STORAGE_KEYS: any
}

declare module '@/utils/request' {
  const request: any
  export default request
}

declare module '@/utils/validate' {
  export function validatePhone(phone: string): boolean
  export function validateEmail(email: string): boolean
  export function validatePassword(password: string): any
}

declare module '@/stores/user' {
  export const useUserStore: any
}

declare module '@/hooks/useTheme' {
  export function useTheme(): any
}

declare module '@/hooks/useLocalStorage' {
  export function useLocalStorage<T>(key: string, defaultValue?: T): any
}

// Views 模块声明
declare module '@/views/Home.vue' {
  const Home: any
  export default Home
}

declare module '@/views/About.vue' {
  const About: any
  export default About
}

declare module '@/views/NotFound.vue' {
  const NotFound: any
  export default NotFound
}

declare module '@/views/Test.vue' {
  const Test: any
  export default Test
}

// 样式文件模块声明
declare module '*.scss' {
  const content: any
  export default content
}

declare module '*.css' {
  const content: any
  export default content
} 