<script setup>
import SvgIcon from 'components/SvgIcon.vue'
import { Apple, Search } from '@element-plus/icons-vue'
</script>

<template>
  <router-link to="/" class="text-2xl font-medium">To Home 前往主页</router-link>
  <h1>About</h1>
  <div class="text-2xl">
    <span>Hello</span>
    <SvgIcon name="lock" />
    <SvgIcon name="user" />
    <SvgIcon name="vue" />
    <span>Hello你好👋</span>
  </div>
  <div>
    <el-icon><Apple/></el-icon>
    <span>你好👋</span>
    <el-icon><Search/></el-icon>
    <span>你好👋</span>
  </div>
</template>
