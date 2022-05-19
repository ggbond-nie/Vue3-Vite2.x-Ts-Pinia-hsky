import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// import qs from 'qs'

const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APIBASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    // transformRequest: [
    //     function (data) {
    //         //由于使用的 form-data传数据所以要格式化
    //         delete data.Authorization
    //         data = qs.stringify(data)
    //         return data
    //     },
    // ],
})

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 配置头部加载 loading
        return config
    },
    (error: any) => {
        return Promise.reject(error)
    },
)
service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            return response
        } else {
            // showmessage===提示
            return response
        }
    },
    (error: any) => {
        const { response } = error
        if (response) {
            return Promise.reject(response.data)
        } else {
            console.log('网络连接异常,请稍后再试!')
        }
    },
)

const fetch = (method: string, url: string, data: object) => {
    method = method.toLocaleLowerCase()
    if (method === 'post') {
        return service.post(url, {
            ...data,
        })
    }
    if (method === 'get') {
        return service.get(url, {
            params: data,
        })
    }
    if (method === 'delete') {
        return service.delete(url, {
            params: data,
        })
    }
}

export default fetch
