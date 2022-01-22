import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
    state: {
        menuList: [],
        permList: [],

        hasRoutes: false,
        routers: []
    },
    mutations: {
        setMenuList(state, menus) {
            state.menuList = menus
        },
        setPermList(state, perms) {
            state.permList = perms
        },
        changeRouteStatus(state, hasRoutes) {
            state.hasRoutes = hasRoutes
            localStorage.setItem('hasRouters', hasRoutes)
        },
        setRouters(state, routers) {
            state.routers = routers
            localStorage.setItem('routers', routers)
        },
        resetHasRoutes(state) {
            state.hasRoutes = false
        }


    },
    actions: {
    },
    modules: {
    }
}
