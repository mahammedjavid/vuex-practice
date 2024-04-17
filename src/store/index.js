import { createStore } from 'vuex'
import cartStore from "./modules/cart";
import productStore from "./modules/product";
const store = createStore({
    modules: {
        cartStore,
        productStore
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        login(state) {
            return state.isLoggedIn = true
        },
        logOut(state) {
            return state.isLoggedIn = false
        }

    },
    actions: {
        login(context) {
            context.commit('login')
        },
        logOut(context) {
            context.commit('logOut')
        }

    },
    getters: {
        isAuthenticated(state){
            return state.isLoggedIn
        }
    }

})

export default store