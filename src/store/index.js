import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store =createStore({
    state(){
        return{
            count:0,
            likeProducts:[]
        }
    },
    mutations:{
        INCREMENT(state){
            state.count++
        },
        toogleLikeProduct(state,product){
            const index = state.likeProducts.findIndex(p=>p.id == product.id)
            if(index !== -1){
                state.likeProducts.splice(index,1)
            }
            else{
                state.likeProducts.push(product)
            }
        }
    },
    actions:{
        increment(context){
            console.log('context',context);
            context.commit("INCREMENT")
        }
    },
    getters:{
        doubleCount(state){
            return state.count*2
        }
    },
    plugins: [createPersistedState()],
})

export default store