import axios from 'axios'
import {
  Notice,
  Spin
} from 'iview'
import {
  Router
} from 'vue'
class HttpRequest {
  constructor(context) {
    this.content = context
    this.options = {
      method: '',
      url: ''
    }
    // 存储请求队列
    this.queue = {}
  }
  // 销毁请求实例
  destroy(url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // console.log(config)
      if (!config.url.includes('/login')) {
        let token = '66'
        if (token === null || token === '') {
          this.destroy(url)
          Notice.warning({
            title: '系统提示',
            desc: '用户登录信息失效,请重新登录'
          })
          sessionStorage.setItem("logout", 1);
          window.location.href = window.location.pathname + '#/'
        }
      }
      if (this.content && this.content === 'json') {
        config.headers['Content-Type'] = 'application/json; charset=utf-8'
        config.headers['Authorization'] = sessionStorage.getItem('data')
        if (config.params == undefined) {
          config.data = JSON.stringify(config.data)
        } else {
          config.data = JSON.stringify(config.params)
        }
        // console.log(config.params)
        // console.log(config.data)

      } else {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
        config.headers['Authorization'] = sessionStorage.getItem('data')
      }
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res)
      this.destroy(url)
      const {
        data,
        status
      } = res
      Spin.hide()
      console.log(res)
      if (res.data.code == 401 || res.data == '') {
        if (sessionStorage.getItem('logout_data') == 'true') {
          Notice.warning({
            title: '系统提示',
            desc: '用户登录信息失效,请重新登录'
          })
          sessionStorage.setItem('logout_data', 'false')
        }
        sessionStorage.setItem("logout", 1);
        // setToken('')
        window.location.href = window.location.pathname + '#/'
      }
      return {
        data,
        status
      }
    }, (error) => {
      this.destroy(url)
      console.log(error)
      if (error.response.status === 401 || error.response.status === 405) {
        if (sessionStorage.getItem('logout_data') == 'true') {
          Notice.warning({
            title: '系统提示',
            desc: '用户登录信息失效,请重新登录'
          })
          sessionStorage.setItem('logout_data', 'false')
        }
        sessionStorage.setItem("logout", 1);
        window.location.href = window.location.pathname + '#/'
      } else {
        return Promise.reject(error)
      }
    })
  }
  create() {
    let conf = {
      baseURL: '/api',
      timeout: 120000,
      'Content-Type': this.content
    }
    return axios.create(conf)
  }
  request(options) {
    var instance = this.create()
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}
export default HttpRequest
