import { createRouter, createWebHashHistory } from 'vue-router'
import LoginComponent from './layouts/login/index.vue'
import DashboardComponent from './layouts/dashboard/index.vue'
import DashboardWidget from './components/main/dashboard.vue'
import PackageCrud from './components/product/index.vue'
import PackageGutterCrud from './components/product/gutter.vue'
let routes = [{
        path: '',
        redirect: to => {
            return { path: '/login' }
        }
    },
    /**
     * Login
     */
    {
        path: '/login',
        component: LoginComponent
    },
    /**
     * Dashboard
     */
    {
        path: '/dashboard',
        component: DashboardComponent,
        children: [{
                path: '',
                component: DashboardWidget
            },
            {
                path: '/package',
                component: PackageCrud
            },
            {
                path: '/receive',
                component: PackageGutterCrud
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router