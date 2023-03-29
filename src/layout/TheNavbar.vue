<script setup>
import Fullscreen from 'components/Fullscreen.vue'
import Logout from 'components/Logout.vue'
import Hamburger from 'components/Hamburger.vue'</script>

<template>
  <div class="flex justify-between items-center gap-4 h-full px-4">
    <Hamburger class="w-7 h-7"/>
    <div class="grow"></div>
    <Fullscreen class="w-7 h-7"/>
    <Logout class="w-6 h-6 mr-4"/>
  </div>
</template>
