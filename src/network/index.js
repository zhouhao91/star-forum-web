import axios from "axios"

export function loginRequest(config) {
    const instance = axios.create({
        baseURL: "http://localhost:9002",
        timeout: 10000
    })

    instance.interceptors.request.use(config => {
        return config
    }, err =>{
        console.log(err)
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err =>{
        console.log(err)
    })

    return instance(config)
}

export function articleRequest(config) {
    const instance = axios.create({
        baseURL: "http://localhost:9003",
        timeout: 10000
    })

    instance.interceptors.request.use(config => {
        return config
    }, err =>{
        console.log(err)
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err =>{
        console.log(err)
    })

    return instance(config)
}

