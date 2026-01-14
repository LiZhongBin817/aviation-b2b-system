<template>
  <div class="migrate-search-results">
    <!-- Migrated from /04搜索列表.html -->
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
                <a href="#"><span class="iconfont icon-tiaojianfenzhi"></span><span>Multiple passes</span></a>
                <a href="#"><span class="iconfont icon--shuju-jingzhun"></span><span>Precise search</span></a>
              </div>
              <div class="condition-right">
                <div class="personnel"><span class="title">Adulthood</span><div class="personnel-number"><span class="iconfont icon-jian jian"></span><input type="text" value="1" /><span class="iconfont icon-jia add"></span></div></div>
                <div class="personnel"><span class="title">Children</span><div class="personnel-number"><span class="iconfont icon-jian jian"></span><input type="text" value="0" /><span class="iconfont icon-jia add"></span></div></div>
                <div class="personnel"><span class="title">Baby</span><div class="personnel-number"><span class="iconfont icon-jian jian"></span><input type="text" value="0" /><span class="iconfont icon-jia add"></span></div></div>
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
                <div class="airline"><span class="iconfont icon-feiji"></span><input type="text" v-model="airline" placeholder="Airline (optional)"/></div>
                <button class="search-btn" @click="searchFlights"><span class="iconfont icon-sousuo"></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="listbg">
      <div class="wp">
        <div class="list-box">
            <div class="list-box-left">
            <div class="screenbox"><span>A total of <b>{{ results.length }}</b> items were screened</span><div class="tr"><a href="#" @click.prevent="clearFilters">Clear all</a></div></div>
            <div class="scrennbox"><div class="flnubbox"><span>Flight number：</span><div class="flsearcbox"><input type="text" v-model="flightNo" placeholder="" /><button class="searchllbt" @click="searchFlights"><span class="iconfont icon-sousuo"></span></button></div></div></div>
            <div class="scrennbox"><div class="title">Direct flight / transfer</div><div class="transferbox"><div class="transfertext"><input type="checkbox" v-model="directOnly"><label>Direct flight</label></div></div></div>
            <div class="scrennbox"><div class="title">Departure time</div><div class="slider-container"><div class="slider-track"></div></div></div>
            <div class="scrennbox"><div class="title">Airline</div><div class="transferbox" v-for="(a, idx) in airlines" :key="a.code"><div class="transfertext"><input type="checkbox" :value="a.code" v-model="selectedAirlines"><img :src="a.logo" alt=""><label>{{ a.code }}</label></div><span>{{ a.samplePrice }} CNY</span></div></div>
          </div>
          <div class="list-box-right">
            <div class="itinerarytop"><div class="itinerarytop-left"><p>Departure: Hong Kong → Bangkok, Thursday, January 1st</p><span>All departure / arrival times are local time</span></div><div class="itinerarytop-right"><a href="#" class="on">Free</a><a href="#">Round-trip</a></div></div>
            <div class="itineraryfilter"><a href="#" class="on">Direct flight priority</a><a href="#" class="shangxai"><span>Departure time</span></a><a href="#" class="shangxai"><span>Arrival time</span></a><a href="#" class="shangxai shaprice"><span>Price</span></a></div>
            <div class="lowestbox">
              <div class="lowesttext">Direct flight lowest</div>
              <div class="pnrserch-list-top" v-for="item in results" :key="item.id">
                <div class="pnrserch-name"><img :src="item.logo || '/images/pnrtb.jpg'" alt=""><div class="pnrserch-name-text"><p>{{ item.flight }}</p></div><div class="hban">{{ item.airport }}</div></div>
                <div class="pnrserch-flightbox"><div class="pnrserch-flightbox-text tc"><h3>{{ item.departTime }}</h3><p>{{ item.depart }}</p></div><div class="pnrserch-flightbox-planetp"><span class="iconfont icon-jt_feiji"></span></div><div class="pnrserch-flightbox-text tc"><h3>{{ item.arriveTime }}</h3><p>{{ item.arrive }}</p></div></div>
                <div class="pnrserch-time tc"><span class="iconfont icon-shijian"></span><span>{{ item.duration }}</span></div>
                <div class="pnrserch-item-right"><div><h3>{{ item.price }}.00</h3><span>cNY since</span></div><a href="#" class="reservation">BOOK</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bg"><div class="wp"><div class="footer-top"><div class="footer-top-left"><div class="wat"><img src="/images/wat.jpg" alt=""/></div><div><p>Route working hours</p><p>00:00-23:59(GMT+8)</p></div></div><div class="footer-top-right"><a href="#" target="_blank"><span class="iconfont icon-weixin"></span></a><a href="#" target="_blank"><span class="iconfont icon-youjian"></span></a></div></div><div class="footer-bottom"><p>Yue ICP No. 2022074476. All rights reserved by Zhongyuan Aviation ©</p></div></div></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const from = ref('')
const to = ref('')
const startDate = ref('')
const endDate = ref('')
const airline = ref('')
const flightNo = ref('')
const directOnly = ref(false)
const airlines = ref([
  { code: 'HX', logo: '/images/airline01.jpg', samplePrice: 2138 },
  { code: 'MU', logo: '/images/airline02.jpg', samplePrice: 2500 },
  { code: 'CZ', logo: '/images/airline03.jpg', samplePrice: 1980 }
])
const selectedAirlines = ref([])

const results = ref([])

function searchFlights() {
  // Simple mock search implementation — replace with API call later
  results.value = [
    { id: 1, flight: 'HX759', departTime: '23:45', arriveTime: '01:50', depart: from.value || 'HKG', arrive: to.value || 'BKK', duration: '6h5m', price: 2138, airport: 'T6', logo: '/images/pnrtb.jpg' },
    { id: 2, flight: 'MU234', departTime: '08:30', arriveTime: '10:45', depart: from.value || 'HKG', arrive: to.value || 'BKK', duration: '4h15m', price: 1800, airport: 'T1', logo: '/images/pnrtb.jpg' }
  ].filter(r => {
    if (flightNo.value && !r.flight.includes(flightNo.value)) return false
    if (directOnly.value && r.duration.includes('h') === false) return false
    if (selectedAirlines.value.length && !selectedAirlines.value.includes(r.flight.slice(0,2))) return false
    return true
  })
}

function clearFilters() {
  flightNo.value = ''
  directOnly.value = false
  selectedAirlines.value = []
  from.value = ''
  to.value = ''
  startDate.value = ''
  endDate.value = ''
  results.value = []
}
</script>

<style scoped>
.migrate-search-results{padding:16px}
.pnrserch-list-top{margin-bottom:12px}
</style>
