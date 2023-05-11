import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './index.css';

import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true ); // set second parameter to true if you want to use a debugger
createApp(App).use(router).mount('#app')
 