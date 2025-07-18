<template>
  <div class="about">
    <van-nav-bar title="关于" left-arrow @click-left="goBack" />
    <div class="content">
      <van-cell-group>
        <van-cell title="项目名称" value="Smith 042" />
        <van-cell title="技术栈" value="Vue 3 + TypeScript + Vant" />
        <van-cell title="构建工具" value="Vite" />
        <van-cell title="UI组件库" value="Vant 4" />
      </van-cell-group>
      
      <div class="features">
        <h3>项目特性</h3>
        <van-cell-group>
          <van-cell title="Vue 3 Composition API" />
          <van-cell title="完整的TypeScript支持" />
          <van-cell title="移动端优先的UI设计" />
          <van-cell title="快速的热重载开发体验" />
          <van-cell title="优化的生产构建" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.about {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.content {
  padding: 16px;
}

.features {
  margin-top: 20px;
}

.features h3 {
  margin: 0 0 12px 0;
  color: #323233;
  font-size: 16px;
  padding: 0 16px;
}
</style> 