<template>
  <div class="migrate-order-management">
    <!-- Migrated from /06订单管理.html -->
    <div class="header-top ddglbox">
      <a href="#" class="logo"><img src="/images/logo.png"/></a>
      <div class="ddglbftle">
        <div><span class="iconfont icon-dianhua"></span><span>86-755-82255555</span></div>
        <div class="header-right"><a href="#"><span class="iconfont icon-wode"></span><span class="user-name">123456789@qq.com</span><span class="iconfont icon-tuichu"></span></a></div>
      </div>
    </div>

    <div class="ticketbox">
      <div class="ticket-left">
        <dl>
          <dt><div class="naleft"><span class="iconfont icon-jt_feiji"></span><span class="dttite">Flight ticket search</span></div><span class="iconfont icon-xialajiantou tijiant"></span></dt>
          <dd @click="openTab('PNR search', 1)"><a href="javascript:void(0);">PNR search</a></dd>
          <dd @click="openTab('Flight search', 2)"><a href="javascript:void(0);">Flight search</a></dd>
        </dl>
        <dl class="on"><dt><div class="naleft"><span class="iconfont icon-dingdan1"></span><span class="dttite">Air ticket order management</span></div><span class="iconfont icon-xialajiantou tijiant"></span></dt>
        <dd @click="openTab('Ticket issuance order', 4)"><a href="javascript:void(0);">Ticket issuance order</a></dd>
        <dd @click="openTab('Refund order', 5)"><a href="javascript:void(0);">Refund order</a></dd>
        </dl>
      </div>
      <div class="ticket-right">
        <div class="tickettitle">Order management  /  Invoice order management</div>
        <div class="ticktips" id="tabsContainer">
          <div v-for="tab in tabs" :key="tab.id" class="tickdiv" :class="{active: tab.id === activeTabId}" @click="activateTab(tab.id)">
            {{ tab.title }} <span class="iconfont icon-guanbi1" @click.stop="closeTab(tab.id)"></span>
          </div>
        </div>
        <div class="manageBg">
          <div id="content">
            <div class="managetop">
              <div class="manageleft">
                <div class="managetext"><span>From the date of the order：</span>
                  <div class="managetextbox managetime">
                    <el-date-picker v-model="startTime" type="date" value-format="yyyy-MM-dd" placeholder="From December 30, 2024"/>
                    <span>~</span>
                    <el-date-picker v-model="endTime" type="date" value-format="yyyy-MM-dd" placeholder="To December 31, 2024"/>
                  </div>
                </div>
              </div>
              <button class="querybtn" @click="queryOrders">Query</button>
            </div>
            <div class="tab-content">
              <h3 class="tab-content-title">{{ currentTabTitle }}</h3>
              <p v-if="resultMessage" class="query-result">{{ resultMessage }}</p>
              <!-- Orders list with select-all / checkbox logic -->
              <div class="orders" v-if="orders.length">
                <table class="order-table">
                  <thead>
                    <tr>
                      <th style="width:40px"><input type="checkbox" :checked="allSelected" @change="toggleSelectAll($event)"/></th>
                      <th>Order No</th>
                      <th>Passenger</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order in orders" :key="order.id">
                      <td><input type="checkbox" :value="order.id" v-model="selectedIds"/></td>
                      <td>{{ order.no }}</td>
                      <td>{{ order.passenger }}</td>
                      <td>{{ order.status }}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="actions" style="margin-top:8px">
                  <button class="querybtn" @click="performBatchAction">Batch action</button>
                  <span style="margin-left:12px">Selected: {{ selectedIds.length }}</span>
                </div>
              </div>
              <div v-else class="no-orders">No orders — click Query to load mock results.</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="footer-bg"><div class="wp"><div class="footer-top"><div class="footer-top-left"><div class="wat"><img src="/images/wat.jpg" alt=""/></div><div><p>Route working hours</p><p>00:00-23:59(GMT+8)</p></div></div><div class="footer-top-right"><a href="#" target="_blank"><span class="iconfont icon-weixin"></span></a></div></div><div class="footer-bottom"><p>Yue ICP No. 2022074476. All rights reserved by Zhongyuan Aviation ©</p></div></div></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useOrdersStore } from '@/store/orders'

const tabs = ref([{ id: 1, title: 'PNR search' }])
const activeTabId = ref(1)
const startTime = ref('')
const endTime = ref('')
const resultMessage = ref('')

function openTab(title, id) {
  const existing = tabs.value.find(t => t.id === id && t.title === title)
  if (existing) {
    activeTabId.value = existing.id
    return
  }
  const newId = id ?? Date.now()
  tabs.value.push({ id: newId, title })
  activeTabId.value = newId
}

function activateTab(id) {
  activeTabId.value = id
}

function closeTab(id) {
  const idx = tabs.value.findIndex(t => t.id === id)
  if (idx === -1) return
  tabs.value.splice(idx, 1)
  if (activeTabId.value === id) {
    if (tabs.value.length) {
      const newIndex = Math.max(0, idx - 1)
      activeTabId.value = tabs.value[newIndex].id
    } else {
      activeTabId.value = null
    }
  }
}

const currentTabTitle = computed(() => {
  const t = tabs.value.find(x => x.id === activeTabId.value)
  return t ? t.title : ''
})

function queryOrders() {
  // simple placeholder logic — replace with API call later
  resultMessage.value = `Querying ${currentTabTitle.value} from ${startTime.value || '—'} to ${endTime.value || '—'}`
  console.log('Order query', { tab: currentTabTitle.value, start: startTime.value, end: endTime.value })
}

// Orders / selection state from Pinia
const ordersStore = useOrdersStore()
const orders = computed(() => ordersStore.orders)
const selectedIds = ref([])

const allSelected = computed(() => {
  return orders.value.length > 0 && selectedIds.value.length === orders.value.length
})

function toggleSelectAll(e) {
  const checked = e.target.checked
  if (checked) {
    selectedIds.value = orders.value.map(o => o.id)
  } else {
    selectedIds.value = []
  }
}

function performBatchAction() {
  if (!selectedIds.value.length) {
    resultMessage.value = 'No orders selected.'
    return
  }
  // Example: mark selected orders as processed
  selectedIds.value.forEach(id => ordersStore.updateOrder(id, { status: 'Processed' }))
  resultMessage.value = `Performed action on ${selectedIds.value.length} order(s).`
  console.log('batch action', selectedIds.value)
}

// extend queryOrders to fetch from store for order tabs
const orderTabIds = new Set([4, 5])
const originalQueryOrders = queryOrders
queryOrders = () => {
  originalQueryOrders()
  if (orderTabIds.has(activeTabId.value)) {
    ordersStore.fetchOrders().then(() => {
      selectedIds.value = []
    })
  } else {
    ordersStore.orders = []
    selectedIds.value = []
  }
}
</script>

<style scoped>
.migrate-order-management{padding:16px}
</style>
