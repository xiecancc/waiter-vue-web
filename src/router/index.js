import Vue from 'vue';
import Router from 'vue-router';

import axios from '../axios'
import store from '../store'
Vue.use(Router);

const routes = [

    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
        meta: { title: '首页' },
        children: [
            {
                path: '/dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                meta: { title: '首页' }
            },
            {
                path: '/404',
                component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                meta: { title: '404' }
            },
        ]
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Login.vue'),
        meta: { title: '登录' }
    }
]
const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {

    // let hasRoute = localStorage.getItem("hasRouters") === undefined ? false : localStorage.getItem("hasRouters")

    let hasRoute = store.state.menus.hasRoutes
    let token = localStorage.getItem("token")

    if (to.path == '/login') {
        next()

    } else if (!token) {
        next({path: '/login'})
    } else if(token && !hasRoute) {
        axios.get("/sys/menu/nav", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(res => {

            // 拿到menuList
            store.commit("setMenuList", res.data.data.nav)

            // 拿到用户权限
            store.commit("setPermList", res.data.data.authoritys)

            // 动态绑定路由
            let newRoutes = router.options.routes

            console.log(res.data.data.nav)
            res.data.data.nav.forEach(menu => {
                if (menu.children.length > 0) {
                    menu.children.forEach(e => {
                        if(e.children.length == 0) {
                            delete e.children
                        }
                        // 转成路由
                        let route = menuToRoute(e)

                        // 把路由添加到路由管理中
                        if (route) {
                            newRoutes[1].children.push(route)
                        }

                    })
                } else {

                    // 转成路由
                    let route = menuToRoute(menu)

                    // 吧路由添加到路由管理中
                    if (route) {
                        newRoutes[1].children.push(route)
                    }
                }
            })
            newRoutes.push({ path: '*', redirect: '/404', hidden: true })
            router.addRoutes(newRoutes)
            hasRoute = true
            store.commit("changeRouteStatus", hasRoute)
        })
    }

    next()
})


// 导航转成路由
const menuToRoute = (menu) => {

    if (!menu.component) {
        return null
    }

    let route = {
        path: menu.path,
        meta: {
            title: menu.title
        }

    }
    route.component = loadView(menu.component)
    // route.component = () => import(`@/views/${menu.component}.vue`)

    return route
}
export const loadView = (view) => { // 路由懒加载
                                    // return () => import(`@/views/${view}`)//不知道为什么不行
    return resolve => require([`@/views/${view}`], resolve)//可以解决
}

export default router

