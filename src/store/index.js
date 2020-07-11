import Vue from 'vue';
import Vuex from 'vuex';
Vue.config.devtools = true;

import a from './modules/aa/a1/a.js'
Vue.use(Vuex);

const state={}
const actions={}
const mutations={}
const getters={}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {

    }
})
