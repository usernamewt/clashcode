import request from "../utils/request";

import { ItypeAPI } from "../utils/response";
import { Res } from "../utils/response";

export const Login = ():Res<null>=>{
    return request.post("")
}

export const getEquipmentList = ():Res<ItypeAPI<any[]>>=>{
    return request.get("")
}