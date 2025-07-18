import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface UserInfo {
  id: string
  name: string
  avatar?: string
  email?: string
}

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo | null>(null)
  const token = ref<string>('')
  const isLoggedIn = ref<boolean>(false)

  // 设置用户信息
  const setUserInfo = (info: UserInfo) => {
    userInfo.value = info
    isLoggedIn.value = true
  }

  // 设置token
  const setToken = (newToken: string) => {
    token.value = newToken
  }

  // 登录
  const login = (info: UserInfo, newToken: string) => {
    setUserInfo(info)
    setToken(newToken)
  }

  // 登出
  const logout = () => {
    userInfo.value = null
    token.value = ''
    isLoggedIn.value = false
  }

  return {
    userInfo,
    token,
    isLoggedIn,
    setUserInfo,
    setToken,
    login,
    logout
  }
}) 