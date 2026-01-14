<template>
  <div class="migrate-pnr-fail">
    <!-- Migrated from /02PNR搜索—失败.html -->
    <div class="wp">
      <h2>PNR Search — Not Found</h2>
      <p>Please check your PNR code and try again.</p>
      <el-input v-model="pnr" placeholder="Enter PNR code" style="width:240px;margin-right:8px"/>
      <el-button type="primary" @click="retry" :loading="loading">Retry</el-button>
      <el-button plain @click="gotoSearch" style="margin-left:8px">Back to Search</el-button>
      <div style="margin-top:12px">
        <el-alert v-if="errorMessage" :title="errorMessage" type="error" show-icon/>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const pnr = ref('')
const loading = ref(false)
const errorMessage = ref('')

const router = useRouter()

function retry() {
  if (!pnr.value) {
    errorMessage.value = 'Please enter a PNR to retry.'
    return
  }
  errorMessage.value = ''
  loading.value = true
  setTimeout(() => {
    loading.value = false
    // For now simulate failure if pnr length < 3
    if (pnr.value.length < 3) {
      errorMessage.value = 'PNR not found. Try a different code.'
    } else {
      // simulate success: navigate to order management PNR result or details
      router.push({ path: '/migrate/pnr-list' })
    }
  }, 1200)
}

function gotoSearch() {
  router.push({ path: '/migrate/flight-search' })
}
</script>
</script>

<style scoped>
.migrate-pnr-fail{padding:16px}
</style>
