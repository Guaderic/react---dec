import axios from "axios";
import {baseURL} from "../constants";

const axiosService = axios({baseURL});


export {
    axiosService
}