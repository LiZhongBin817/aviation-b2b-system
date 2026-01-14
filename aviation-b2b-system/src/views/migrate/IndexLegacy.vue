<!--
 * @Author: 斌Ge是我 1245972926@qq.com
 * @Date: 2026-01-15 00:31:40
 * @LastEditors: 斌Ge是我 1245972926@qq.com
 * @LastEditTime: 2026-01-15 00:34:39
 * @FilePath: \aviation-b2b-system\aviation-b2b-system\src\views\migrate\IndexLegacy.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="legacy-index page-container">
    <h2>Legacy 首页（已迁移）</h2>
    <p>这是根目录的 `index.html` 的迁移占位页面。继续将原始静态内容移入此组件，或直接导航到已迁移页。</p>
    <el-row :gutter="16">
      <el-col :span="8"><router-link to="/index/migrate/flight-search">航班搜索（迁移）</router-link></el-col>
      <el-col :span="8"><router-link to="/index/migrate/order-management">订单管理（迁移）</router-link></el-col>
      <el-col :span="8"><router-link to="/index/migrate/pnr-list">PNR 列表（迁移）</router-link></el-col>
    </el-row>
  </div>
</template>

<script setup>
// Placeholder migrated index page for the legacy root `index.html`.
</script>

<style scoped>
.page-container { padding: 16px; }
</style>
