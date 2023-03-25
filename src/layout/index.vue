<script setup>
import AppMain from './TheAppMain.vue'
import Sidebar from './TheSidebar.vue'
import Navbar from './TheNavbar.vue'</script>

<template>
  <div class="w-full h-full relative">
    <Sidebar class="fixed w-sidebar h-full bg-menuBg text-menuText"></Sidebar>
    <div class="relative h-full  ml-[theme(width.sidebar)]">
      <Navbar class="relative h-[theme(height.navbar)] shadow-navbar"></Navbar>
      <AppMain class="relative min-h-[calc(100%_-_theme(height.navbar))] overflow-hidden p-6"></AppMain>
    </div>
  </div>
</template>
