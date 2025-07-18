<template>
  <div class="home">
    <van-nav-bar title="Smith 042" />
    <div class="content">
      <h2>欢迎来到 Smith 042</h2>
      <p>这是一个使用 Vue 3 + TypeScript + Vant 构建的现代化应用</p>
      <div class="buttons">
        <van-button type="primary" @click="goToAbout">关于我们</van-button>
        <van-button type="default" @click="goToTest">测试页面</van-button>
      </div>
      
      <div class="features">
        <van-cell-group>
          <van-cell title="Vue 3" value="Composition API" />
          <van-cell title="TypeScript" value="类型安全" />
          <van-cell title="Vant 4" value="移动端UI" />
          <van-cell title="Vite" value="快速构建" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}

const goToTest = () => {
  router.push('/test')
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.content {
  padding: 20px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.content h2 {
  color: #323233;
  margin-bottom: 16px;
  font-size: 24px;
}

.content p {
  color: #646566;
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 1.6;
}

.buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.features {
  margin-top: 32px;
}
</style> 