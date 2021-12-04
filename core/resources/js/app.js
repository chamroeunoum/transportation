import { createApp } from 'vue'
import { createStore } from 'vuex'

/**
 * Import Vue Toastification
 */
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

/**
 * Import routes
 */
import { router } from './router'

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

const app = createApp({})
app.use(store)
app.use(router)

// Vue Toastification configuration
const options = {
    // You can set your default options here
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true
};
app.use(Toast, options);

app.mount('#app')