<template>
    <div class="bg-white dark:bg-black">
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <!--BC-->
            <div class="ps-7">
                <h2 class="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 caption-top dark:text-gray-300">Buttons Cottage</h2>
            </div>
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                    <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s10.jpeg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s09.jpeg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
                    </div>
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s01.jpeg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
                    </div>
                </div>
                <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s02.jpeg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
                </div>
            </div>

            <div class="mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:grid lg:max-w-7xl lg:px-8">
                <div class="py-2 lg:col-span-2 lg:col-start-1 lg:pr-8">
                    <div>
                        <!-- switch button  -->
                        <Switch class="mb-2" :switchObj="bcSwitch" @toggle="toggleContent('bcSwitch')"></Switch>
                        <div>
                            <!-- v-if 非中文 else 中文 -->
                            <div v-if="!bcSwitch.isCnContent" id="buttonsCottageEn" class="space-y-6">
                                <p class="text-base text-gray-900 dark:text-gray-300">On the 27th and 28th of January 2023, Luna and her family traveled all the way back to her home, the place where she was born. These were the last days of their holiday. For both nights, Luna stayed at a cozy place called Buttons Cottage in Nietta, Tasmania, which was very close to Burnie and Devonport. </p>
                                <p class="dark:text-gray-300">It was a huge farmland with many cows. Luna loved the place, and the cows all thought she was a calf (baby cow) because she was a Foxhound. The cottage was cozy, with a big yard that surrounded the entire house. Luna truly enjoyed the large yard and had a wonderful time playing with her family, attempting to play with her brother's soccer ball and down ball. The place was just perfect. Every morning, Luna would wake up early and run around the house, seeking attention. She particularly enjoyed watching the cows and watching TV with her brother.</p>
                            </div>
                            <div v-else id="buttonsCottageCn" class="space-y-6">
                                <p class="text-base text-gray-900 dark:text-gray-300">2023年1月27日和28日，Luna与亲人踏上回归之路，回到了她诞生的乡野。那是假期尘封的终章，在塔斯马尼亚尼埃塔的Buttons Cottage小屋，伯尼和德文港近在咫尺。</p>
                                <p class="dark:text-gray-300">在那片牧场的田野里，牛群簇拥而居。Luna深爱此地，牛儿们却将她当作小牛犊，实则她是猎狐的神采。小屋舒适怡人，周围环抱着宽阔庭院。Luna倾心于那块天地，在那里与亲人欢娱，与哥哥同行踢球。环境如此美好，实在是难以言喻。每个黎明，Luna早早醒来，围绕房舍奔驰，寻求注目。她尤其钟爱观察那些牛群，与哥哥一同欣赏电视画面。</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Divider class="mt-4"></Divider>
            <!--bamboo-->
            <div class="bg-white dark:bg-black">
                <div class="mx-auto max-w-2xl px-4 py-6 sm:px-6  lg:max-w-7xl lg:px-8">
                    <div class="mx-auto max-w-3xl text-center">
                        <div class="flex items-center">
                            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-6xl">Luna and bamboo</h2>
                            <Switch class="ms-8" :switchObj="lbSwitch" @toggle="toggleContent('lbSwitch')"></Switch>
                        </div>
                        <div v-if="!lbSwitch.isCnContent">
                            <p class="mt-4 text-gray-900 dark:text-gray-300">On the 21th of December 2022, Luna's dear friend Bamboo came to stay over, adding a delightful touch to their time together. Bamboo, a lively Border Collie, found pure joy in chasing balls, leaping up to catch them effortlessly. The two dogs reveled in each other's company, and their adventures often took them to the nearby Malbrough Park, where Luna's brother and dad would accompany them. Luna, being a bit less energetic, relied on their outings to tire her out.</p>
                        </div>
                        <div v-else>
                            <p class="mt-4 text-gray-900 dark:text-gray-300">2022年12月21日，寂静月夜，Luna的挚友Bamboo来访，共度欢乐光阴。Bamboo是边境牧羊犬，追逐球的乐趣无穷，凌空跃起，口中固执地接住。两犬同欢，纵情公园，驱走疲惫，Malbrough公园，日夜为伴。</p>
                        </div>
                    </div>
                    <div class="mt-16 space-y-16">
                        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                            <div class="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-1">
                                <div v-if="!lbSwitch.isCnContent">
                                    <p class="mt-2 text-gray-900 dark:text-gray-300">In the park, Bamboo's lightning speed was evident as he raced after the ball, effortlessly soaring through the air to secure it in his mouth. Luna, ever the faithful companion, trailed closely behind, eagerly pursuing Bamboo until her energy waned, and she sought respite in the comforting shade. Bamboo, too, would pant and catch his breath, his enthusiasm carrying him until they arrived home. Remarkably, Bamboo didn't share Luna's affinity for food, making him a unique character compared to his voracious friend.</p>
                                </div>
                                <div v-else>
                                    <p class="mt-2 text-gray-900 dark:text-gray-300">在公园里，Bamboo如闪电般奔驰，速度之快令人叹为观止，追逐着球，巧妙地扑入口中。Luna紧随其后，忠诚伴随，追逐Bamboo，直至力竭，于阴凉处安然躺卧。Bamboo亦同，喘息连连，直至归家，不舍疲倦。</p>
                                </div>
                            </div>
                            <div class="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-6 xl:col-start-5">
                                <div class="aspect-h-2 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                                    <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s11.jpeg" alt="" class="object-cover object-center">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                            <div class="mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 lg:col-start-8 xl:col-start-9">
                                <div v-if="!lbSwitch.isCnContent">
                                    <p class="mt-2 text-gray-900 dark:text-gray-300">Despite Luna's occasional annoyance, such as her habit of attempting to pilfer Bamboo's food, their camaraderie remained unwavering. Even in the backyard, their shared moments were filled with joy, with Bamboo darting after the ball while Luna delightedly pursued her swift companion. Their adventures left them both delightfully tired in no time, creating cherished memories for Luna and Bamboo alike.</p>
                                </div>
                                <div v-else>
                                    <p class="mt-2 text-gray-900 dark:text-gray-300">然而，Bamboo并非食物之徒，与Luna不同，味蕾无爱。纵然Luna时常有些讨厌，企图夺食Bamboo的盛宴，友谊却始终如一。即便在后院，乐趣满怀，Bamboo追逐球，Luna追逐Bamboo。片刻间，双双疲惫，共享欢乐。岁月如梭，回忆永存，成为Luna与Bamboo珍贵的记忆。</p>
                                </div>
                            </div>
                            <div class="flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 lg:col-start-1">
                                <div class="aspect-h-2 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                                    <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s12.jpeg" alt="" class="object-cover object-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider class="mt-4"></Divider>
            <!--cookies-->
            <div class="bg-white dark:bg-black">
                <div class="isolate">
                    <!-- Hero section -->
                    <div class="relative isolate -z-10">
                        <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
                            <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"></div>
                        </div>
                        <div class="overflow-hidden">
                            <div class="mx-auto max-w-7xl px-6 pb-32 pt-4 lg:px-8">
                                <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                    <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                        <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-6xl">Luna and Cookie </h1>
                                        <!--通过自定义的toggle事件，触发switch组件中的toggleContent方法（只是点击），这里在本组件重新传入参数并完善具体的点击逻辑-->

                                        <Switch class="mt-2" :switchObj="lcSwitch" @toggle="toggleContent('lcSwitch')"></Switch>

                                        <div>
                                            <div v-if="!lcSwitch.isCnContent" class="space-y-6">
                                                <p class="relative mt-3 text-base  text-gray-900 dark:text-gray-300 sm:max-w-md lg:max-w-none">On the 16th of April, Cookie the goldendoodle came to Luna's house, ready for a few nights of joy. Their adventure led them to Pawfield Doggy Park in Caulfield, where playful spirits abound. Among the furry companions, Dex, a chocolate Labrador, and Beau, a classic Labrador, joined in the frolic. Luna believed she stood as the mightiest beside Cookie, but her conviction wavered. </p>
                                                <p class="dark:text-gray-300">Out of the blue, a Boxer leapt upon Luna, startling her with a yip. Yet, within a fleeting second, her fear subsided, as if erased from memory. Unfazed, she resumed play, chasing Cookie with renewed vigor. The Boxer joined their pursuit, creating a trio of camaraderie. </p>
                                                <p class="dark:text-gray-300">Soon thereafter, a Beagle arrived, belonging to a family of herbivores, mirroring their dietary choices. Unlike his plumper Beagle counterparts, this slender fellow owed his physique to a wholesome diet. With exuberance, the Beagle partook in their merriment, a perfect addition to the joyous quartet. They scampered, noses tracing scents, engaged in a lively game of tag. Such harmony unfolded, a spectacle of unity, as the four friends reveled, their playful spirits unyielding.</p>
                                            </div>

                                            <div v-else class="space-y-6">
                                                <p class="relative mt-3 text-base  text-gray-900 dark:text-gray-300 sm:max-w-md lg:max-w-none"> 在4月16日，Cookie这只金毛贵宾犬来到Luna的家中，为了几个夜晚的欢愉而准备着。他们的冒险从Caulfield的Pawfield公园开始，那里洋溢着欢乐的精灵。在那些毛茸茸的伙伴中，巧克力色拉布拉多犬Dex和经典拉布拉多犬Beau一同加入了嬉戏。Luna相信她是除了Cookie之外最强大的狗，但她的确言之过早。 </p>
                                                <p class="dark:text-gray-300">突然间，一只boxer突然扑向Luna，让她惊恐地尖叫了一声。然而，在一瞬间，她的恐惧消失了，仿佛从记忆中抹去一般。毫不畏惧，她恢复了自信，满怀热情地追逐着Cookie。Boxer加入了他们的追逐，形成了一个三人的友谊小组。</p>
                                                <p class="dark:text-gray-300">之后不久，一只小猎犬加入了他们的行列。它所属的家庭都是素食者，因此这只狗也是素食主义者。与其他比格犬相比，它身材纤细，得益于健康的饮食。小猎犬兴高采烈地参与他们的欢乐，成为这个快乐四重奏的完美补充。他们追逐嬉戏，鼻尖追寻香气，犹如生命之舞的一幕。和谐绽放，团结如画，四位挚友荡漾着无尽的欢乐气息。</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                        <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                            <div class="relative">
                                                <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s04.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                        </div>
                                        <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                            <div class="relative">
                                                <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s07.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                            <div class="relative">
                                                <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s05.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                        </div>
                                        <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                            <div class="relative">
                                                <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s06.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                            <div class="relative">
                                                <img src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/story/s08.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Button ref="button" class="" :buttonText="'Back to Top'" :hasIcon ="true"  @click="scrollToTop"></Button>
            </div>

        </div>
    </div>

</template>

<script>
import Switch from "../../components/switch/index.vue";
import Divider from "../../components/divider/index.vue";
import Button from "../../components/button/index.vue";

export default {
    name:'Story',
    components: {
        Switch,
        Divider,
        Button
    },
    data() {
        return {
            bcSwitch: {
                isCnContent: false,
                isEnContent: false,
            },
            lcSwitch: {
                isCnContent: false,
                isEnContent: false,
            },
            lbSwitch: {
                isCnContent: false,
                isEnContent: false,
            },

        }
    },
    methods:{
        toggleContent(switchName) {
            this[switchName].isCnContent = !this[switchName].isCnContent;
            this[switchName].isEnContent = !this[switchName].isEnContent;
        },
        // scrollToTop() {
        //     console.log('click me')
        //     window.scrollTo({
        //         top: 0,
        //         behavior: 'smooth'
        //     });
        // },
        scrollToTop(){
            console.log('123')
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
}
</script>

