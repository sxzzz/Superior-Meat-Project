<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text ">Welcome to Luna's BLOG!</h1>
                <p class="mt-6 text-lg leading-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% inline-block text-transparent bg-clip-text ">Luna is a foxhound born in Tasmania Hobart. She enjoys eating, sleeping, snuggling and playing.
                    Luna was also quite different to all of her brothers and sister. As they were Beagles. She turned out to be a part Beagle and part Foxhound. </p>
            </div>
            <section id="slider" class="mt-5">
                <swiper
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :loop="true"
                    :pagination="{clickable: true,}"
                    :navigation="true"
                    :speed=1000
                    :autoplay="{
                      delay: 4000,
                      disableOnInteraction: false,
                    }"
                    :modules="modules"
                    @autoplayTimeLeft="onAutoplayTimeLeft"
                    class="mySwiper"
                >
                    <swiper-slide v-for="(slide, index) in slides" :key="index">
                        <img :src="slide.path" :alt="slide.alt" class="">
                    </swiper-slide>
                    <template #container-end>
                        <div class="autoplay-progress">
                            <svg viewBox="0 0 48 48" ref="progressCircle">
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref="progressContent"></span>
                        </div>
                    </template>
                </swiper>

            </section>
        </div>

        <div class="bg-rose-200 py-12 mt-5">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:max-w-none text-white">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% inline-block text-transparent bg-clip-text">Luna Characteristic</h2>
                    </div>
                    <dl class="mt-16 grid grid-cols-1 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        <div class="flex flex-col bg-blue-300 p-4 sm:p-8">
                            <dt class="text-sm font-semibold leading-6">Height</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight">55cm</dd>
                        </div>
                        <div class="flex flex-col bg-blue-300 p-4 sm:p-8 ">
                            <dt class="text-sm font-semibold leading-6">Weight</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight">20KG</dd>
                        </div>
                        <div class="flex flex-col bg-blue-300 p-4 sm:p-8 ">
                            <dt class="text-sm font-semibold leading-6">Age</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight">21 months</dd>
                        </div>
                        <div class="flex flex-col bg-blue-300 p-4 sm:p-8 ">
                            <dt class="text-sm font-semibold leading-6">Exercise</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight">All the time</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight my-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Top News</h2>
            <section id="topNews">
                <div class="flex flex-row mb-4">
                    <div class="basis-3/4">
                        <img class="h-48 lg:h-56 w-full object-cover rounded-l-2xl" src="https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/hero-new01.jpeg" alt="">
                    </div>
                    <div class="basis-1/4 rounded-r-2xl bg-violet-400 flex flex-col justify-between px-3 text-white">
                        <div class="mt-5">
                            <h2 class="text-sm font-semibold leading-8">18/01/2023</h2>
                            <p class="mt-2 text-base lg:text-2xl xl:text-3xl font-bold tracking-tight">Bridestowe Lavender Farm in TAS</p>
                        </div>
                        <div class="mb-3">
                            <router-link to="/newsdetail"><button type="button" class="rounded bg-pink-600 px-2 py-1 text-xs font-semibold text-white shadow-sm
                            hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">See More</button>
                            </router-link>
                        </div>

                    </div>
                </div>
                <hr class="border-rose-300">
                <div class="flex flex-row mt-4 mb-4">

                    <div class="basis-1/4 rounded-l-2xl bg-violet-400 flex flex-col justify-between px-3 text-white">
                        <div class="mt-5">
                            <h2 class="text-sm font-semibold leading-8">02/05/2023</h2>
                            <p class="mt-2 text-base lg:text-2xl xl:text-3xl font-bold tracking-tight">Missing Toy</p>
                        </div>
                        <div class="mb-3">
                            <a herf="#"><button type="button" class="rounded bg-pink-600 px-2 py-1 text-xs font-semibold text-white shadow-sm
                            hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">See More</button></a>
                        </div>
                    </div>
                    <div class="basis-3/4">
                        <img class="h-48 lg:h-56 w-full object-cover rounded-r-2xl" src="https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/hero-new02.jpeg" alt="">
                    </div>
                </div>

                <hr class="border-rose-300">
                <div class="flex flex-row mt-4 mb-4">
                    <div class="basis-3/4">
                        <img class="h-48 lg:h-56 w-full object-cover rounded-l-2xl" src="https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/hero-new03.jpeg" alt="">
                    </div>
                    <div class="basis-1/4 rounded-r-2xl bg-violet-400 flex flex-col justify-between px-3 text-white">
                        <div class="mt-5">
                            <h2 class="text-sm font-semibold leading-8">14/05/2023</h2>
                            <p class="mt-2 text-base lg:text-2xl xl:text-3xl font-bold tracking-tight">Cutes Pet Kiss</p>
                        </div>
                        <div class="mb-3">
                            <a herf="#"><button type="button" class="rounded bg-pink-600 px-2 py-1 text-xs font-semibold text-white shadow-sm
                            hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">See More</button></a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight my-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Blog</h2>
        </div>

        <div class="bg-cyan-500 py-4 text-white">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mt-8 space-y-20 lg:space-y-20">
                    <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col gap-8 lg:flex-row">
                        <div class="relative h-64 w-96 lg:w-64 lg:h-48 shrink-0 group">
                            <img :src="post.imageUrl" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover group-hover:opacity-75" />
                            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div>
                            <div class="flex items-center gap-x-4 text-xs ">
                                <time :datetime="post.datetime" class="">{{ post.date }}</time>
                                <div>
                                    <img :src="post.author.imageUrl" alt="" class="h-8 w-8 rounded-full bg-gray-50" />
                                </div>
                                <p>{{post.author.name}}</p>
                            </div>
                            <div class="group relative max-w-xl">
                                <p class="font-bold">{{post.title}}</p>
                                <p class="mt-5 text-base leading-6">{{ post.description }}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../index.css';

// import required modules
import  { Autoplay, Pagination,Navigation } from 'swiper';


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const progressCircle = ref(null);
        const progressContent = ref(null);


        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.value.style.setProperty('--progress', 1- progress);
            progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
        };
        const posts = [
            {
                id: 1,
                title: 'Pawfield Park',
                description:
                    'Cold,Windy,High chance of showers,still take Luna for a refreshing stroll in the park. Sit！ ',
                imageUrl:
                    'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/b01.jpeg',
                date: 'May 21, 2023',
                datetime: '2023-05-21',
                author: {
                    name: 'James',
                    imageUrl:
                        'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/jamesAvator.jpeg',
                },
            },
            {
                id: 2,
                title: 'BE Circle Run',
                description:
                    'I just ran 7.5 kilometers in 47 minutes, with an average pace of 6 minutes and 17 seconds per kilometer. However, an adult American foxhound can easily run at a speed of 60 kilometers per hour, which means it takes them 1 minute per kilometer. That makes their pace six times faster than mine!!',
                imageUrl:
                    'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/b02.jpeg',
                date: 'May 21, 2023',
                datetime: '2023-05-21',
                author: {
                    name: 'Andy',
                    imageUrl:
                        'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/andyshen_Pixar.png',
                },
            },
            {
                id: 3,
                title: 'My mood Zzzz ',
                description:
                    'Wait when I am back from school',
                imageUrl:
                    'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/foxhoundmood.jpg',
                date: 'May 21, 2023',
                datetime: '2023-05-21',
                author: {
                    name: 'James',
                    imageUrl:
                        'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/jamesAvator.jpeg',
                },
            },

        ]
        const slides =  [
            { path: 'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/hero01.jpeg', alt: '' },
            { path: 'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/hero02.jpeg', alt: '' },
            { path: 'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/hero03.jpeg', alt: '' },
            { path: 'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/hero04.jpeg', alt: '' },
            { path: 'https://lunathefoxhound.s3.ap-southeast-2.amazonaws.com/images/hero05.jpeg', alt: '' }
        ]
        return {
            onAutoplayTimeLeft,
            progressCircle,
            progressContent,
            modules: [Autoplay, Pagination, Navigation],
            posts,
            slides
        };
    },
    name:'Hero',
}
</script>


<style>

.swiper {
    width: 450px;
    height: 300px;
}

@media (min-width: 640px) {

    .swiper {
        width: 90%;
        height: 450px;
    }
}

@media (min-width: 1200px) {

    .swiper {
        width: 100%;
        height: 600px;
    }
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.swiper {
    margin-left: auto;
    margin-right: auto;
}
.swiper-button-next,
.swiper-button-prev {
    color: white; /* Change the color to your desired color */
}
.swiper-pagination-bullet {
    background-color: white; /* Change the color to your desired color */
}
.autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
}

.autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: white;
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
}

</style>