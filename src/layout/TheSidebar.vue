<script setup>
import SidebarMenu from './TheSidebarMenu.vue'</script>
<template>
  <div class="h-full select-none">
    <div class="bdb logo h-[50px]">Logo</div>
    <el-scrollbar class="bdg !h-[calc(100%_-_50px)] overflow-scroll">
      <SidebarMenu/>
    </el-scrollbar>
  </div>
</template>
