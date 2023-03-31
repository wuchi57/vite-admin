<script setup>
import AppMain from './TheAppMain.vue'
import Sidebar from './TheSidebar.vue'
import Navbar from './TheNavbar.vue'
import {ElScrollbar} from 'element-plus'
</script>

<template>
  <div class="flex w-full h-full relative">
    <Sidebar class="bd h-full"/>
    <ElScrollbar class="grow h-full">
      <Navbar class="relative h-navbar shadow-navbar"/>
      <AppMain class="relative min-h-[calc(100%_-_theme(height.navbar))] p-6"/>
    </ElScrollbar>
  </div>
</template>
