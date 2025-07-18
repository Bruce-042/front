<template>
  <div class="empty-state">
    <van-empty
      :image="image"
      :image-size="imageSize"
      :description="description"
    >
      <template #bottom>
        <slot name="action">
          <van-button
            v-if="showAction"
            :type="actionType"
            :size="actionSize"
            @click="handleAction"
          >
            {{ actionText }}
          </van-button>
        </slot>
      </template>
    </van-empty>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image?: string
  imageSize?: number
  description?: string
  showAction?: boolean
  actionText?: string
  actionType?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  actionSize?: 'large' | 'normal' | 'small' | 'mini'
}

interface Emits {
  (e: 'action'): void
}

const props = withDefaults(defineProps<Props>(), {
  image: 'default',
  imageSize: 120,
  description: '暂无数据',
  showAction: false,
  actionText: '刷新',
  actionType: 'primary',
  actionSize: 'normal'
})

const emit = defineEmits<Emits>()

const handleAction = () => {
  emit('action')
}
</script>

<style scoped lang="scss">
.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 20px;
}
</style> 