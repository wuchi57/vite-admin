import {defineStore} from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    sidebarCollapse: false,
  }),
  actions: {
    sidebarToggle() {
      this.sidebarCollapse = !this.sidebarCollapse
    },
  },
})
