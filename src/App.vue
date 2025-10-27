<script setup lang="ts">
import { Button as VanButton } from 'vant'

function onClick12() {
  console.log('按钮点击了')
}
</script>

<template>
  <div>App<van-button type="primary" id="a12" @click="onClick12">按钮</van-button></div>
</template>

<style scoped></style>
