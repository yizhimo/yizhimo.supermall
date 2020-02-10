import { ADD_COUNTER, ADD_IN_CART } from './mutation.type'

const actions = {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            // 注意加 context
            const oldInfo = context.state.cartList.find(item => item.iid === payload.iid)

            //参数不用加[],直接写
            if(oldInfo) {
                context.commit(ADD_COUNTER, oldInfo)

                resolve('已重复添加')
            } else {
                payload.count = 1
                context.commit(ADD_IN_CART, payload)

                resolve('添加成功')
            }
        })
    }
}

export default actions