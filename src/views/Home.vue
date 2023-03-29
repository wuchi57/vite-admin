<script setup>
import ElementIcon from 'components/ElementIcon.vue'</script>

<template>
  <div class="flex flex-col gap-4">
    <router-link to="/about/index" class="text-2xl font-medium">To About 前往关于页面</router-link>
    <ElementIcon/>
    <h1
        v-for="i in 10"
        :key="i"
        class="text-red-700 text-3xl font-bold underline">
      Hello world!
    </h1>
    <button
      class="px-4 py-2 bg-sky-300 rounded-lg">
      origin button
    </button>
  </div>
</template>
