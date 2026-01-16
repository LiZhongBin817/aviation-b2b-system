<template>
  <div>
    <div class="inheader">
      <a href="" class="logo"><img src="/images/logo.png" /></a>
      <div class="inheader-right">
        <a href="">Register</a>
      </div>
    </div>

    <div id="dowebok">
      <div class="section" id="section1">
        <form class="login-box" data-wow-duration="1.2s" @submit.prevent="handleLogin">
          <h3 class="title">Account login</h3>
          <div class="login-item">
            <span>Account：</span>
            <input type="text" placeholder="Username/email address/mobile phone number" v-model="loginForm.username"
              required />
          </div>
          <div class="login-item">
            <span>Password:</span>
            <input type="password" placeholder="Please enter the password." v-model="loginForm.password" required />
          </div>
          <div class="login-item login-item-yzm">
            <input type="text" placeholder="Please enter the verification code" v-model="loginForm.code" required />
            <a href="" @click.prevent="getCodeImage">
              <img :src="codeImageUrl || '/images/codetp.png'" alt="" />
            </a>
          </div>
          <div class="login-item">
            <button type="submit" :disabled="loading">Log in</button>
          </div>
          <div class="login-item">
            <a href="" class="forgot">Forgot password?</a>
          </div>
        </form>
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
              <p>
                Registered in 2005: First-class civil aviation agency
                qualification Shenzhen Zhongyuan was established in 2005, with
                its headquarters located in Shenzhen, China (IATA code:
                08327034). Its branches are spread across Henan Province, China
                (IATA code: 08343156), the Hong Kong Special Administrative
                Region, China (IATA code: 13306123), and the United States.
              </p>
              <br />
              <p>
                Shenzhen Zhongyuan has two major self-owned properties. The
                Shenzhen office covers an area of over 1,000 square meters, and
                the Zhongyuan Aviation Building covers an area of over 2,000
                square meters, providing a convenient and comfortable working
                environment for more than 300 full-time employees. Business
              </p>
              <br />
              <p>
                Since 2005, we have been focusing on the air ticket business -
                initially mainly domestic air tickets in China, and since 2017,
                we have expanded into the international air ticket field.
              </p>
              <p>
                Shenzhen Zhongyuan is always committed to providing the most
                competitive ticket prices and the best customer service for
                passengers in China and the Asia-Pacific region.
              </p>
              <br />
              <p>
                As of 2024, over 15% of our R&D personnel are continuously
                developing and optimizing systems and products. We have
                integrated with 7 major META platforms, processing an average of
                1 billion traffic and over 40,000 orders daily, covering more
                than 95% of online travel channels in China.
              </p>
              <br />
              <h3>Our vision</h3>
              <p>
                By integrating advanced technologies, outstanding customer
                service and extensive industry partnerships, we aim to become
                the leading aviation service provider
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="section3">
        <div class="inwarp">
          <div class="intitle">Business philosophy</div>
          <div class="inbusiness-box">
            <a href="" class="inbusiness-item">
              <img src="/images/busin01.jpg" alt="" />
              <h3>Concept</h3>
              <p>Quality, efficiency, unity, practicality</p>
            </a>
            <a href="" class="inbusiness-item">
              <img src="/images/busin02.jpg" alt="" />
              <h3>Enterprise spirit</h3>
              <p>Honesty is people-oriented、Unity and diligence</p>
            </a>
            <a href="" class="inbusiness-item">
              <img src="/images/busin03.jpg" alt="" />
              <h3>Task</h3>
              <p>Meet customer needs Create shared value</p>
            </a>
            <a href="" class="inbusiness-item">
              <img src="/images/busin04.jpg" alt="" />
              <h3>Slogan</h3>
              <p>Become a leading airline、Service provider</p>
            </a>
            <a href="" class="inbusiness-item">
              <img src="/images/busin05.jpg" alt="" />
              <h3>Value</h3>
              <p>Work together Create a better future</p>
            </a>
          </div>
        </div>
      </div>
      <div class="section" id="section4">
        <div class="inwarp">
          <div class="intitle">Our uniqueness</div>
          <div class="inour-box">
            <a href="" class="inour-item">
              <img src="/images/uniqu01.jpg" alt="" />
              <h3>A powerful IT team</h3>
              <p>
                We have a powerful independent IT team, mainly responsible for
                the development and operation and maintenance of ticketing
                business automation. We independently develop and maintain an
                independent and professional ticketing management system and
                commission policy management system.
              </p>
            </a>
            <a href="" class="inour-item">
              <img src="/images/uniqu02.jpg" alt="" />
              <h3>Advanced operating system</h3>
              <p>
                The advanced system can automatically complete price comparison,
                select the best price and issue tickets within 5 minutes, with
                an automation rate of up to 65%.
              </p>
            </a>
            <a href="" class="inour-item">
              <img src="/images/uniqu03.jpg" alt="" />
              <h3>An experienced management team</h3>
              <p>
                Two experienced vice presidents of operations. A number of
                operation directors with rich domestic and international sales
                experience and capabilities.
              </p>
            </a>
            <a href="" class="inour-item">
              <img src="/images/uniqu04.jpg" alt="" />
              <h3>Professional service team</h3>
              <p>
                After 20 years of development, we have a highly skilled,
                considerate and efficient team that can provide customers with
                convenient and efficient all-round ticket booking services. We
                offer 24/7 all-day service to passengers and can provide
                high-quality solutions in a short time.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="section" id="section5">
        <div class="inwarp">
          <div class="intitle">Partner</div>
          <div class="partner-box">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="/images/partn01.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="/images/partn02.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="/images/partn03.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="/images/partn04.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="/images/partn05.png" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="/images/partn01.png" alt="" />
                </div>
              </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
          <div class="incontact-box">
            <div class="intitle">Contact us</div>
            <div class="incontact-ul">
              <div class="incontact-item">
                <img src="/images/contact01.png" alt="" />
                <h3>Contact number</h3>
                <p>86-755-82255555</p>
              </div>
              <div class="incontact-item">
                <img src="/images/contact02.png" alt="" />
                <h3>Contact email</h3>
                <p>8cikychen@ zhongyuanair.com.cn</p>
              </div>
              <div class="incontact-item">
                <img src="/images/contact03.png" alt="" />
                <h3>Address</h3>
                <p>
                  Room 1708, Shennan Sunshine Building, No. 2008, Chunfeng Road,
                  Luohu District, Shenzhen City, China
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copy">
      Yue ICP No. 2022074476. All rights reserved by Zhongyuan Aviation ©
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { useUserStore } from '@/store/user'

// 基础变量
const router = useRouter();
const route = useRoute();
const loading = ref(false);
const loginForm = ref({ username: "", password: "", code: "", codeToken: "" });
const codeImageUrl = ref("");
// 实例保存（用于销毁）
let fullpageInstance = null;
let swiperInstance = null;

// 模拟request请求（实际项目替换为axios/request）
const request = (options) =>
  new Promise((resolve, reject) => {
    if (options.url === "/captcha/image") {
      // 模拟验证码接口返回
      resolve({
        data: {
          image: "https://picsum.photos/120/40", // 临时测试图
          codeToken: "test_token_" + Date.now(),
        },
      });
    } else {
      reject(new Error("Request error"));
    }
  });

// 登录处理
function handleLogin() {
  console.log(1111, loginForm);

  // 基础验证
  if (
    !loginForm.value.username ||
    !loginForm.value.password ||
    !loginForm.value.code
  ) {
    alert("Please complete all required fields!");
    return;
  }

  const userStore = useUserStore();
  loading.value = true;
  userStore
    .login(loginForm.value)
    .then(() => {
      loading.value = false;
      const redirect = route.query.redirect || "/index";
      router.push(redirect);
    })
    .catch(() => {
      loading.value = false;
      getCodeImage(); // 登录失败刷新验证码
    });
}

// 获取验证码
function getCodeImage() {
  request({ url: "/captcha/image", method: "get" })
    .then((res) => {
      codeImageUrl.value = res.data.image;
      loginForm.value.code = "";
      loginForm.value.codeToken = res.data.codeToken;
    })
    .catch(() => {
      codeImageUrl.value = "/images/codetp.png"; // 降级默认图
    });
}

// 初始化Fullpage（核心：5个section配置）
function initFullpage() {
  $(document).ready(function () {
    $("#dowebok").fullpage({
      sectionsColor: ["#fff", "#000", "#ff0000", "#fff", "#f3f3f3"],
      navigation: true,
      navigationPosition: "left",
      css3: true,
      afterLoad: function (anchorLink, index) {
        if (index == 1) {
          $(".login-box").addClass("animated fadeInUp");
        }
        if (index == 2) {
          $(".login-box").removeClass("animated fadeInUp");
          $(".inabout-box").addClass("animated fadeInUp");
        }
        if (index == 3) {
          $(".inabout-box").removeClass("animated fadeInUp");
          $(".inbusiness-box").addClass("animated fadeInUp");
        }
        if (index == 4) {
          $(".inour-box").addClass("animated fadeInUp");
        }
        if (index == 5) {
          $(".incontact-ul").addClass("animated fadeInUp");
        }
      },
    });
  });
}
// swiper初始化
function initSwiper() {
  swiperInstance = new Swiper(".swiper-container", {
    modules: [Navigation, Autoplay],
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 24 },
    },
  });
}

onMounted(() => {
  // 1. 获取验证码
  getCodeImage();
  // 3. 延迟初始化：确保DOM和第三方库加载完成
  const initTimer = setTimeout(() => {
    initFullpage();
    initSwiper();
    clearTimeout(initTimer);
  }, 500);
});

// 组件卸载时销毁实例（防止内存泄漏）
onUnmounted(() => {
  // 销毁fullpage
  if (fullpageInstance && window.$.fn.fullpage.destroy) {
    window.$.fn.fullpage.destroy("all");
    fullpageInstance = null;
  }
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
});
</script>
