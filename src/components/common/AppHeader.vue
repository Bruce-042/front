<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    :left-arrow="showBack"
    @click-left="handleLeftClick"
    @click-right="handleRightClick"
  >
    <template #left v-if="$slots.left">
      <slot name="left" />
    </template>
    <template #right v-if="$slots.right">
      <slot name="right" />
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  leftText?: string
  rightText?: string
  showBack?: boolean
}

interface Emits {
  (e: 'left-click'): void
  (e: 'right-click'): void
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  leftText: '',
  rightText: '',
  showBack: false
})

const emit = defineEmits<Emits>()

const handleLeftClick = () => {
  if (props.showBack) {
    history.back()
  } else {
    emit('left-click')
  }
}

const handleRightClick = () => {
  emit('right-click')
}
</script>

<style scoped lang="scss">
:deep(.van-nav-bar) {
  background-color: var(--van-nav-bar-background-color, #fff);
  color: var(--van-nav-bar-text-color, #323233);
}

:deep(.van-nav-bar__title) {
  font-weight: 600;
}
</style> 