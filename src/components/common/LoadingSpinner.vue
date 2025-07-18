<template>
  <div class="loading-spinner" :class="{ overlay: overlay }">
    <van-loading
      :type="type"
      :size="size"
      :color="color"
      :text-color="textColor"
      :vertical="vertical"
    >
      {{ text }}
    </van-loading>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: 'circular' | 'spinner'
  size?: string | number
  color?: string
  textColor?: string
  text?: string
  vertical?: boolean
  overlay?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'circular',
  size: '24px',
  color: '#1989fa',
  textColor: '#969799',
  text: '加载中...',
  vertical: true,
  overlay: false
})
</script>

<style scoped lang="scss">
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  
  &.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 9999;
  }
}
</style> 