import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUserStore } from '@/store/index.js'

// 创建请求实例
const instance = axios.create({
  baseURL: '/api',
  // 指定请求超时的毫秒数
  timeout: 5000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
});

instance.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (config) => {
    /**
     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
     * const token = getToken()
     * if (token) {
     *  config.headers.token = token
     * }
     */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     */
    const res = response.data
    if (res.code !== 20000) {
      ElMessage({
        type: 'error',
        message: res.message || '未知错误，请联系管理员'
      })
      // 50008: 非法token
      // 50018: 其他客户端已登录
      // 50014: token过期
      if ([50008, 50018, 50014].includes(res.code)) {
        ElMessageBox.confirm('你已被登出，你可以保持在此页面，或者重新登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 删除token并重新加载页面
          const userStore = useUserStore()
          userStore.removeToken()
          location.reload()
        })
      }
      return Promise.reject(new Error(res.message || '未知错误，请联系管理员'))
    } else {
      return res
    }
  },
  (error) => {
    const { response } = error;
    if (response && response.data) {
      return Promise.reject(error);
    }
    const { message } = error;
    console.error(message);
    return Promise.reject(error);
  },
);

export default instance
