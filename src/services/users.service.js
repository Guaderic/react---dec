import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll:()=>axiosService(urls.users)
}


export {
    userService
}