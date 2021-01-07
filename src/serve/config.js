import axios from 'axios';
import qs from 'qs';
import { Toast } from 'vant';

let base_url = process.env.NODE === "production" ? "" : process.env.VUE_APP_PROXY_URL;

const service = axios.create({
  baseURL: base_url,
  timeout: 3000  //请求时长
})


service.interceptors.request.use(
  config => {
    // Toast.loading({
    //   message: '加载中...',
    //   forbidClick: true
    // });
    return config
  },
  error => {
    console.log(error, 'err') // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    Toast.clear();
    const res = response.data
    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Toast.clear();
    console.log('err' + error) // for debug

    if (!error.response) {
      if (error.message.indexOf('timeout') > -1) {
        Toast('网络连接超时');
      }
      if (error.message.indexOf('Network Error') > -1) {
        Toast('你的网络不太好哦');
      }
      return;
    }
    let code = error.response.status;
    switch (code) {
      case 400:
        Toast('错误请求');
        break;
      case 401:
        Toast('未授权，请重新登录');
        break;
      case 403:
        Toast('服务器拒绝访问');
        break;
      case 404:
        Toast('请求错误,未找到该资源');
        break;
      case 405:
        Toast('请求方法未允许');
        break;
      case 408:
        Toast('请求超时');
        break;
      case 500:
        Toast('服务端异常');
        break;
      case 502:
        Toast('网络错误');
        break;
      case 503:
        Toast('服务器开小差了');
        break;
      case 504:
        Toast('网络超时');
        break;
      default:
        Toast(`'连接错误'${error.response.status}`);
    }
    return Promise.reject(error)
  }
)



export const fetch = (obj) => new Promise((resolve, reject) => {
  axios({
    method: "POST",
    url: obj.url,
    data: obj.type === "file"? obj.params: qs.stringify(obj.params)  // 区分是文件上传还是普通的参数传递
  }).then(res => {
    resolve(res.data)
  }).catch(error => {
    reject(error)
  })
});




