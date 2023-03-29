<script setup>
import Fullscreen from 'components/Fullscreen.vue'
import Hamburger from 'components/Hamburger.vue'</script>

<template>
  <div class="flex justify-between items-center h-full px-4">
    <Hamburger class="w-7 h-7"/>
    <div class="grow"></div>
    <Fullscreen class="w-7 h-7"/>
  </div>
</template>
