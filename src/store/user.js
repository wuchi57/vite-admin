import { defineStore } from 'pinia'
import { User } from 'api'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  actions: {
    increment () {
      this.count++
    },
    login (userInfo) {
      const { username, password } = unref(userInfo)
      return new Promise((resolve, reject) => {
        User.login({ username: username.trim(), password }).then(res => {
          this.token = res.data.token
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    removeToken () {
      this.token = ''
    }
  },
})
