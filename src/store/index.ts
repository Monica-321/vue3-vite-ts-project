import { createStore } from "vuex"

export const store = createStore({
    state: // 基本属性，存储数据，不可以直接修改
    {
        storeBasic: '状态管理器'
    },
    getters: // store的计算属性 
    {

    },
    mutations: // 修改state的唯一途径，提交修改数据，同步更新状态 
    {

    },
    actions: // 提交mutations，可以异步操作，可以通过dispatch方法来触发
    {

    },
    modules: // 多模块
    {

    }
})
