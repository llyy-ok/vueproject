//创建pinia实例
//使用pinia插件
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

//import {userStore} from './moudules/user'

//export {userStore}
export * from './moudules/user' //里面的全部导出
