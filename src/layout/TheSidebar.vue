<script setup>
import SidebarMenu from './SidebarMenu.vue'
import { useSettingStore } from '@/store/index.js'

const settingStore = useSettingStore()

const classObj = ref({
  'sidebar-open': computed(() => !settingStore.sidebarCollapse),
  'sidebar-close': computed(() => settingStore.sidebarCollapse)
})
</script>

<template>
  <div class="h-full select-none" :class="classObj">
    <div class="h-[50px] grid place-items-center">Logo</div>
    <el-scrollbar class="!h-[calc(100%_-_50px)] overflow-scroll">
      <SidebarMenu/>
    </el-scrollbar>
  </div>
</template>


