<script setup lang="ts">
//1，使用props来实现标题和右侧文字的设置、
defineProps<{
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
//3，回退，了解history.state信息，监听箭头事件按条件进行跳转
const onClickLeft = () => {
  //触发箭头自定义事件
  if (history.state?.back) {
    //有上一页，回退
    router.back()
  } else {
    //没有上一页，跳转首页
    router.replace('/')
  }
}
</script>

<template>
  <!-- 固定定位 左侧箭头 标题 右侧文字 -->
  <van-nav-bar
    fixed
    left-arrow
    @click-left="onClickLeft"
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
