import { createStore } from 'vuex'

const state = {
    user: null,
    beer: null
}

const mutations = {
    getUser (state: any, value: object) {
        state.user = value
    },
    getBeer (state: any, value: object) {
        state.beer = value
    }
}

const actions = {
    // @ts-ignore
    getUser: ({ commit }, value) => commit('getUser', value),
    // @ts-ignore
    getBeer: ({ commit }, value) => commit('getBeer', value)
}

export default createStore({
    state,
    actions,
    mutations
})
