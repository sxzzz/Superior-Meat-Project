import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import './index.css';

createApp(App).use(router).mount('#app')

new Swiper('#swiper-1', {

    effect:"fade",






});