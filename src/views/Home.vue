<script setup>
import ElementIcon from 'components/ElementIcon.vue'
</script>

<template>
  <router-link to="/about" class="text-2xl">To About</router-link>
  <ElementIcon />
  <h1 class="text-red-700 text-3xl font-bold underline">
    Hello world!
  </h1>
  <button class="px-4 py-2 bg-sky-300 rounded-lg" >
    origin button
  </button>
</template>
