import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '/src/views/artGallery/index.vue'
import Hero from '/src/views/hero/index.vue'
import Adventure from '/src/views/adventure/index.vue'
import Friends from '/src/views/friends/index.vue'
import Breed from '/src/views/breed/index.vue'
import Foxhound from '/src/views/foxhound/index.vue'
import Beagle from '/src/views/beagle/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/artGallery'
    },
    {
        path:'/hero',
        name:'Hero',
        component:Hero,
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
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router