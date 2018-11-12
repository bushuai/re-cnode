import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'

const instance = axios.create({
  // baseURL: config.development.baseURL,
  timeout: 10000,
  withCredentials: true
})

instance.defaults.transformRequest = [
  (data, headers) => {
    return qs.stringify(data)
  }
]

instance.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    const method = config.method.toLocaleLowerCase()
    const stringifyMethods = ['post', 'put', 'delete']
    NProgress.start()

    if (stringifyMethods.includes(method)) {
      config.data = qs.stringify(config.data)
    }

    if (token) {
      config.headers.Authorization = token
    }

    return config
  },

  error => {
      // 超时
			if (
        error.code === 'ECONNABORTED' && 
        error.message.indexOf('timeout') !== -1
      ) {
        // send notification
        // Toast(error.message)
      }
      
			// 跳转至错误页面
			if (error.response) {
				// router.push({
				// 	path: `/error/${error.response.status}`
				// })
      }

      NProgress.done()
			return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    // 根据后端提供的 Code 进行不同响应
    switch(response.data.code) {
      case 10000:
      case 10001:
      case 10002:
      default: 
        break
    }

    NProgress.done()
    return response.status === 200 
      ? Promise.resolve(response)
      : Promise.reject(response)
  },
  
  error => {
    NProgress.done()
    
    if (!error.response.status) {
      return Promise.reject(error)
    }

    switch(error.response.status) {
      case 400:
        error.message = '请求错误'
        break
			
			case 401:
        error.message = '未授权，请登录'
        break
			
			case 403:
        error.message = '拒绝访问'
        break
			
			case 404:
        error.message = `请求地址出错: ${error.response.config.url}`
        break
			
			case 408:
        error.message = '请求超时'
        break
			
			case 500:
        error.message = '服务器内部错误'
        break
			
			case 501:
        error.message = '服务未实现'
        break
			
			case 502:
        error.message = '网关错误'
        break
			
			case 503:
        error.message = '服务不可用'
        break
			
			case 504:
        error.message = '网关超时'
        break
			
			case 505:
				error.message = 'HTTP版本不受支持'
				break
      default: 
        return Promise.reject(error.response) 
    }

    return Promise.reject(error)
    // send notification
    // Toast(error.message)
  }
)

export default instance