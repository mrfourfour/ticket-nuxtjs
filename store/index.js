import Vuex from 'vuex'
import state from './states.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

// export const state = () => ({
//     state1
// })

// export const mutations = {
//     mutations1
// }

// export const actions = {
//     actions1
// }

// export const getters = {
//     getters1
// }

const createStore = () => {
    return new Vuex.Store({
        state,
        actions,
        getters,
        mutations
    })
}

export default createStore