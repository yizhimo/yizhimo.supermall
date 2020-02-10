import { ADD_COUNTER, ADD_IN_CART } from './mutation.type'

const mutations = {
    //mutations里每个方法尽量做单一的事
    //方法名加[]
    [ADD_COUNTER](state, payload) {
        payload.count ++
    },
    [ADD_IN_CART](state, payload) {
        //改变选中状态要在对象模型中改变,再传过去
        payload.check = true
        state.cartList.push(payload)
    }
}

export default mutations