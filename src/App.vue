<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'
import { request } from './utils/request'
const store = useUserStore()
const getUser = () => {
  // axios
  // .request({
  //   url: 'patient/myUser',
  //   method: 'GET',
  // })
  request('patient/myUser', 'GET', {})
}
const login = () => {
  // axios
  //   .request({
  //     url: 'login/password',
  //     method: 'POST',
  //     data: {
  //       mobile: '13211112222',
  //       password: 'testpassword',
  //     },
  //   })
  request('login/password', 'POST', {
    mobile: '13211112222',
    password: 'testpassword',
  })
    .then(() => {
      console.log('登录成功')
    })
    .catch((err) => {
      console.log('登录失败', err)
    })
}
</script>

<template>
  <div>
    App{{ store.user }}
    <van-button
      type="primary"
      @click="
        store.setUser({
          id: '1',
          avatar: '1',
          token: '1',
          mobile: '1',
          account: '1',
        })
      "
      >登录</van-button
    >
    <van-button type="primary" id="a2" @click="store.delUser()">退出</van-button>
    <van-button @click="getUser">获取用户信息</van-button>
    <van-button @click="login">登录</van-button>
  </div>
</template>

<style scoped></style>
