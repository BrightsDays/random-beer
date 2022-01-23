import { createStore, Commit } from 'vuex'

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
    getUser: ({ commit }: { commit: Commit }, value: string) => commit('getUser', value),
    getBeer: ({ commit }: { commit: Commit }, value: string) => commit('getBeer', value)
}

export default createStore({
    state,
    mutations,
    actions
})
