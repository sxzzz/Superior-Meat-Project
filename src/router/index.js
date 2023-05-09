import { createRouter, createWebHistory } from 'vue-router'
import ArtGallery from '/src/views/artGallery/index.vue'
import Adventure from '/src/views/adventure/index.vue'
import Friends from '/src/views/friends/index.vue'
import Breed from '/src/views/breed/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/artGallery'
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
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router