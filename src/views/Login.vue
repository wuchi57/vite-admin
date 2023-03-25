<script setup>
import { valid } from 'utils/validate.js'
import { useUserStore } from '@/store/index.js'
import { ElMessage } from 'element-plus'

const loginForm = ref({
  username: 'admin',
  password: 'any123'
})
const loginRules = {
  username: [{ required: true, trigger: 'blue', validator: validateUsername }],
  password: [{ required: true, trigger: 'blue', validator: validatePassword }]
}

function validateUsername (rule, value, callback) {
  if (!valid(value)) {
    callback(new Error('Please enter the corrert user name'))
  } else {
    callback()
  }
}

function validatePassword (rule, value, callback) {
  if (value.length < 6) {
    callback(new Error('The password can not be less than 6 digits'))
  } else {
    callback()
  }
}

const formRef = ref()
const loading = ref(false)
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

function handleLogin () {
  loading.value = true
  formRef.value.validate(valid => {
    if (valid) {
      console.log('表单效验成功')
      userStore.login(loginForm).then(() => {
        const redirect = route.query && route.query.redirect
        router.push({ path: redirect || '/' })
        ElMessage({
          type: 'success',
          message: '登录成功'
        })
      })
      loading.value = false
    } else {
      console.log('Error submit!')
      loading.value = false
      return false
    }
  })

}

</script>

<template>
  <div class="login-page w-full h-full py-40 flex justify-center">
    <el-form ref="formRef" :model="loginForm" :rules="loginRules" class="w-[32rem] px-8">
      <h3 class="text-pr text-[1.625rem] text-center mb-8 font-semibold">Login Form</h3>
      <el-form-item prop="username">
        <el-input
          class="h-[3rem] focus:shadow-lime-500 hover:shadow-lime-500"
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          tabindex="1"
          autocomplete="on"
          size="large"
        >
          <template #prefix>
            <SvgIcon name="user"/>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password" class="mt-6">
        <el-input
          class="h-[3rem]"
          ref="password"
          v-model="loginForm.password"
          placeholder="Password"
          tabindex="2"
          autocomplete="on"
          size="large"
          type="password"
          show-password
        >
          <template #prefix>
            <SvgIcon name="lock" class=""/>
          </template>
        </el-input>
      </el-form-item>
      <el-button :loading="loading" type="primary" size="large" class="w-full mt-1.5" @click="handleLogin">Login
      </el-button>
      <div class="mt-7 flex gap-8 text-sm">
        <span>username: admin</span>
        <span>password: any</span>
      </div>
    </el-form>
  </div>
</template>
