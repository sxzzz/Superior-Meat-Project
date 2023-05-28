<template>
    <div class="bg-white">
        <div class=" mx-auto max-w-7xl px-6 lg:px-8 mt-6">
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text ">Embrace the Journey: Unveiling Life's Tapestry <p class="mt-2">拥抱旅程：揭开生命的织锦</p></h1>
            <p class="mt-6 text-lg leading-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% inline-block text-transparent bg-clip-text ">Luna, a foxhound hailing from the beautiful city of Hobart in Tasmania, possessed a deep love for the simple pleasures of life—indulging in delicious meals, surrendering to peaceful slumber, embracing cozy snuggles, and frolicking in playful escapades. Amidst her siblings, who were all beagles, Luna stood out as a unique soul, a mesmerizing blend of beagle and foxhound ancestry.</p>
            <p class="text-lg leading-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% inline-block text-transparent bg-clip-text ">Luna，一只诞生于塔斯马尼亚州霍巴特美城的猎狐犬，胸怀对生活的简约欢愉，热爱着美食的醉人魅力、恬静的甜蜜梦乡，与温馨的亲昵相依，还有在欢欣的游戏中尽情踊跃。在她的兄弟姐妹中，众犬皆为比格，而Luna独树一帜，融合了比格犬与猎狐犬的绝妙交织，形成其迷人之灵魂。</p>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight my-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Moments 精彩瞬间 </h2>
        </div>

        <div class="bg-cyan-500 py-4 text-white">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">

                <div class="mt-8 space-y-8">
                        <!-- moments -->
                        <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col items-center gap-4 lg:flex-row">
                            <div class="relative h-64 w-[21rem] sm:h-[28rem] sm:w-[40rem] lg:w-64 lg:h-48 shrink-0 group">
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
                                <div class="group relative w-[21rem] sm:w-[40rem]">
                                    <p class="font-bold">{{post.title}}</p>
                                    <p class="mt-5 text-base leading-6">{{ post.description }}</p>
                                </div>
                            </div>
                        </article>

                </div>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight my-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Furry Friends 毛茸茸的家伙们</h2>
            <section id="slider" class="mt-5 flex justify-center">
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
                            <dt class="text-sm font-semibold leading-6">Height 身高</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight">55cm</dd>
                        </div>
                        <div class="flex flex-col bg-blue-300 p-4 sm:p-8 ">
                            <dt class="text-sm font-semibold leading-6">Weight 体重</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight">20KG</dd>
                        </div>
                        <div class="flex flex-col bg-blue-300 p-4 sm:p-8 ">
                            <dt class="text-sm font-semibold leading-6">Age 年龄</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight">21 months</dd>
                        </div>
                        <div class="flex flex-col bg-blue-300 p-4 sm:p-8 ">
                            <dt class="text-sm font-semibold leading-6">Exercise 运动 </dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight">All the time</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight my-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Top stories 头条</h2>
            <section id="topStories">
                <div id="bridestowe" class="flex flex-row mb-4">
                    <div class="basis-3/4">
                        <img class="h-48 lg:h-56 w-full object-cover rounded-l-2xl" src="/assets/images/hero/hero-new01.jpeg" alt="">
                    </div>
                    <div class="basis-1/4 rounded-r-2xl bg-violet-400 flex flex-col justify-between px-3 text-white">
                        <div class="mt-5">
                            <h2 class="text-sm font-semibold leading-8">18/01/2023</h2>
                            <p class="mt-2 text-base lg:text-2xl xl:text-3xl font-bold tracking-tight">Bridestowe Lavender 薰衣草庄园</p>
                        </div>
                        <div class="mb-3">
                            <router-link :to="`/newsdetail/180123`"><button type="button" class="rounded bg-pink-600 px-2 py-1 text-xs font-semibold text-white shadow-sm
                            hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">See More</button>
                            </router-link>
                        </div>

                    </div>
                </div>
                <hr class="border-rose-300">
                <div id="missingToy" class="flex flex-row mt-4 mb-4">
                    <div class="basis-1/4 rounded-l-2xl bg-violet-400 flex flex-col justify-between px-3 text-white">
                        <div class="mt-5">
                            <h2 class="text-sm font-semibold leading-8">02/05/2023</h2>
                            <p class="mt-2 text-base lg:text-2xl xl:text-3xl font-bold tracking-tight">Missing Toy 丢失的玩具</p>
                        </div>
                        <div class="mb-3">
                            <router-link :to="`/newsdetail/020523`"><button type="button" class="rounded bg-pink-600 px-2 py-1 text-xs font-semibold text-white shadow-sm
                            hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">See More</button></router-link>
                        </div>
                    </div>
                    <div class="basis-3/4">
                        <img class="h-48 lg:h-56 w-full object-cover rounded-r-2xl" src="/assets/images/hero/hero-new02.jpeg" alt="">
                    </div>
                </div>
                <hr class="border-rose-300">
                <div id="kiss" class="flex flex-row mt-4 mb-4">
                    <div class="basis-3/4">
                        <img class="h-48 lg:h-56 w-full object-cover rounded-l-2xl" src="/assets/images/hero/hero-new03.jpeg" alt="">
                    </div>
                    <div class="basis-1/4 rounded-r-2xl bg-violet-400 flex flex-col justify-between px-3 text-white">
                        <div class="mt-5">
                            <h2 class="text-sm font-semibold leading-8">14/05/2023</h2>
                            <p class="mt-2 text-base lg:text-2xl xl:text-3xl font-bold tracking-tight">Cutes Pet Kiss 定情一吻</p>
                        </div>
                        <div class="mb-3">
                            <router-link :to="`/newsdetail/140523`"><button type="button" class="rounded bg-pink-600 px-2 py-1 text-xs font-semibold text-white shadow-sm
                            hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">See More</button></router-link>
                        </div>
                    </div>
                </div>

            </section>
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
                title: 'Programming dog and programmer 编程狗和程序猿',
                description:
                    'Whether it\'s "Programming dog" or "Programmer," both represent an interest and talent in programming. They express a love for the programming world and possess professional skills in different contexts. 无论是"编程狗"还是"程序员"，都代表着对编程的兴趣和才能，他们在不同的背景下表达了对编程世界的热爱和专业能力。',
                imageUrl:'/assets/images/hero/b06.jpeg',
                date: 'May 27, 2023',
                datetime: '2023-05-27',
                author: {
                    name: 'Andy',
                    imageUrl:'/assets/logo/andyAvator.png',
                },
            },
            {
                id: 2,
                title: 'Night all 晚安',
                description:
                    'Immersed in the ocean of Programming.沉浸在编程的海洋中！',
                imageUrl:'/assets/images/hero/b07.jpeg',
                date: 'May 27, 2023',
                datetime: '2023-05-27',
                author: {
                    name: 'Andy',
                    imageUrl:'/assets/logo/andyAvator.png',
                },
            },
            {
                id: 3,
                title: 'recycling 回收工作',
                description:
                    'Good girl! Luna chewing up the cardboard into small pieces so it fit in the bin. Good job recycling! 好孩子! Luna把纸板撕成小块，这样就能放进回收垃圾箱里面，干得漂亮!',
                imageUrl:'/assets/images/hero/b05.jpeg',
                date: 'May 24, 2023',
                datetime: '2023-05-24',
                author: {
                    name: 'James',
                    imageUrl:'/assets/logo/jamesAvator.jpeg',
                },
            },
            {
                id: 4,
                title: 'Luna first run training 第一次跑步训练',
                description:
                    'Good job, Luna, completed 2.31km in 17 minutes. 真棒,2.31公里,用时17分钟!',
                imageUrl:'/assets/images/hero/b03.jpeg',
                date: 'May 23, 2023',
                datetime: '2023-05-23',
                author: {
                    name: 'Andy',
                    imageUrl:'/assets/logo/andyAvator.png',
                },
            },
            {
                id: 5,
                title: 'Reading together 读书',
                description:
                    'Luna rested peacefully on her favorite mat while her brother gave her pats and read her book. 安静地躺在她最喜欢的垫子上，哥哥拍拍她，给她读书。',
                imageUrl:'/assets/images/hero/b04.jpeg',
                date: 'May 22, 2023',
                datetime: '2023-05-22',
                author: {
                    name: 'James',
                    imageUrl:'/assets/logo/jamesAvator.jpeg',
                },
            },
            {
                id: 6,
                title: 'Pawfield Park 狗狗公园',
                description:
                    'Cold,Windy,High chance of showers,still take Luna for a refreshing stroll in the park. Sit！寒冷，有风，大概率有阵雨，我们还是来公园散步,坐!',
                imageUrl:'/assets/images/hero/b01.jpeg',
                date: 'May 21, 2023',
                datetime: '2023-05-21',
                author: {
                    name: 'James',
                    imageUrl:'/assets/logo/jamesAvator.jpeg',
                },
            },
            {
                id: 7,
                title: 'BE Circle Run 东本特利绕圈',
                description:
                    'I just ran 7.5 kilometers in 47 minutes, with an average pace of 6 minutes and 17 seconds per kilometer. However, an adult American foxhound can easily run at a speed of 60 kilometers per hour, which means it takes them 1 minute per kilometer. That makes their pace six times faster than mine!! 我刚刚用时47分钟完成7.5公里，配速为每公里6分17秒。然而，一只成年的美国猎狐犬可以轻松地以时速60公里奔跑，这意味着它们只需1分钟即可达成目标。比我整整快了六倍！！',
                imageUrl:'/assets/images/hero/b02.jpeg',
                date: 'May 21, 2023',
                datetime: '2023-05-21',
                author: {
                    name: 'Andy',
                    imageUrl:'/assets/logo/andyAvator.png',
                },
            },

        ]
        const slides =  [
            { path: '/assets/images/hero/hero01.jpeg', alt: '' },
            { path: '/assets/images/hero/hero02.jpeg', alt: '' },
            { path: '/assets/images/hero/hero03.jpeg', alt: '' },
            { path: '/assets/images/hero/hero04.jpeg', alt: '' },
            { path: '/assets/images/hero/hero05.jpeg', alt: '' },
            { path: '/assets/images/hero/hero06.jpeg', alt: '' },
            { path: '/assets/images/hero/hero07.jpeg', alt: '' },
            { path: '/assets/images/hero/hero08.jpeg', alt: '' },
            { path: '/assets/images/hero/hero09.jpeg', alt: '' }
        ]
        const newsList = [
            {
                id:'001',
                date:'Jan 18, 2023',
                title:'Bridestowe Lavender Field in Tasmania',
                content:' On the 18th of January 2023, Luna embarked on a wondrous journey to a place of enchantment she had never before witnessed. It was the Bridestowe Lavender Field in Tasmania, her birthplace. Despite being born in Tasmania, Luna had yet to explore many destinations. \n' +  '\n'+
                    'The Bridestowe Lavender Field unveiled itself as a magical realm, brimming with awe-inspiring wonders. Its vast expanse stretched for endless miles, evading the eye\'s reach. Time seemed to cease within its boundless beauty, and Luna reveled in its splendor.\n'+  '\n'+
                    'She tried to eat all the bees, but the bees were just too quick. She and her family hiked all around the Lavender field and even saw a giant purple lavender teddy bear.  As they hiked towards it, she got super excited and started jumping all around. When she arrived she sniffed the teddy bear all over. Top to bottom. \n' + '\n'+
                    'The Bridestowe Lavender Luna loved the place and towards the end of the trip she even tasted lavender ice cream while her brother enjoyed one too and her mom and dad both enjoyed a lavender coffee.',
                imageUrl:'/assets/images/newsDetail/detail01.jpeg'
            },
            {
                id:'002',
                date:'May 02, 2023',
                title:'Missing Toy',
                content:'Once upon a time, there was a playful dog named Luna. She loved her toys, especially her favorite teddy bear. One day, Bella could not find her beloved toy anywhere.\n' +'\n'+
                    'Luna sniffed around the house, searching under sofas and behind curtains. We tried to help too, but the teddy bear seemed to have vanished. Days turned into weeks, and Luna felt sad without her toy.\n' +'\n' +
                    'Finally, during a cleaning of the room, the teddy bear was found stuck between the bed and the wall. Luna wagged her tail with joy, and we were relieved.\n'+'\n'+
                    'Luna learned that sometimes things get lost but can be found again. She cherished her teddy bear even more, knowing how special it was to have it back. From that day on, Luna and her favorite toy were inseparable, bringing happiness to her days once again.',
                imageUrl:'/assets/images/newsDetail/story01.jpeg'
            },
            {
                id:'03',
                date:'May 14, 2023',
                title:'Cutes Pet Kiss',
                content:'coming soon',
                imageUrl:'/assets/images/newsDetail/kiss.jpeg'
            }

        ]
        return {
            onAutoplayTimeLeft,
            progressCircle,
            progressContent,
            modules: [Autoplay, Pagination, Navigation],
            posts,
            slides,
            newsList
        };
    },
    name:'Hero',
}
</script>


<style>

.swiper {
    width: 345px;
    height: 280px;
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