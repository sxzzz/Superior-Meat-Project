// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import './index.css';
//
// createApp(App).use(router).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'
import router from './router';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import './index.css';

const app = createApp(App)

// 挂载 Pinia 和 Router
app.use(createPinia())  // 使用 Pinia
app.use(router)         // 使用 Vue Router

app.mount('#app')  // 挂载应用

new Swiper('#swiper-1', {

    effect:"fade",






});