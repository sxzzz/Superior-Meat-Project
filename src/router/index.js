import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '/src/views/gallery/index.vue'
import Hero from '/src/views/hero/index.vue'
import NewsDetail from '/src/views/newsDetail/index.vue'
import Adventure from '/src/views/adventure/index.vue'
import Friends from '/src/views/friends/index.vue'
import Breed from '/src/views/breed/index.vue'
import Foxhound from '/src/views/foxhound/index.vue'
import Beagle from '/src/views/beagle/index.vue'
import Story from '/src/views/story/index.vue'
import Post from '/src/views/post/index.vue'
import Dev from '/src/views/dev/index.vue'
import Music from '/src/views/music/index.vue'
import Plan from '/src/views/devplan/index.vue'
import Layout from '/src/views/layout/index.vue'

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
                redirect: '/dev/music' // 重定向到 /dev/music
            },
            {
                path: 'music',
                name: 'Music',
                component: Music
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