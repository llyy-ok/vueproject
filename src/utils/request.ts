import axios from 'axios'
import { useUserStore } from '@/stores'
import { showToast } from 'vant'
import { AxiosError } from 'axios'
const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: 'https://consult-api.itheima.net/',
  timeout: 10000,
})
// 2. 请求拦截器，携带token
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers['Authorization'] = `Bearer ${store.user?.token}`
    }
    return config
  },
  (err) => Promise.reject(err),
)
// 3. 响应拦截器，剥离无效数据，401拦截
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 处理业务失败
    if (res.data.code !== 10000) {
      //错误提示
      showToast(res.data.message || '请求失败，请稍后重试')
      //返回错误的promise
      return Promise.reject(res.data)
    }
    // TODO 4. 摘取核心响应数据
    return res
  },
  (err: AxiosError) => {
    // TODO 5. 处理401错误
    if (err.response?.status === 401) {
      // 删除用户信息
      const store = useUserStore()
      store.delUser()
      // 跳转登录，带上接口失效所在页面的地址，登录完成后回跳使用
      router.push({
        path: '/login',
        query: { returnUrl: router.currentRoute.value.fullPath },
      })
    }
    return Promise.reject(err)
  },
)

export default instance

export const request = (url: string, method: Method = 'Get', submitData: object) => {
  //参数：地址，请求方式，提交数据
  //返回：axios的请求结果（promise对象）
  return instance({
    url,
    method,
    //1.如果是get请求，需要使用params来传递submitData
    //2.如果不是get请求，需要使用data来传递submitData
    //[]语法：根据变量的值，来动态设置对象的属性
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData,
  })
}
