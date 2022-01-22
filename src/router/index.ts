import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import RbAuth from '/src/components/rb-auth.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/auth',
        name: 'Auth',
        component: RbAuth
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    console.log(to, from)
    // if (!store.state.user.user) {
    //     await store.dispatch('user/saveActionAfterAuth', {type: 'routeTo', value: to.path})
    //     await store.dispatch('popup/showPopup', 'auth')
    //     next(from.path)
    // } else {
    //     next()
    // }
    if (to.name !== 'Auth') next({ name: 'Auth' })
})

export default router
