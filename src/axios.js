import axios from 'axios'
import router from './router'
import { Notification } from 'element-ui';

axios.defaults.baseURL = "http://localhost:8081"

const request = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': "application/json; charset=utf-8"
    }

})

request.interceptors.request.use(config => {
    config.headers['Authorization'] = localStorage.getItem("token")
    return config
})

request.interceptors.response.use(response=> {
    let res = response.data

    if(res.code === 200) {
        return response
    } else {
        Notification.error({
            title: "错误",
            message: res.msg
        })
    }
}, error => {

    if (error.response.data) {
        error.massage = error.response.data.msg
    }
    // 没有权限
    if (error.response.status === 401) {
        router.push("/login")
    }
    Notification.error(error.massage)
    return Promise.reject(error)

})

export default request