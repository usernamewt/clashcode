
import { defineStore } from 'pinia'

export const useTestStore = defineStore('BaseStore', {
    state:()=>{
        return {
            // 取值'equipmentlist','acceryon'
            menuType:'equipmentlist'
        }
    }
})
