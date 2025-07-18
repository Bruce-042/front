declare module 'vue' {
  import { DefineComponent } from '@vue/runtime-dom'
  const _default: {
    install(app: any): void
  }
  export default _default
  export * from '@vue/runtime-dom'
}

declare module 'pinia' {
  export function defineStore(id: string, setup: () => any): any
  export function createPinia(): any
}

declare module 'vue-router' {
  export function createRouter(options: any): any
  export function createWebHistory(base?: string): any
  export function useRouter(): any
  export function useRoute(): any
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
} 