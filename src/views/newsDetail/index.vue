<template>
    <div class="bg-white dark:bg-black">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                <ul class="">
                    <li v-for="news in filteredNewsList" :key="news.id" >
                        <div class="">
                            <div class="w-full">
                                <div class="flex items-center justify-between  gap-x-4 text-xl font-bold mb-2 ">
                                    <div class="flex items-center">
                                        <p class="me-2">{{news.date}}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                        </svg>
                                    </div>
                                    <div class="me-2">
                                        <router-link  :to="{ path: '/hero', query: { scrollToId: 'topStories' }}"><button type="button" class=" rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white dark:text-gray-300 shadow-sm
                                        hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Back to Stories</button></router-link>
                                    </div>
                                </div>
                            </div>
                            <hr class="dark:border-orange-500">
                            <div class="flex flex-col lg:flex-row gap-5">
                                <div class="basis-1/2">
                                    <img :src="news.imageUrl" alt="" class="mt-6 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]">
                                </div>
                                <div class="basis-1/2">
                                    <div class="py-8 relative flex flex-wrap gap-x-3">
                                        <div class="flex items-center mb-4">
                                            <p class="w-full flex-none text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-300">{{news.title}}</p>
                                            <Switch :switchObj="Switch1" @toggle="toggleContent('Switch1')"></Switch>
                                        </div>


                                        <div v-if="!Switch1.isCnContent" class="whitespace-pre-line ... dark:text-gray-300">
                                            {{news.content}}
                                        </div>
                                        <div v-else class="whitespace-pre-line ... dark:text-gray-300">
                                            {{news.contentCn}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from "../../components/switch/index.vue";

export default {
    components: {
        Switch
    },


    name:'NewsDetail',
    data() {
        const newsList = [
            {
                id:'180123',
                date:'Jan 18, 2023',
                title:'Bridestowe Lavender Field in Tasmania',
                content:'On the 18th of January 2023, Luna embarked on a wondrous journey to a place of enchantment she had never before witnessed. It was the Bridestowe Lavender Field in Tasmania, her birthplace. Despite being born in Tasmania, Luna had yet to explore many destinations. \n' +  '\n'+
                    'The Bridestowe Lavender Field unveiled itself as a magical realm, brimming with awe-inspiring wonders. Its vast expanse stretched for endless miles, evading the eye\'s reach. Time seemed to cease within its boundless beauty, and Luna reveled in its splendor.\n'+  '\n'+
                    'She playfully pursued the bees, yearning to taste their sweetness, but they proved elusive, darting away with nimble grace. Luna and her family embarked on a scenic hike across the lavender-laden landscape, and there, they chanced upon a majestic sight—a colossal teddy bear fashioned from purple lavender. Overwhelmed with excitement, Luna leaped joyfully, infusing the air with her exuberance. Upon reaching the lavender bear, she immersed herself in its fragrance, meticulously exploring every nook and cranny. \n' + '\n'+
                    'The Bridestowe Lavender Field held Luna captive with its allure, and as the trip drew to a close, she savored a delicate indulgence—an exquisite taste of lavender ice cream. Her brother relished it alongside her, while their parents delighted in the fragrant embrace of lavender-infused coffee.',
                contentCn:'2023年1月18日，Luna踏上神秘之旅，降临未曾窥见的梦幻之境。那是她出生之地，塔斯马尼亚州的Bridestowe薰衣草田。纵使Luna曾在此州诞生，而未曾遨游无边。\n' +'\n'+
                    'Bridestowe薰衣草田呈现幻境般领域，奇观连连，令人咋舌。薰衣草的海洋延展数百千米，无边尽头不见踪。光阴仿佛在此无边美景中骤停，Luna沉醉其中。\n' +'\n' +
                    '她兴致高昂地追逐蜜蜂，渴望品味其蜜糖之甘。然而它们机敏躲闪，避开了她的触及。Luna与家人漫游于薰衣草掩映的风景线，偶然间，一幕壮丽景象映入眼帘——一个巨大的紫色薰衣草泰迪熊。Luna欢腾跳跃，充溢着她的热情，空气中翩然起舞。抵达薰衣草熊处，她沉醉于芳香之中，细细触摸每个角落。\n'+'\n'+
                    'Bridestowe薰衣草田以其诱人的魅力将Luna俘获，随着旅行接近尾声，她品味着一份精致的享受——美味的薰衣草冰淇淋。她的哥哥与她一同品味，而父母则陶醉于薰衣草香气中的咖啡。',
                imageUrl:'https://d1nuow4z6t9ani.cloudfront.net/images/newsDetail/detail01.jpeg'
            },
            {
                id:'020523',
                date:'May 02, 2023',
                title:'Missing Toy',
                content:'Once upon a time, there lived a lively dog named Luna. She delighted in her toys, particularly her cherished teddy bear. One fateful day, Luna\'s beloved companion went missing, nowhere to be found.\n' +'\n'+
                    'Luna sniffed around, exploring nooks beneath sofas and hiding spots behind curtains. We joined the search, but the teddy bear appeared to have vanished, leaving Luna forlorn. Days melded into weeks, and sadness clung to Luna\'s spirit, aching for the toy\'s return.\n' +'\n' +
                'At last, while tidying the room, the teddy bear emerged from its hiding place, wedged snugly between the bed and the wall. Luna\'s tail wagged exuberantly, and a wave of relief washed over us.\n'+'\n'+
                'In that moment, Luna learned the art of losing and finding, realizing that treasures can be misplaced but ultimately discovered anew. Her adoration for the teddy bear deepened, acknowledging its irreplaceable value. Henceforth, Luna and her beloved toy became inseparable, infusing her days with boundless joy once more.',
                contentCn:'昔日，有一只灵巧的狗名为Luna，她怀抱着钟爱的玩物，特别是那心灵所依的泰迪熊。某天，Bella心爱的玩具竟无影无踪。Luna在宅舍里细嗅徜徉，搜遍沙发下和窗帘后。我们亦共同搜索，但泰迪熊似乎消逝，令Luna心伤萦绕。光阴匆匆流逝，周而复始，Luna在无玩物之日感到悲戚。\n' +'\n'+
                    '终于，在整理房间时，泰迪熊被发现，困顿在床与墙间。Luna摇尾欢舞，我们也松了一口气。Luna明了时光中物事或会迷失，终将重获其所。她更加珍视心爱的泰迪熊，洞悉其独特之处。自那天起，Luna与心爱玩物再难割舍，为她日日带来无尽欢愉。',

                imageUrl:'https://d1nuow4z6t9ani.cloudfront.net/images/newsDetail/story01.jpeg'
            },
            {
                id:'140523',
                date:'May 14, 2023',
                title:'Cutes Pet Kiss',
                content:'One evening, as the sun set, Lily sat on the porch swing while Max joined her. The sky painted in hues of orange and pink, casting a warm glow. Lily smiled at her furry friend and gently stroked his head.\n'+'\n'+
                    'You know, Max," Lily whispered, "You\'re my everything. I love you. \n'+'\n'+
                'Max wagged his tail, eyes filled with adoration. Understanding every word, he leaned forward, planting a tender kiss on Lily\'s cheek. Her laughter filled the air, heart brimming with warmth and love.\n'+'\n'+
                'From that moment on, Max\'s kisses became their daily ritual, offering comfort during sad times. Their unspoken language of love grew stronger. Max was more than a pet; he was Lily\'s confidant, loyal companion, and endless joy.',
                contentCn:'一个傍晚，夕阳西下，莉莉坐在门廊秋千上，马克斯陪伴在她身旁。天空被橘红和粉红的色彩点缀，洒下温暖的光芒。莉莉微笑着看着她毛茸茸的朋友，轻轻抚摸着他的头。\n'+'\n'+
                    '你知道吗，马克斯，”莉莉低声说道，“你是我生命的一切。我爱你。马克斯摇着尾巴，眼里充满了崇敬。他理解了每一个字，向前倾身，在莉莉的脸颊上留下一个温柔的吻。她的笑声充盈在空气中，心中充满了温暖和爱。\n'+'\n'+
                '从那一刻起，马克斯的吻成为了他们每天的仪式，为悲伤时提供安慰。他们之间无需言语的爱意变得更加浓厚。马克斯不仅仅是一只宠物；他是莉莉的知己、忠诚的伴侣和无尽的欢乐。',

                imageUrl:'https://d1nuow4z6t9ani.cloudfront.net/images/newsDetail/kiss.jpeg'
            },
        ]
        const Switch1 = {
            isCnContent: false,
            isEnContent: false,
        }
        return{
            newsList,
            Switch1
        }

    },
    methods:{
        //将toggleContent方法 emit 成一个自定义事件'toggle'，方便在其他组件中触发该事件
        toggleContent(switchName) {
            this[switchName].isCnContent = !this[switchName].isCnContent;
            this[switchName].isEnContent = !this[switchName].isEnContent;
        },
    },
    computed:{
        filteredNewsList(){
            const newsId = this.$route.params.id;
            // 根据 id 筛选要显示的新闻
            return this.newsList.filter(news => news.id === newsId);
        }
    }

}
</script>


<style>

</style>