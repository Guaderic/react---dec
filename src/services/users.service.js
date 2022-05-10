import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll:(page=1)=>axiosService(urls.users, {params:{page}})
}


export {
    userService
}