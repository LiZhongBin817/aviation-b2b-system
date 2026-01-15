/*
 * @Author: 斌Ge是我 1245972926@qq.com
 * @Date: 2026-01-14 21:31:04
 * @LastEditors: 斌Ge是我 1245972926@qq.com
 * @LastEditTime: 2026-01-16 01:17:05
 * @FilePath: \aviation-b2b-system\aviation-b2b-system\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/assets/styles/index.scss'
import store from './store'
import 'nprogress/nprogress.css' // already in your file; keep this
import NProgress from 'nprogress' // NEW: initialize NProgress
import "swiper/css";
import "swiper/css/navigation";

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
NProgress.configure({ showSpinner: false }) // optional: hide spinner
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})
router.afterEach(() => {
    NProgress.done()
})
app.use(router)
    .use(store)
    .mount('#app')

