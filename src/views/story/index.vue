<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

            <div class="ps-7">
                <h2 class="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 caption-top">Buttons Cottage</h2>
            </div>
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">


                <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                    <img src="/assets/images/story/s02.jpeg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img src="/assets/images/story/s01.jpeg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
                    </div>
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img src="/assets/images/story/s01.jpeg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
                    </div>
                </div>
                <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img src="/assets/images/story/s02.jpeg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
                </div>

                <!-- switch button  -->
                <div class="flex items-center mt-5">
                    <button type="button" :class="{'bg-indigo-600': isEnabled, 'bg-gray-200': !isEnabled}"  class="relative inline-flex h-4 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="annual-billing-label" @click="toggleContent">
                        <span :class="{'translate-x-5': isCnContent, 'translate-x-0': !isCnContent}" aria-hidden="true" class="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                    </button>
                    <span class="ml-3 text-sm" id="">
                        <span class="font-medium text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                            </svg>
                        </span>
                    </span>
                </div>

            </div>

            <div class="mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:grid lg:max-w-7xl lg:px-8">
                <div class="py-2 lg:col-span-2 lg:col-start-1 lg:pr-8">
                    <div>
                        <!-- v-if 非中文 else 中文 -->
                        <div v-if="!isCnContent" id="buttonsCottageEn" class="space-y-6">
                            <p class="text-base text-gray-900">On the 27th and 28th of January 2023, Luna and her family traveled all the way back to her home, the place where she was born. These were the last days of their holiday. For both nights, Luna stayed at a cozy place called Buttons Cottage in Nietta, Tasmania, which was very close to Burnie and Devonport. </p>
                                <p>It was a huge farmland with many cows. Luna loved the place, and the cows all thought she was a calf (baby cow) because she was a Foxhound. The cottage was cozy, with a big yard that surrounded the entire house. Luna truly enjoyed the large yard and had a wonderful time playing with her family, attempting to play with her brother's soccer ball and down ball. The place was just perfect. Every morning, Luna would wake up early and run around the house, seeking attention. She particularly enjoyed watching the cows and watching TV with her brother.</p>
                        </div>
                        <div v-else id="buttonsCottageCn" class="space-y-6">
                            <p class="text-base text-gray-900">2023年1月27日和28日，Luna与亲人踏上回归之路，回到了她诞生的乡野。那是假期尘封的终章，在塔斯马尼亚尼埃塔的Buttons Cottage小屋，伯尼和德文港近在咫尺。</p>
                            <p>在那片牧场的田野里，牛群簇拥而居。Luna深爱此地，牛儿们却将她当作小牛犊，实则她是猎狐的神采。小屋舒适怡人，周围环抱着宽阔庭院。Luna倾心于那块天地，在那里与亲人欢娱，与哥哥同行踢球。环境如此美好，实在是难以言喻。每个黎明，Luna早早醒来，围绕房舍奔驰，寻求注目。她尤其钟爱观察那些牛群，与哥哥一同欣赏电视画面。</p>
                        </div>
                    </div>
                </div>
            </div>

            <!--cookies-->
            <div class="bg-white">
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
                                        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Luna and Cookie </h1>

                                        <div class="flex items-center mt-5">
                                            <button type="button" :class="{'bg-indigo-600': isEnabled, 'bg-gray-200': !isEnabled}"  class="relative inline-flex h-4 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="annual-billing-label" @click="toggleContent">
                                                <span :class="{'translate-x-5': isCnContent, 'translate-x-0': !isCnContent}" aria-hidden="true" class="pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                                            </button>
                                            <span class="ml-3 text-sm" id="">
                                                <span class="font-medium text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>

                                        <div v-if="!isCnContent" class="space-y-6">
                                            <p class="relative mt-6 text-base  text-gray-900 sm:max-w-md lg:max-w-none">On the 15th of April, Cookie the Labradoodle came to Luna's house, ready for a few nights of joy. Their adventure led them to Pawfield Doggy Park in Caulfield, where playful spirits abound. Among the furry companions, Dex, a chocolate Labrador, and Beau, a classic Labrador, joined in the frolic. Luna believed she stood as the mightiest beside Cookie, but her conviction wavered. </p>
                                            <p>Out of the blue, a Boxer leapt upon Luna, startling her with a yip. Yet, within a fleeting second, her fear subsided, as if erased from memory. Unfazed, she resumed play, chasing Cookie with renewed vigor. The Boxer joined their pursuit, creating a trio of camaraderie. </p>
                                            <p>Soon thereafter, a Beagle arrived, belonging to a family of herbivores, mirroring their dietary choices. Unlike his plumper Beagle counterparts, this slender fellow owed his physique to a wholesome diet. With exuberance, the Beagle partook in their merriment, a perfect addition to the joyous quartet. They scampered, noses tracing scents, engaged in a lively game of tag. Such harmony unfolded, a spectacle of unity, as the four friends reveled, their playful spirits unyielding.</p>
                                        </div>

                                        <div v-else class="space-y-6">
                                            <p class="relative mt-6 text-base  text-gray-900 sm:max-w-md lg:max-w-none"> 在4月15日，Cookie这只拉布拉多迷你贵宾犬来到Luna的家中，为了几个夜晚的欢愉而准备着。他们的冒险从Caulfield的Pawfield公园开始，那里洋溢着欢乐的精灵。在那些毛茸茸的伙伴中，巧克力色拉布拉多犬Dex和经典拉布拉多犬Beau一同加入了嬉戏。Luna相信她是除了Cookie之外最强大的狗，但她的确言之过早。 </p>
                                            <p>突然间，一只boxer突然扑向Luna，让她惊恐地尖叫了一声。然而，在一瞬间，她的恐惧消失了，仿佛从记忆中抹去一般。毫不畏惧，她恢复了自信，满怀热情地追逐着Cookie。Boxer加入了他们的追逐，形成了一个三人的友谊小组。</p>
                                            <p>之后不久，一只小猎犬加入了他们的行列。它所属的家庭都是素食者，因此这只狗也是素食主义者。与其他比格犬相比，它身材纤细，得益于健康的饮食。小猎犬兴高采烈地参与他们的欢乐，成为这个快乐四重奏的完美补充。他们追逐嬉戏，鼻尖追寻香气，犹如生命之舞的一幕。和谐绽放，团结如画，四位挚友荡漾着无尽的欢乐气息。</p>
                                        </div>



                                    </div>
                                    <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                        <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                            <div class="relative">
                                                <img src="/assets/images/story/s03.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                        </div>
                                        <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                            <div class="relative">
                                                <img src="/assets/images/story/s04.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                            <div class="relative">
                                                <img src="/assets/images/story/s05.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                        </div>
                                        <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                            <div class="relative">
                                                <img src="/assets/images/story/s06.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                                                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                                            </div>
                                            <div class="relative">
                                                <img src="/assets/images/story/s07.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
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




        </div>
    </div>




</template>

<script>

export default {
    name:'Story',
    data() {
        return {
            isCnContent: false, // 默认显示英文内容
            isEnabled: false, // 默认未启用
        }
    },
    methods:{
        toggleContent() {
            this.isCnContent = !this.isCnContent; // 切换显示英文或中文内容
            this.isEnabled = !this.isEnabled; // 切换启用/未启用状态
        }
    }
}
</script>

