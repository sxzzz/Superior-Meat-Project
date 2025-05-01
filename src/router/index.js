import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '@/views/gallery/index.vue'
import Hero from '@/views/hero/index.vue'
import NewsDetail from '@/views/newsDetail/index.vue'
import Adventure from '@/views/adventure/index.vue'
import Pawprint from '@/views/pawprint/index.vue'
import Breed from '@/views/breed/index.vue'
import Foxhound from '@/views/foxhound/index.vue'
import Beagle from '@/views/beagle/index.vue'
import Story from '@/views/story/index.vue'
import Post from '@/views/post/index.vue'
import Dev from '@/views/dev/index.vue'
import Music from '@/views/music/index.vue'
import Plan from '@/views/devplan/index.vue'
import Layout from '@/views/layout/index.vue'
import Dogparks from '@/views/dogParks/index.vue'

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
        path:'/music',
        name:'Music',
        component:Music,
    },
    {
        path:'/newsDetail/:id',
        name:'NewsDetail',
        component:NewsDetail,
        props:true
    },
    {
        path:'/gallery',
        name:'Gallery',
        component:ArtGallery,
    },
    {
        path:'/adventure',
        name:'Adventure',
        component:Adventure,
    },
    {
        path:'/pawprint',
        name:'Pawprint',
        component:Pawprint,
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
    {
        path:'/post',
        name:'Post',
        component:Post,
    },
    {
        path:'/dev',
        name:'Dev',
        component:Dev,
        children: [
            {
                path: '', // 访问 /dev 时匹配
                name: 'DevRedirect',
                redirect: '/dev/plan' // 重定向到 /dev/music
            },
            {
                path: 'plan',
                name: 'Plan',
                component: Plan
            },
            {
                path: 'layout',
                name: 'Layout',
                component: Layout
            },

        ]
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    if (to.name === 'hero') {
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