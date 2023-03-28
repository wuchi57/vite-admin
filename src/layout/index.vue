<script setup>
import AppMain from './TheAppMain.vue'
import Sidebar from './TheSidebar.vue'
import Navbar from './TheNavbar.vue'</script>

<template>
  <div class="w-full h-full relative">
    <Sidebar class="fixed w-sidebar h-full"/>
    <el-scrollbar class="h-full  ml-[theme(width.sidebar)]">
      <Navbar class="relative h-navbar shadow-navbar"/>
      <AppMain class="relative min-h-[calc(100%_-_theme(height.navbar))] overflow-hidden p-6"/>
    </el-scrollbar>
  </div>
</template>
