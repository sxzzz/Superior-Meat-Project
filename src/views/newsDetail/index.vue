<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                <ul>
                    <li v-for="news in filteredNewsList" :key="news.id" >
                        <div class="mb-10">
                            <div class="w-full">
                                <div class="flex items-center justify-between  gap-x-4 text-xl font-bold mb-2 ">
                                    <div class="flex items-center">
                                        <p class="me-2">{{news.date}}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                        </svg>
                                    </div>
                                    <div class="me-2">
                                        <router-link  :to="{ path: '/hero', query: { scrollToId: 'topStories' }}"><button type="button" class=" rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm
                            hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Back to Home</button></router-link>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="flex flex-col lg:flex-row gap-5">
                                <div class="basis-1/2">
                                    <img :src="news.imageUrl" alt="" class="mt-6 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]">
                                </div>
                                <div class="basis-1/2">
                                    <ul class="">
                                        <li class="py-8 relative flex flex-wrap gap-x-3">
                                            <p class="w-full flex-none text-xl font-semibold tracking-tight text-gray-900 mb-4">{{news.title}}</p>
                                            <div class="whitespace-pre-line ...">
                                                {{news.content}}
                                            </div>
                                        </li>
                                    </ul>
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

export default {
    components: {

    },
    // props:{
    //     newsList
    // },

    name:'NewsDetail',
    data() {
        const newsList = [
            {
                id:'180123',
                date:'Jan 18, 2023',
                title:'Bridestowe Lavender Field in Tasmania',
                content:'On the 18th of January 2023 Luna went to a marvellous and astonishing place she had never been to or seen. It was the Bridestowe Lavender Field all the way in Tasmania, the place she was born. Even though she was born in Tasmania she still hadn’t been to a lot of places. \n' +  '\n'+
                    'On the 10th of January Luna went all the way back to her home for a holiday. Not did she realise that she has gone back to the place she was born. \n' + '\n'+
                    'The Bridestowe Lavender Field was a miraculous and extraordinary place. The whole place went for hundreds and thousands of miles you could not see the end of the field. It felt like forever. Luna had a wonderful time there.\n'+  '\n'+
                    'She tried to eat all the bees, but the bees were just too quick. She and her family hiked all around the Lavender field and even saw a giant purple lavender teddy bear.  As they hiked towards it, she got super excited and started jumping all around. When she arrived she sniffed the teddy bear all over. Top to bottom. \n' + '\n'+
                    'The Bridestowe Lavender Luna loved the place and towards the end of the trip she even tasted lavender ice cream while her brother enjoyed one too and her mom and dad both enjoyed a lavender coffee.',
                imageUrl:'/src/assets/images/newsDetail/detail01.jpeg'
            },
            {
                id:'020523',
                date:'May 02, 2023',
                title:'Missing Toy',
                content:'Once upon a time, there was a playful dog named Luna. She loved her toys, especially her favorite teddy bear. One day, Bella could not find her beloved toy anywhere.\n' +'\n'+
                    'Luna sniffed around the house, searching under sofas and behind curtains. We tried to help too, but the teddy bear seemed to have vanished. Days turned into weeks, and Luna felt sad without her toy.\n' +'\n' +
                'Finally, during a cleaning of the room, the teddy bear was found stuck between the bed and the wall. Luna wagged her tail with joy, and we were relieved.\n'+'\n'+
                'Luna learned that sometimes things get lost but can be found again. She cherished her teddy bear even more, knowing how special it was to have it back. From that day on, Luna and her favorite toy were inseparable, bringing happiness to her days once again.',
                imageUrl:'/src/assets/images/newsDetail/story01.jpeg'
            },
            {
                id:'140523',
                date:'May 14, 2023',
                title:'Cutes Pet Kiss',
                content:'The story is coming soon',
                imageUrl:'/src/assets/images/newsDetail/kiss.jpeg'
            },
            {
                id:'270123',
                date:'May 14, 2023',
                title:'Buttons Cottage',
                content:'On the 27th and the 28th of January 2023 Luna and her family travelled all the way back to her home, the place she was born. These were the days of the end of the holiday. For both nights Luna stayed at a cosy place. Buttons Cottage down in Nietta in Tasmania.\n'+'\n'+
                    'Very close to Burnie and Devon Port. It was a huge farmland with many many cows. Luna loved the place and the cows all thought she was a calf (baby cow), Since she was a Foxhound. The cottage was cosy with a big yard that went around the whole house.\n'+'\n'+
                    'Luna really enjoyed the big yard. She had a wonderful time playing with her family, trying to play with her brother’s soccerball and down ball. The place was just swell. It was perfecto. Every morning Luna would wake up early and go crazy around house just for attention. She really liked to watch the cows and watching TV with her brother.',
                imageUrl:'/src/assets/images/adventure/buttonsCottage01.jpeg'
            },
            {
                id:'200423',
                date:'May 14, 2023',
                title:'Cookie the Labradoodle',
                content:'On the 15th of April Cookie the Labradoodle came over to Lunas house to stay for a few nights. During their adventure they both went to Pawfield Doggy Park down at Caufield. They both enjoyed playing with other dogs like Dex, a chocolate Labrador and Beau a normal  Labrador. Luna thought she was the strongest dog there apart from Cookie, But she though too soon. Out of nowhere a Boxer came and pounced on Luna. She got a fright and gave a yip. In the nick of one second, she was back to normal forgetting that she got pounced on and had a fright. Instantly she went back to playing like nothing happened and continued chasing Cookie. The Boxer chased both of them and soon enough the three got along and played all together. Just a bit later a Beagle came and joined them. His whole family were vegetarian so the dog as well was vegetarian. He was super skinny unlike other Beagles who are a bit more chubbier. This Beagle has a very good diet. The Beagle joined in the fun and they all played together. They ran around sniffed each other. Played tag. It was wonderful watching the 4 get along really well and not actually fighting. Luna could sense something about the Beagle, like a connection. Luna knew that dog was Beagle. Similar to herself. They both got along great and chased each other until they both had no more energy left to run. Cookie on the other hand had already tired herself out by chasing Luna and the Beagle.',
                imageUrl:'/src/assets/images/newsDetail/kiss.jpeg'
            }

        ]
        return{
            newsList
        }

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