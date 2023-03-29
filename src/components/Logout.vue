<script setup>
const router = useRouter()

const logout = () => {
  router.push({path: '/login'})
}
</script>

<template>
  <SvgIcon name="logout" @click="logout"/>
</template>
