<template>
  <div class="not-found">
    <van-nav-bar title="页面未找到" left-arrow @click-left="goBack" />
    <div class="content">
      <van-empty
        image="error"
        description="页面不存在"
      >
        <van-button type="primary" @click="goHome">返回首页</van-button>
      </van-empty>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 46px);
}
</style> 