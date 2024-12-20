import request from "../utils/request";

import { ItypeAPI } from "../utils/response";
import { Res } from "../utils/response";

interface DataItem {
    id: string;
    res_name: string;
    status: number;
    address: string;
    res_date:string;
    last_checked:string
  }

export const Login = ():Res<null>=>{
    return request.post("")
}


// 获取设备列表
export const getEquipmentList = (userId:string):Res<ItypeAPI<any>>=>{
    return request.get("/get_device?user_id="+userId)
}

// 获取加速资源列表
export const getAccelerateList = (deviceId:string):Res<ItypeAPI<DataItem[]>>=>{
    return request.get("/get_resource?device_id="+deviceId)
}


// 获取加速网址
export const getAccelerateUrl = (resId:string):Res<ItypeAPI<any[]>>=>{
    return request.get("/get_resource_url?res_id="+resId)
}