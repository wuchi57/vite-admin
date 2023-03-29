<script setup>
import SvgIcon from 'components/SvgIcon.vue'
import { Apple, Search } from '@element-plus/icons-vue'

console.log('hosfd')

</script>


<template>
  <div class="flex flex-col gap-4">
    <router-link to="/" class="text-2xl font-medium">To Home 前往主页</router-link>
    <div class="text-2xl">
      <span>Hello</span>
      <SvgIcon name="lock"/>
      <SvgIcon name="user"/>
      <span>Hello你好👋</span>
    </div>
    <div>
      <el-icon>
        <Apple/>
      </el-icon>
      <span>你好👋</span>
      <el-icon>
        <Search/>
      </el-icon>
      <span>你好👋</span>
    </div>
  </div>
</template>
