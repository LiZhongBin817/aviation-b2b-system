import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menuList: [],
    isCollapse: false
  }),
  getters: {
    getMenuList: (state) => state.menuList,
    getIsCollapse: (state) => state.isCollapse
  },
  actions: {
    setMenuList(menuData) {
      this.menuList = menuData
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
})
