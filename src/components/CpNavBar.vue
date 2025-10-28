<script setup lang="ts">
//1，使用props来实现标题和右侧文字的设置、
difineProps<{
  title?: string
  rightText?: string
}>()
const emit = defineEmits<{
  (e: 'click-right'): void
}>()
//2，使用emits来实现自定义事件（点击右侧文字按钮）
const onClikRight = () => {
  //触发自定义事件
  emit('click-right')
}
</script>

<template>
  <!-- 固定定位 左侧箭头 标题 右侧文字 -->
  <van-nav-bar
    fixed
    left-arrow
    :title="title"
    :right-text="rightText"
    @click-right="onClikRight"
  ></van-nav-bar>
</template>

<style lang="scss" scoped>
:deep() {
  .van-nav-bar {
    &__arrow {
      font-size: 18px;
      color: var(--cp-text1);
    }
    &__text {
      font-size: 15px;
    }
  }
}
</style>
