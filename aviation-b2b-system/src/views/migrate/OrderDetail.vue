
<template>
  <div class="migrate-order-detail">
    <!-- Migrated from /07订单详情.html -->
    <div class="header-top">
      <div class="wp"><span class="iconfont icon-dianhua"></span><span>86-755-82255555</span></div>
    </div>
    <div class="header headerblock">
      <div class="header-box"><div class="menubtn"><i></i><i></i><i></i></div><a href="#" class="logo"><img src="/images/logo02.png"/></a>
        <div class="nav"><ul class="clearfix"><li class="on"><span><a href="#"><b class="iconfont icon-feiji"></b> Book air tickets</a></span></li></ul></div>
      </div>
    </div>

    <div class="reservebox">
      <div class="wp">
        <div class="currtbox-top"><div class="currentbox"><a href="#">Order Management </a><span>&gt; </span><a href="#" class="on">Order Details</a></div><a href="#" class="download"><span class="iconfont icon-xiazai"></span><span>Download of itinerary information</span></a></div>
        <div class="detailnav"><div class="detailnav-left"><h3>Ticket issuance completed</h3><p>Route order number : 17518535044464640</p></div><div class="detailnav-right"><span class="iconfont icon-kefu"></span><span>Customer Service</span></div></div>
        <div class="detailtable"><table><tr><th>Voyage type</th><th>Creation time</th><th>Procurement code</th><th>Order PNR</th><th>Total price</th><th>Deadline for the review of invalid tickets</th></tr><tr><td>One-way trip</td><td>2024-07-10 15:58:18</td><td>622y123</td><td>8C5Z7N</td><td>16011.00CNY</td><td><span class="red">2024-07-11 11:10:18</span></td></tr></table></div>
        <div class="detail-item"><div class="deatiltitle"><span class="iconfont icon-dingdan-daifukuan"></span><h3>Payment information</h3></div><div class="detailtable"><table><tr><th>Serial number for handover</th><th>Trading hours</th><th>Method</th><th>Payment amount</th></tr><tr><td>YP2407101601200265296</td><td>2024-07-10 16:01:20</td><td>Yeepay Payment</td><td>16011</td></tr></table></div></div>
      </div>
    </div>

    <div class="footer-bg"><div class="wp"><div class="footer-top"><div class="footer-top-left"><div class="wat"><img src="/images/wat.jpg" alt=""/></div><div><p>Route working hours</p><p>00:00-23:59(GMT+8)</p></div></div><div class="footer-top-right"><a href="#" target="_blank"><span class="iconfont icon-weixin"></span></a></div></div><div class="footer-bottom"><p>Yue ICP No. 2022074476. All rights reserved by Zhongyuan Aviation ©</p></div></div></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useOrdersStore } from '@/store/orders'

const route = useRoute()
const router = useRouter()
const ordersStore = useOrdersStore()

const orderId = route.query.id ? Number(route.query.id) : null
const order = computed(() => ordersStore.orders.find(o => o.id === orderId) || null)

function goBack() {
  router.push({ name: 'MigrateOrderManagement' })
}
</script>

<style scoped>
.order-card { padding: 12px; border: 1px solid #eaeaea; border-radius: 6px; max-width: 520px; }
.page-container { padding: 16px; }
</style>

<script setup>
// Order detail skeleton
</script>

<style scoped>
.migrate-order-detail{padding:16px}
</style>
