import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '/src/views/artGallery/index.vue'
import Hero from '/src/views/hero/index.vue'
import NewsDetail from '/src/views/newsDetail/index.vue'
import Adventure from '/src/views/adventure/index.vue'
import Friends from '/src/views/friends/index.vue'
import Breed from '/src/views/breed/index.vue'
import Foxhound from '/src/views/foxhound/index.vue'
import Beagle from '/src/views/beagle/index.vue'
import Story from '/src/views/story/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/hero'
    },
    {
        path:'/hero',
        name:'hero',
        component:Hero,
    },
    {
        path:'/newsDetail/:id',
        name:'NewsDetail',
        component:NewsDetail,
        props:true
    },
    {
        path:'/artGallery',
        name:'ArtGallery',
        component:ArtGallery,
    },
    {
        path:'/adventure',
        name:'Adventure',
        component:Adventure,
    },
    {
        path:'/friends',
        name:'Friends',
        component:Friends,
    },
    {
        path:'/breed',
        name:'Breed',
        component:Breed,
    },
    {
        path:'/foxhound',
        name:'Foxhound',
        component:Foxhound,
    },
    {
        path:'/beagle',
        name:'Beagle',
        component:Beagle,
    },
    {
        path:'/story',
        name:'Story',
        component:Story,
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.name === 'hero') {
        console.log(to.meta);
        const scrollToId = to.query.scrollToId;
        if (scrollToId) {
            setTimeout(() => {
                const targetElement = document.getElementById(scrollToId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - (window.innerHeight / 3),
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    }
    next();
});
export default router