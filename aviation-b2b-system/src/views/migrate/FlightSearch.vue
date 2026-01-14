<template>
  <div class="migrate-flight-search">
    <!-- Migrated from /03航班搜索.html -->
    <div class="header-top">
      <div class="wp">
        <span class="iconfont icon-dianhua"></span>
        <span>86-755-82255555</span>
      </div>
    </div>
    <div class="search-bg">
      <div class="header">
        <div class="header-box">
          <div class="menubtn"><i></i><i></i><i></i></div>
          <a href="#" class="logo"><img src="/images/logo.png"/></a>
          <div class="nav">
            <ul class="clearfix">
              <li class="on"><span><a href="#"><b class="iconfont icon-feiji"></b> Book air tickets</a></span></li>
              <li><span><a href="#"><b class="iconfont icon-lvhangjiudian"></b> Book a hotel</a></span></li>
              <li class="header-order"><span><a href="#"><b class="iconfont icon-dingdan"></b> Order Management</a></span></li>
              <li class="header-right"><a href="#"><span class="iconfont icon-wode"></span><span class="user-name">123456789@qq.com</span><span class="iconfont icon-tuichu"></span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="wp">
        <div class="bookbox">
          <div class="bookbox-top">
            <a href="#">PNR search</a>
            <a href="#" class="on">Flight search</a>
          </div>
          <div class="condition">
            <div class="condition-box">
              <div class="condition-left">
                <a href="#" class="on"><span class="iconfont icon-icon_oversea_roundtr"></span><span>Round trip</span></a>
                <a href="#"><span class="iconfont icon-jt_feiji"></span><span>One-way trip</span></a>
                <a href="#"><span class="iconfont icon-tiaojianfenzhi"></span><span>Multiple passes<p>(including notches)</p></span></a>
                <a href="#"><span class="iconfont icon--shuju-jingzhun"></span><span>Precise search</span></a>
              </div>
              <div class="condition-right">
                <div class="personnel"><span class="title">Adulthood</span><div class="personnel-number"><span class="iconfont icon-jian jian"></span><input type="text" value="1" /><span class="iconfont icon-jia add"></span></div></div>
                <div class="personnel"><span class="title">Children</span><div class="personnel-number"><span class="iconfont icon-jian jian"></span><input type="text" value="1" /><span class="iconfont icon-jia add"></span></div></div>
                <div class="personnel"><span class="title">Baby</span><div class="personnel-number"><span class="iconfont icon-jian jian"></span><input type="text" value="1" /><span class="iconfont icon-jia add"></span></div></div>
              </div>
            </div>
            <div class="flight-main">
              <div class="flightmain-cont">
                <div class="flight-location">
                  <div class="location-left"><span class="iconfont icon-dizhi"></span><input type="text" v-model="from" placeholder="Set off"/></div>
                  <div class="convert"><span class="iconfont icon-arrow_lianjiearrow_connection-arrow"></span></div>
                  <div class="location-left location-right"><span class="iconfont icon-dizhi"></span><input type="text" v-model="to" placeholder="Arrive"/></div>
                </div>
                <div class="flight-time"><span class="iconfont icon-rili"></span>
                  <el-date-picker v-model="startDate" type="date" value-format="yyyy-MM-dd" placeholder="Departure date"/>
                  <b>-</b>
                  <el-date-picker v-model="endDate" type="date" value-format="yyyy-MM-dd" placeholder="Return date"/>
                </div>
                <div class="airline"><span class="iconfont icon-feiji"></span><input type="text" placeholder="Airline (optional)"/></div>
                <button class="search-btn" @click="searchFlights"><span class="iconfont icon-sousuo"></span></button>
              </div>
            </div>
            <div class="flight-tips">
              <div><input type="radio" name="flight-type" value="one-way" checked><label>Economy class</label></div>
              <div><input type="radio" name="flight-type" value="one-way"><label>Preferred Economy Class</label></div>
              <div><input type="radio" name="flight-type" value="one-way"><label>Business Class</label></div>
              <div><input type="radio" name="flight-type" value="one-way"><label>First class</label></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wp"><div class="policy-box"><div class="policy-title">Policy promotion</div><div class="policy-ul"><div class="policy-item" v-for="i in 6" :key="i"><span class="policy-rate">3.25%</span><span>MH</span><div class="policy-content"><div class="policypadd"><p>One-way/round-trip</p><p>Departure: MY</p><p>Arrival: Global Excluded country: MY</p></div></div></div></div></div></div>

    <div class="footer-bg"><div class="wp"><div class="footer-top"><div class="footer-top-left"><div class="wat"><img src="/images/wat.jpg" alt=""/></div><div><p>Route working hours</p><p>00:00-23:59(GMT+8)</p></div></div><div class="footer-top-right"><a href="#" target="_blank"><span class="iconfont icon-weixin"></span></a><a href="#" target="_blank"><span class="iconfont icon-youjian"></span></a><a href="#" target="_blank"><span class="iconfont icon-douyin"></span></a></div></div><div class="footer-bottom"><p>Yue ICP No. 2022074476. All rights reserved by Zhongyuan Aviation ©</p></div></div></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tripType = ref('round')
const from = ref('')
const to = ref('')
const startDate = ref('')
const endDate = ref('')
const adults = ref(1)
const children = ref(0)
const infants = ref(0)

const results = ref([])

function searchFlights() {
  // placeholder: populate mock results
  results.value = [
    { id: 1, flight: 'CZ123', depart: from.value || 'SHA', arrive: to.value || 'PEK', date: startDate.value || '2026-01-15', price: 800 },
    { id: 2, flight: 'MU456', depart: from.value || 'SHA', arrive: to.value || 'PEK', date: startDate.value || '2026-01-15', price: 920 }
  ]
}
</script>

<style scoped>
.flight-results {margin-top:16px}
.flight-item {padding:8px;border:1px solid #eee;margin-bottom:8px}
</style>

<template v-if="results.length">
  <div class="wp flight-results">
    <div v-for="r in results" :key="r.id" class="flight-item">
      <div><strong>{{ r.flight }}</strong> — {{ r.depart }} → {{ r.arrive }} on {{ r.date }}</div>
      <div>Price: ¥{{ r.price }}</div>
    </div>
  </div>
</template>

<style scoped>
.migrate-flight-search{padding:16px}
</style>
