<script setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <SvgIcon :name="isFullscreen ? 'fullscreen_exit_google' : 'fullscreen_google'" @click="toggle"/>
</template>
