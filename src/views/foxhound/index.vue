<template>
    <div>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row md:gap-10">
                <div class="lg:basis-1/2">
                    <div class="flex items-center">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">Foxhound breed</h2> <Switch class="ms-8" :switchObj="Switch1" @toggle="toggleContent('Switch1')"></Switch>
                    </div>

                    <div v-if="!Switch1.isCnContent" >
                        <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Foxhounds were developed for hunting foxes and for hundreds of years, have been bred for use in packs. In Australia the Foxhound probably accompanied the captive foxes brought out by wealthier British settlers in the 1800s so they could ride to the hunt here, in memory of the lifestyle back "Home". Hunt packs still operate in most Australian states except WA and NT.</p>
                        <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">The Foxhound is just a taller version of the Beagle, smooth-coated, with drop ears and  to have a keen sense of smell, and to be even faster in the chase. A large, handsome hound, its front legs are long and very straight-boned. The head is long with a slightly domed, large skull. The ears are broad and pendant, framing the face. The eyes are large and wide-set - either brown or hazel, with a sweet, imploring expression. The ears are wide, flat to the head. The tail is set moderately high with a slight upward curve, but is not turned forward over the back. </p>
                    </div>
                    <div v-else>
                        <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">猎狐犬是为了追捕狐狸而繁育的，数百年来一直被用于成群结队狩猎。在澳大利亚，猎狐犬可能是在19世纪由富有的英国移民带来的被囚禁的狐狸的伴侣，以便他们可以在这里骑马狩猎，怀念“家乡”的生活方式。狩猎队在澳大利亚的大多数州仍在运营，除了西澳大利亚和北领地。</p>
                        <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">猎狐犬是比格犬的高个子版本，毛发光滑，下垂的耳朵，具有敏锐的嗅觉，追捕速度更快。它是一种高大而英俊的猎犬，前腿长而非常直。头部长，略呈圆顶形，头骨大。耳朵宽而下垂，勾勒出脸部的轮廓。眼睛大而宽间距，可以是棕色或褐色，带着甜美而乞求的表情。耳朵宽阔，贴平在头部上。尾巴位置适中，略微上翘，但不会向前翻卷在背上。</p>
                    </div>

                </div>
                <div class="lg:basis-1/2 mt-4">
                    <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                        <img src="https://d1nuow4z6t9ani.cloudfront.net/images/foxhound/f01.jpeg" alt="" class="aspect-[7/5] w-[28rem] sm:w-[33rem] md:w-[40rem] max-w-none rounded-2xl bg-gray-50 object-cover">
                    </div>
                </div>
            </div>
        </div>
        <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
                <img alt="" class="absolute inset-0 h-full w-full object-cover" style="color:transparent" src="https://d1nuow4z6t9ani.cloudfront.net/images/foxhound/f08.jpeg">
            </div>
            <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2">
                <img alt="" class="absolute inset-0 h-full w-full object-cover" style="color:transparent" src="https://d1nuow4z6t9ani.cloudfront.net/images/foxhound/f04.jpeg">
            </div>
            <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
                <img alt="" class="absolute inset-0 h-full w-full object-cover" style="color:transparent" src="https://d1nuow4z6t9ani.cloudfront.net/images/foxhound/f05.jpeg">
            </div>
            <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2">
                <img alt="" class="absolute inset-0 h-full w-full object-cover" style="color:transparent" src="https://d1nuow4z6t9ani.cloudfront.net/images/foxhound/f06.jpeg">
            </div>
            <div class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2">
                <img alt="" class="absolute inset-0 h-full w-full object-cover" style="color:transparent" src="https://d1nuow4z6t9ani.cloudfront.net/images/foxhound/f07.jpeg">
            </div>

        </div>
    </div>



</template>

<script>
import Switch from "../../components/switch/index.vue";

export default {
  name:'Foxhound',
    components:{
      Switch
    },
  data() {
    return {
        Switch1 : {
            isCnContent: false,
            isEnContent: false,
        }
    }

  },
    methods:{
        toggleContent(switchName) {
            this[switchName].isCnContent = !this[switchName].isCnContent;
            this[switchName].isEnContent = !this[switchName].isEnContent;
        },
    }
}
</script>
