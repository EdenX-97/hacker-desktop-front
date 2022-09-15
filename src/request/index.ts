import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

// Request url
const baseURL = 'http://localhost:8777';
// const baseURL = '/api';

// Default timeout 3 seconds
const timeout = 30000;

const request = axios.create({
    timeout: timeout,
    baseURL: baseURL,
});

request.interceptors.request.use(config => {return config}, err => {console.log(err)})

request.interceptors.response.use(res => {
    let {code, message} = res.data;

    if (code !== 1000) {
        console.log(message)
    } else {
        return res.data;
    }
}, err => {
    console.log(err);
})

export default request;