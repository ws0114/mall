import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "../components/mainPage.vue"
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            component: mainPage
        }
    ]
})
export default router;