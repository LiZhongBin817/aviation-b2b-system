<template>
  <div class="top-container">
    <div class="top-left">
      <a href="" class="logo"><img src="/images/logo.png" /></a>
    </div>
    <div class="top-right">
      <div class="top-right-container">
        <div>
          <el-icon>
            <Phone />
          </el-icon>
          <span>86-755-82255555</span>
        </div>
        <el-dropdown @command="handleCommand">
          <div class="avatar-dropdown">
            <el-avatar :src="userStore.info?.avatar ? (baseUrl + userStore.info?.avatar) : defaultAvatar" />
            <span>{{ userStore.info?.nickname }}</span>
            <el-icon>
              <arrow-down-bold />
            </el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Avatar" command="goMyProfile">
                个人中心
              </el-dropdown-item>
              <el-dropdown-item :icon="SwitchButton" command="logout">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { createVNode } from "vue";
import { useSidebarStore } from '@/store'
import { useUserStore } from '@/store/user'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import defaultAvatar from '@/assets/image/avatar.png'
import { useAnnouncementStore } from "@/store/announcement";
import { announcementIconMap, announcementColorMap } from "@/utils/dict";

const store = useAnnouncementStore();
const activeAnnouncementId = ref(null);
const userStore = useUserStore()
const baseUrl = ref(import.meta.env.VITE_APP_BASE_API)

const router = useRouter()
const sidebarStore = useSidebarStore()

function toggleSidebar() {
  sidebarStore.toggleCollapse()
}

function handleCommand(command) {
  switch (command) {
    case 'logout':
      ElMessageBox.confirm('确定要退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        userStore.logout().then(() => {
          ElMessage.success('退出登录成功')
          router.push('/login')
        })
      })
      break
    case 'goMyProfile':
      router.push('/myself/profile')
      break
  }
}

watch(
  () => store.list,
  (newList) => {
    if (newList.length > 0) {
      const announcement = newList[0];
      if (activeAnnouncementId.value === announcement.announcementId) {
        return;
      }
      const IconComponent = announcementIconMap[announcement.announcementType];
      activeAnnouncementId.value = announcement.announcementId;
      ElNotification({
        title: announcement.title,
        message: announcement.content,
        offset: 40,
        duration: 0,
        icon: () => createVNode(IconComponent, {
          style: {
            color: announcementColorMap[announcement.announcementType],
          }
        }),
        onClose: () => {
          activeAnnouncementId.value = null;
          store.closeAnnouncement(announcement.announcementId);
        }
      });
    }
  },
  { immediate: true }
);

let intervalId = null;
onMounted(() => {
  store.fetchValidAnnouncements();
  intervalId = setInterval(() => {
    store.fetchValidAnnouncements();
  }, 60000);
});
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

</script>

<style scoped>
.top-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: #0069b4;
  padding: 0px 0px;
}

.top-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.top-right {
  display: flex;
  align-items: center;
}

.top-right-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar-dropdown {
  display: flex;
  align-items: center;
  gap: 4px;
  outline: none;
}
</style>