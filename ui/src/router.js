import { createRouter, createWebHashHistory } from 'vue-router'
import { isAdmin, isAuth } from './plugins/authentication'
import LoginComponent from './layouts/login/index.vue'
import DashboardComponent from './layouts/dashboard/index.vue'
import DashboardWidget from './components/main/dashboard.vue'
/**
 * Package Components
 */
import PackageCrud from './components/product/index.vue'
import PackageListCrud from './components/product/list.vue'
import PackageReadForPublic from './components/product/public-read.vue'
import PackageCreateCrud from './components/product/create.vue'
import PackageUpdateCrud from './components/product/update.vue'
import PackageGutterCrud from './components/product/gutter.vue'
/**
 * User Components
 */
import UserCrud from './components/user/index.vue'
import UserListCrud from './components/user/list.vue'
import UserCreateCrud from './components/user/create.vue'
import UserUpdateCrud from './components/user/update.vue'
/**
 * Client Components
 */
import ClientCrud from './components/client/index.vue'
/**
 * Staff Components
 */
import StaffCrud from './components/staff/index.vue'
/**
 * Error
 */
import Page404 from './components/errors/404.vue'
let routes = [] 
if( isAdmin() ){
    routes = [{ 
        path: '', 
        redirect: to => {
            return '/login'
        }
    },
    { 
        path: '/', 
        redirect: to => {
            return '/login'
        }
    },
    {
        name: 'Login',
        path: '/login',
        component: LoginComponent ,
        meta: {
            transition: 'slide-left'
        }
    },
    {
        name: "PackageDetailForPublic" ,
        path: '/readpackage/:id',
        component: PackageReadForPublic ,
        meta: { 
            transition: 'slide-right'
        },
    },
    /**
     * Dashboard
     */
    {
        name: "Dashboard" ,
        path: '/dashboard',
        component: DashboardComponent,
        meta: {
            transition: 'slide-left' ,
            requiresAuth: true,
            is_admin : true
        },
        children: [{
            name: 'DashboardWidgets' ,
            path: '',
            component: DashboardWidget ,
            meta : {
                transition: 'slide-left' ,
                requiresAuth: true ,
                is_admin : true
            }
        },
        {
            name: "Package" ,
            path: '/package',
            component: PackageCrud ,
            meta: { 
                transition: 'slide-left' ,
                requiresAuth: true,
                is_admin : true
            },
            children: [
                {
                    name: "PackageList" ,
                    path: '',
                    component: PackageListCrud ,
                    meta: { 
                        transition: 'slide-right' ,
                        requiresAuth: true,
                        is_admin : true
                    },
                },
                // {
                //     path: 'create',
                //     component: PackageCreateCrud ,
                //     meta: { 
                //         transition: 'slide-right' ,
                //         requiresAuth: true,
                //         is_admin : true
                //     },
                // },
                // {
                //     path: 'update',
                //     component: PackageCreateCrud ,
                //     meta: { 
                //         transition: 'slide-right' ,
                //         requiresAuth: true,
                //         is_admin : true
                //     },
                // }
            ]
        },
        {
            name: 'Receive' ,
            path: '/receive',
            component: PackageGutterCrud ,
            meta: { 
                transition: 'slide-right' ,
                requiresAuth: true ,
                is_admin : true
            },
        },
        {
            name: 'User' ,
            path: '/user',
            component: UserCrud ,
            meta: { 
                transition: 'slide-right' ,
                requiresAuth: true,
                is_admin : true
            },
            children: [
                {
                    name: "UserList" ,
                    path: '' ,
                    component: UserListCrud
                },
                {
                    name: "UserCreate" ,
                    path: 'create' ,
                    component: UserCreateCrud
                },
                {
                    name: "UserUpdate" ,
                    path: 'update' ,
                    component: UserUpdateCrud
                }
            ]
        },
        {
            path: '/client',
            component: ClientCrud ,
            meta: { 
                transition: 'slide-right' ,
                requiresAuth: true,
                is_admin : true
            },
        },
        {
            path: '/staff',
            component: StaffCrud ,
            meta: { 
                transition: 'slide-right' ,
                requiresAuth: true,
                is_admin : true
            },
        }]
    }]
}else{
    routes = [{ 
        path: '', 
        redirect: to => {
            return '/login'
        }
    },
    { 
        path: '/', 
        redirect: to => {
            return '/login'
        }
    },
    {
        name: 'Login',
        path: '/login',
        component: LoginComponent ,
        meta: {
            transition: 'slide-left'
        }
    },
    {
        name: "PackageDetailForPublic" ,
        path: '/readpackage/:id',
        component: PackageReadForPublic ,
        meta: { 
            transition: 'slide-right'
        },
    },
    /**
     * Dashboard
     */
    {
        name: "Dashboard" ,
        path: '/dashboard',
        component: DashboardComponent,
        meta: {
            transition: 'slide-left' ,
            requiresAuth: true,
            is_admin : true
        },
        children: [{
            name: 'DashboardWidgets' ,
            path: '',
            component: DashboardWidget ,
            meta : {
                transition: 'slide-left' ,
                requiresAuth: true ,
                is_admin : true
            }
        },
        {
            name: "Package" ,
            path: '/package',
            component: PackageCrud ,
            meta: { 
                transition: 'slide-left' ,
                requiresAuth: true,
                is_admin : true
            },
            children: [
                {
                    name: "PackageList" ,
                    path: '',
                    component: PackageListCrud ,
                    meta: { 
                        transition: 'slide-right' ,
                        requiresAuth: true,
                        is_admin : true
                    },
                }
            ]
        },
        {
            name: 'Receive' ,
            path: '/receive',
            component: PackageGutterCrud ,
            meta: { 
                transition: 'slide-right' ,
                requiresAuth: true ,
                is_admin : true
            },
        },
        {
            path: '/client',
            component: ClientCrud ,
            meta: { 
                transition: 'slide-right' ,
                requiresAuth: true,
                is_admin : true
            },
        },]
    }]
}

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// Meta Handling
router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !isAuth() ){
        if( to.path.includes('/readpackage') ) next()
        else{
            next({ path: '/login' })
        }
    }
    else if (to.path == '/login' && isAuth() ) {
        if( isAdmin() ){
            next({ path: '/dashboard' })
        }else{
            next({ path: '/receive' })
        }
    }
    else {
        next()
    }
})
// .beforeResolve(async to => {
//     if (to.meta.requiresCamera) {
//         try {
//         await askForCameraPermission()
//         } catch (error) {
//         if (error instanceof NotAllowedError) {
//             // ... handle the error and then cancel the navigation
//             return false
//         } else {
//             // unexpected error, cancel the navigation and pass the error to the global handler
//             throw error
//         }
//         }
//     }
// })

export default router