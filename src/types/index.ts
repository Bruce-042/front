// 全局类型定义

// API响应类型
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

// 分页参数类型
export interface PaginationParams {
  page: number
  pageSize: number
}

// 分页响应类型
export interface PaginationResponse<T = any> {
  list: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// 用户信息类型
export interface UserInfo {
  id: string
  name: string
  avatar?: string
  email?: string
  phone?: string
  role?: string
  status?: 'active' | 'inactive'
  createdAt?: string
  updatedAt?: string
}

// 登录参数类型
export interface LoginParams {
  username: string
  password: string
  remember?: boolean
}

// 注册参数类型
export interface RegisterParams {
  username: string
  password: string
  confirmPassword: string
  email?: string
  phone?: string
}

// 文件上传响应类型
export interface UploadResponse {
  url: string
  filename: string
  size: number
  type: string
}

// 主题类型
export type Theme = 'light' | 'dark' | 'auto'

// 语言类型
export type Language = 'zh-CN' | 'en-US'

// 路由元信息类型
export interface RouteMeta {
  title?: string
  requiresAuth?: boolean
  roles?: string[]
  keepAlive?: boolean
  icon?: string
}

// 菜单项类型
export interface MenuItem {
  id: string
  title: string
  path?: string
  icon?: string
  children?: MenuItem[]
  meta?: RouteMeta
}

// 表格列配置类型
export interface TableColumn {
  prop: string
  label: string
  width?: number | string
  minWidth?: number | string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  formatter?: (row: any, column: any, cellValue: any) => string
}

// 表单规则类型
export interface FormRule {
  required?: boolean
  message?: string
  trigger?: 'blur' | 'change' | 'input'
  validator?: (rule: any, value: any, callback: any) => void
  pattern?: RegExp
  min?: number
  max?: number
  len?: number
}

// 环境变量类型
export interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_UPLOAD_URL: string
  readonly VITE_APP_ENV: 'development' | 'production' | 'test'
}

// 全局错误类型
export interface AppError {
  code: string | number
  message: string
  details?: any
  timestamp?: number
} 