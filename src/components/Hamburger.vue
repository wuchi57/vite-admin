<script setup>
import {useSettingStore} from "@/store/index.js";

const settingStore = useSettingStore()
</script>

<template>
  <SvgIcon
      :name="settingStore.sidebarCollapse ? 'menu' : 'menu_open'"
      @click="settingStore.sidebarToggle"/>
</template>
