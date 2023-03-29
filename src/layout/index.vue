<script setup>
import AppMain from './TheAppMain.vue'
import Sidebar from './TheSidebar.vue'
import Navbar from './TheNavbar.vue'
import {useSettingStore} from "@/store/index.js"
import {ElScrollbar} from 'element-plus'
import {ref} from 'vue'

const settingStore = useSettingStore()

const classObj = ref({
  'sidebar-close': computed(() => settingStore.sidebarCollapse)
})
</script>

<template>
  <div class="w-full h-full relative group/main" :class="classObj">
    <Sidebar class="bd sidebar-container fixed h-full"/>
    <ElScrollbar
        class="w-[calc(100%_-_theme('width.sidebar'))] group-[.sidebar-close]/main:w-[calc(100%_-_4rem)] h-full !absolute transition-all duration-300 ease-in-out right-0">
      <Navbar class="relative h-navbar shadow-navbar"/>
      <AppMain class="relative min-h-[calc(100%_-_theme(height.navbar))] overflow-hidden p-6"/>
    </ElScrollbar>
  </div>
</template>
