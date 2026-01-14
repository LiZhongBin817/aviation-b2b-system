<template>
  <div class="legacy-login-page">
    <div class="inheader">
      <a href="#" class="logo"><img src="/images/logo.png" alt="logo"/></a>
      <div class="inheader-right"><a href="#">Register</a></div>
    </div>

    <div id="dowebok">
      <div class="section" id="section1">
        <div class="login-box" data-wow-duration="1.2s">
          <h3 class="title">Account login</h3>
          <div class="login-item">
            <span>Account：</span>
            <input type="text" placeholder="Username/email address/mobile phone number" v-model="loginForm.username" />
          </div>
          <div class="login-item">
            <span>Password:</span>
            <input type="password" placeholder="Please enter the password." v-model="loginForm.password" @keyup.enter="handleLogin" />
          </div>
          <div class="login-item login-item-yzm">
            <input type="text" placeholder="Please enter the verification code" v-model="loginForm.code" />
            <a href="#" @click.prevent="getCodeImage"><img :src="codeImageUrl || '/images/codetp.png'" alt="验证码"/></a>
          </div>
          <div class="login-item">
            <button type="button" @click="handleLogin">Log in</button>
          </div>
          <div class="login-item"><a href="#" class="forgot">Forgot password?</a></div>
        </div>
      </div>

      <div class="section" id="section2">
        <div class="inabout-box">
          <div class="inabout-left">
            <img src="/images/worktp.jpg" alt="" />
            <div class="inabout-title">
              <p>Work together</p>
              <p>with one heart</p>
              <br />
              <p>Co-create the</p>
              <p>future</p>
            </div>
          </div>
          <div class="inabout-right">
            <div class="inabout-right-content">
              <h3 class="title">Zhongyuan Aviation</h3>
              <p>Registered in 2005: First-class civil aviation agency qualification
                Shenzhen Zhongyuan was established in 2005, with its headquarters located in Shenzhen, China.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section" id="section3">
        <div class="inwarp">
          <div class="intitle">Business philosophy</div>
          <div class="inbusiness-box">
            <a href="#" class="inbusiness-item"><img src="/images/busin01.jpg" alt="" /><h3>Concept</h3><p>Quality, efficiency, unity, practicality</p></a>
            <a href="#" class="inbusiness-item"><img src="/images/busin02.jpg" alt="" /><h3>Enterprise spirit</h3><p>Honesty is people-oriented、Unity and diligence</p></a>
            <a href="#" class="inbusiness-item"><img src="/images/busin03.jpg" alt="" /><h3>Task</h3><p>Meet customer needs Create shared value</p></a>
            <a href="#" class="inbusiness-item"><img src="/images/busin04.jpg" alt="" /><h3>Slogan</h3><p>Become a leading airline、Service provider</p></a>
            <a href="#" class="inbusiness-item"><img src="/images/busin05.jpg" alt="" /><h3>Value</h3><p>Work together Create a better future</p></a>
          </div>
        </div>
      </div>

      <div class="section" id="section4">
        <div class="inwarp">
          <div class="intitle">Our uniqueness</div>
          <div class="inour-box">
            <a href="#" class="inour-item"><img src="/images/uniqu01.jpg" alt="" /><h3>A powerful IT team</h3><p>We have a powerful independent IT team...</p></a>
            <a href="#" class="inour-item"><img src="/images/uniqu02.jpg" alt="" /><h3>Advanced operating system</h3><p>The advanced system can automatically complete price comparison...</p></a>
            <a href="#" class="inour-item"><img src="/images/uniqu03.jpg" alt="" /><h3>An experienced management team</h3><p>Two experienced vice presidents of operations...</p></a>
            <a href="#" class="inour-item"><img src="/images/uniqu04.jpg" alt="" /><h3>Professional service team</h3><p>After 20 years of development...</p></a>

            <div class="inwarp partner-contact">
              <div class="intitle">Partner</div>
              <div class="partner-box">
                <div class="swiper-container"><div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="/images/partn01.png" alt=""/></div>
                  <div class="swiper-slide"><img src="/images/partn02.png" alt=""/></div>
                  <div class="swiper-slide"><img src="/images/partn03.png" alt=""/></div>
                  <div class="swiper-slide"><img src="/images/partn04.png" alt=""/></div>
                  <div class="swiper-slide"><img src="/images/partn05.png" alt=""/></div>
                </div></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
              <div class="incontact-box"><div class="intitle">Contact us</div>
                <div class="incontact-ul">
                  <div class="incontact-item"><img src="/images/contact01.png" alt=""/><h3>Contact number</h3><p>86-755-82255555</p></div>
                  <div class="incontact-item"><img src="/images/contact02.png" alt=""/><h3>Contact email</h3><p>8cikychen@ zhongyuanair.com.cn</p></div>
                  <div class="incontact-item"><img src="/images/contact03.png" alt=""/><h3>Address</h3><p>Room 1708, Shennan Sunshine Building...</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copy">Yue ICP No. 2022074476. All rights reserved by Zhongyuan Aviation ©</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import request from '@/utils/request'

const router = useRouter()
const route = useRoute()
const loading = ref(false)
const loginForm = ref({ username:'', password:'', code:'', codeToken:'' })
const codeImageUrl = ref('')

function handleLogin() {
  const userStore = useUserStore()
  loading.value = true
  userStore.login(loginForm.value).then(() => {
    loading.value = false
    const redirect = route.query.redirect || '/index'
    router.push(redirect)
  }).catch(() => {
    loading.value = false
    getCodeImage()
  })
}

function getCodeImage() {
  request({ url: '/captcha/image', method: 'get' }).then(res => {
    codeImageUrl.value = res.data.image
    loginForm.value.code = ''
    loginForm.value.codeToken = res.data.codeToken
  }).catch(()=>{})
}

onMounted(() => {
  getCodeImage()

  const loadCss = (href) => {
    if (document.querySelector(`link[href="${href}"]`)) return
    const l = document.createElement('link')
    l.rel = 'stylesheet'
    l.href = href
    document.head.appendChild(l)
  }

  const loadScript = (src) => new Promise((resolve,reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const s = document.createElement('script')
    s.src = src
    s.async = false
    s.onload = () => resolve()
    s.onerror = (e) => reject(e)
    document.body.appendChild(s)
  })

  // Legacy CSS files (served from public/) — order matters; correct paths
  [
    '/iconfont/iconfont.css',
    '/css/basic.css',
    '/css/style.css',
    '/css/style-rel.css',
    '/css/animation.css',
    '/css/jedate.css',
    '/swiper/swiper.min.css',
    '/css/jquery.fullpage.min.css'
  ].forEach(h => loadCss(h))

  ;(async () => {
    try {
      await loadScript('/js/jquery-1.11.0.min.js')
      await loadScript('/js/wow.min.js')
      await loadScript('/swiper/swiper.min.js')
      await loadScript('/js/jquery.fullpage.min.js')
      // load main site script last (may contain extra behavior)
      await loadScript('/js/js.js')

      // Try to initialize fullpage if available
      if (window.$ && window.$.fn && window.$.fn.fullpage) {
        window.$('#dowebok').fullpage({
          sectionsColor: ['#fff','#000','#ff0000','#fff'],
          navigation: true,
          navigationPosition: 'left',
          css3: true,
          afterLoad: function(anchorLink,index) {
            if (index == 1) { window.$('.login-box').addClass('animated fadeInUp') }
            if (index == 2) { window.$('.inabout-box').addClass('animated fadeInUp') }
            if (index == 3) { window.$('.inbusiness-box').addClass('animated fadeInUp') }
            if (index == 4) { window.$('.inour-box').addClass('animated fadeInUp'); window.$('.incontact-ul').addClass('animated fadeInUp') }
          }
        })
      }

      if (window.Swiper) {
        try { new window.Swiper('.swiper-container', { loop:true, navigation:{ nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}, autoplay:{ delay:3000 } }) } catch(e){}
      }
    } catch(err) {
      console.warn('legacy assets load failed', err)
    }
  })()
})
</script>

<style>
@import '/iconfont/iconfont.css';
@import '/css/basic.css';
@import '/css/style.css';
@import '/css/style-rel.css';
@import '/css/animation.css';
@import '/css/jedate.css';
@import '/swiper/swiper.min.css';
@import '/css/jquery.fullpage.min.css';

/* Minimal wrapper; keep a couple local rules if needed */
.legacy-login-page { position: relative; min-height: 100vh; }
.legacy-login-page .copy { text-align:center }
</style>
<!--
 * @Author: 斌Ge是我 1245972926@qq.com
 * @Date: 2026-01-14 21:31:04
 * @LastEditors: 斌Ge是我 1245972926@qq.com
 * @LastEditTime: 2026-01-15 01:20:45
 * @FilePath: \aviation-b2b-system\aviation-b2b-system\src\views\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
