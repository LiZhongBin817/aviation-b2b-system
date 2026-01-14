<template>
  <div class="migrate-pnr-loading">
    <!-- Migrated from /02PNR搜索—加载.html -->
    <div class="wp">
      <h2>PNR Search</h2>
      <el-input v-model="pnr" placeholder="Enter PNR code" style="width:240px;margin-right:8px"/>
      <el-button type="primary" @click="checkPnr" :loading="loading">Check</el-button>
      <div style="margin-top:12px">
        <el-alert v-if="resultMessage" :title="resultMessage" type="success" show-icon/>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<script setup>
import { ref } from 'vue'

const pnr = ref('')
const loading = ref(false)
const resultMessage = ref('')

function checkPnr() {
  if (!pnr.value) {
    resultMessage.value = 'Please enter a PNR code.'
    return
  }
  resultMessage.value = ''
  loading.value = true
  setTimeout(() => {
    loading.value = false
    resultMessage.value = `PNR ${pnr.value} found. Redirect to details...`
    // real behavior: navigate or show details; here just a placeholder message
  }, 1500)
}
</script>
</script>

<style scoped>
.migrate-pnr-loading{padding:16px}
</style>
