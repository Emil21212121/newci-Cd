import axios from "axios";
import { configApi } from "../config/config";

const http = axios.create ({
    baseURL: configApi.baseURL
})

export default http;