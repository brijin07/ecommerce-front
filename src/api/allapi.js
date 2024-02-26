
import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonapi"

export const signup=(body,header)=>{
    return commonApi("POST",`${BASE_URL}/signup`,body,header)
}

export const login=(body,header)=>{
    return commonApi("POST",`${BASE_URL}/login`,body,header)
}