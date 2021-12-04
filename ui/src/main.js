import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueQrcodeReader from "vue3-qrcode-reader";

import Vant from 'vant';
import 'vant/lib/index.css';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import App from './App.vue'

import "tailwindcss/tailwind.css"

import "./app.css"

import store from './store'

import router from './router.js'


let app = createApp(App)

// app.config.errorHandler = (err, vm, info) => {
//   // handle error
//   // `info` is a Vue-specific error info, e.g. which lifecycle hook
//   // the error was found in
// }

// app.config.warnHandler = function(msg, vm, trace) {
//   // `trace` is the component hierarchy trace
// }

// app.config.globalProperties.apiServer = 'http://192.168.1.42:8000/api'


app.use(store)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) 
app.use(VueQrcodeReader)
app.use(router)
app.use(Vant)
app.use(VueToast)
app.mount('#app')