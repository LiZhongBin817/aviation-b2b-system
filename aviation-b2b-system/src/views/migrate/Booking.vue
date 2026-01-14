<template>
  <div class="migrate-booking">
    <!-- Migrated from /05航班预订页.html -->
    <div class="header-top">
      <div class="wp"><span class="iconfont icon-dianhua"></span><span>86-755-82255555</span></div>
    </div>
    <div class="header headerblock">
      <div class="header-box">
        <div class="menubtn"><i></i><i></i><i></i></div>
        <a href="#" class="logo"><img src="/images/logo02.png"/></a>
        <div class="nav"><ul class="clearfix"><li class="on"><span><a href="#"><b class="iconfont icon-feiji"></b> Book air tickets</a></span></li><li><span><a href="#"><b class="iconfont icon-lvhangjiudian"></b> Book a hotel</a></span></li><li class="header-order"><span><a href="#"><b class="iconfont icon-dingdan"></b> Order Management</a></span></li><li class="header-right"><a href="#"><span class="iconfont icon-wode"></span><span class="user-name">123456789@qq.com</span><span class="iconfont icon-tuichu"></span></a></li></ul></div>
      </div>
    </div>

    <div class="reservebox">
      <div class="wp">
        <div class="reserveul">
          <div class="reserve-left">
            <div class="reserveborder padd">
              <div class="reserve-flightbox">
                <div class="pnrserch-name">
                  <div class="respalc"><span class="iconfont icon-jt_feiji"></span><span class="renubm">1</span></div>
                  <img src="/images/hkong.png" alt=""/>
                  <div class="pnrserch-name-text"><p>K6681 | 320</p><p>Non-shared</p><p class="hsr">Angkor Air</p></div>
                </div>
                <div class="tc"><p class="hsr">Fare Basis</p><p>NOHK</p></div>
                <div class="hangxinxi"><div><h3>HKG</h3><p>Hong Kong</p><p>International Airport</p><p class="hsr">2026-01-01 08:20</p></div><img src="/images/jiant.jpg" alt="" class="jiantou"/><div><h3>KIT</h3><p>Hong Kong</p><p>International Airport</p><p class="hsr">2026-01-01 08:20</p></div></div>
                <div><p>Cabin (N）</p><p>Economy class (Y）</p></div>
                <div class="pnrserch-time tc"><span class="iconfont icon-shijian1"></span><span>2h30m</span></div>
              </div>
              <div class="durationbox"><div class="line"></div><span>Transfer duration : 9 hours and 25 meters</span></div>
              <div class="reserve-flightbox">
                <!-- repeat second segment -->
              </div>
            </div>
            <div class="refreebox"><a href="#">Free baggage allowance</a><a href="#">Refund and rescheduling information</a></div>
              <div class="reserveborder">
              <div class="information-top"><h3>Passenger information</h3><div class="intips"><span>Adults (21+ years old):</span><b>{{ passengers.length }}</b></div></div>
              <div class="xxadult" v-for="(p, idx) in passengers" :key="p.id">
                <div class="xxaduit-title">Adult {{ idx + 1 }}</div>
                <div class="xxaduit-cont">
                  <div class="xxaduit-item"><el-input v-model="p.surname" placeholder="Surname *"/></div>
                  <div class="xxaduit-item"><el-input v-model="p.lastname" placeholder="Last name *"/></div>
                  <div class="xxaduit-item tc">
                    <el-radio-group v-model="p.gender">
                      <el-radio label="male">Male</el-radio>
                      <el-radio label="female">Female</el-radio>
                    </el-radio-group>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="reserve-right">
            <div class="reservexq">
              <div class="adultbox"><div class="adultflte">Adult <span>x1</span></div><div class="adultprice">1310</div></div>
              <div class="resecontbox"><div class="resecont"><span>Ticket price per person</span><span>382</span></div><div class="resecont"><span>Taxes and fees</span><span>928</span></div></div>
              <div class="aduprice"><span>Total price</span><b>1310</b></div>
            </div>
            <p class="adctips">After the ticket is issued, you can purchase additional luggage in the order details</p>
            <button class="adsubmit" @click="submitOrder">Submit the order</button>
            <p v-if="orderResult" style="margin-top:8px">{{ orderResult }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bg"><div class="wp"><div class="footer-top"><div class="footer-top-left"><div class="wat"><img src="/images/wat.jpg" alt=""/></div><div><p>Route working hours</p><p>00:00-23:59(GMT+8)</p></div></div><div class="footer-top-right"><a href="#" target="_blank"><span class="iconfont icon-weixin"></span></a></div></div><div class="footer-bottom"><p>Yue ICP No. 2022074476. All rights reserved by Zhongyuan Aviation ©</p></div></div></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const passengers = ref([
  { id: 1, surname: '', lastname: '', gender: 'male' }
])

const orderResult = ref('')

function validatePassengers() {
  for (const p of passengers.value) {
    if (!p.surname || !p.lastname) return false
  }
  return true
}

function submitOrder() {
  if (!validatePassengers()) {
    orderResult.value = 'Please fill required passenger fields.'
    return
  }
  // placeholder: call API to create order
  orderResult.value = `Order submitted for ${passengers.value.length} passenger(s).`
  console.log('submitOrder', JSON.parse(JSON.stringify(passengers.value)))
}
</script>

<style scoped>
.migrate-booking{padding:16px}
</style>
