import axios from "axios";
import {createBrowserHistory} from 'history'

import {baseURL} from "../constants";
import {authService} from "./auth.service";


const axiosService = axios.create({baseURL});

const history = createBrowserHistory();

let isRefreshing = false

axiosService.interceptors.request.use((config)=>{
    const access = localStorage.getItem('access');
    config.headers.Authorization = `Bearer ${access}`
    return config
})

axiosService.interceptors.response.use
        ((config)=>{
            return config
},
        async (error)=>{
            if(error.response?.status === 401 && error.config && !isRefreshing){
                isRefreshing = true
                const refresh = localStorage.getItem('refresh');
                try {
                    const {data} = await authService.refresh(refresh);
                    const {access,refresh} = data;
                    localStorage.setItem(access,'access')
                    localStorage.setItem(refresh,'refresh')
                }catch (e){
                    localStorage.clear()
                    history.replace('/login?expSession=true')
                }
                isRefreshing = false

            }
            return axiosService.request(error.config)
})
export {
    axiosService
}