import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        testText: "here you can see test text",
        users: []
    },
    getters: {
        GET_USERS (state) { 
            console.log("геттер")
            console.log(state.users)
            return state.users
        }
    },
    mutations: {
        SET_USERS: (state, payload) => {
            console.log("мутация")
            console.log(payload)
            state.users = payload
        }
    },
    actions: {
        GET_DATA ({commit}) {
            axios
                .get ('http://test-api.javascript.ru/v1/keka/users/')
                .then ((response) => {
                    commit('SET_USERS',response.data)
                    return response;
                })
                .catch((error) => {
                    console.log(error)
                })
        } 
    }
})

export default store;