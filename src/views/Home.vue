<script setup>
import ElementIcon from 'components/ElementIcon.vue'</script>

<template>
  <router-link to="/about" class="text-2xl font-medium">To About 前往关于页面</router-link>
  <router-link to="/login" class="text-2xl font-medium">To Login 前往登录页面</router-link>
  <ElementIcon/>
  <h1
    v-for="i in 100"
    :key="i"
    class="text-red-700 text-3xl font-bold underline">
    Hello world!
  </h1>
  <button
    class="px-4 py-2 bg-sky-300 rounded-lg">
    origin button
  </button>
</template>
