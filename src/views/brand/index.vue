<template>

  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-6">
   <!--Superior Meat-->

    <!-- Superior Meat -->
    <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
      <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
        <div>
          <h2 class="text-4xl  uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">Superior Meat</h2>
          <p class="mt-4 text-gray-500 text-xl">
            Superior Meat is Melbourne’s trusted partner for premium Australian and Japanese Wagyu, bridging the gap between world-class producers and discerning culinary professionals. Specialising in ethically sourced, marbling-rich Wagyu, we serve diverse clients—from multi-hats restaurants to home gourmets—through tailored supply solutions. Regulated by PrimeSafe and HACCP certified by DQS, we ensure traceability, consistency, and unmatched quality. We specialise in premium Wagyu solutions for:
          </p>
        </div>

        <!-- 图片动效加强版 -->
        <div class="overflow-hidden rounded-2xl">
          <img
              src="/assets/images/brands/sm01.jpg"
              alt="Superior Meat"
              class="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover transform transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-3 hover:brightness-110 hover:shadow-2xl hover:shadow-black/40"
          />
        </div>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <div
            v-for="incentive in incentives"
            :key="incentive.name"
            class="group bg-white/40 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2"
        >
          <!-- 图片部分 -->
          <div class="flex items-center justify-center">
            <img
                class="w-full h-60 rounded-2xl object-cover transition-transform duration-700 ease-out
           group-hover:scale-110 group-hover:brightness-110"
                :src="incentive.imageSrc"
                alt=""
            />
          </div>

          <!-- 文字部分 -->
          <div class="mt-6 text-center">
            <h3
                class="text-lg font-semibold text-gray-900 transition-colors duration-500 group-hover:text-indigo-600"
            >
              {{ incentive.name }}
            </h3>
            <p
                class="mt-2 text-base text-gray-500 transition-all duration-500 group-hover:text-gray-700"
            >
              {{ incentive.description }}
            </p>
          </div>
        </div>
      </div>

    </div>



    <divider class="mt-6"></divider>


<!--尊品-->

    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <!-- Details section -->
      <section aria-labelledby="details-heading">
        <div class="flex flex-col items-center text-center">
          <h2 id="details-heading" class="text-4xl  uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">ZUN PIN</h2>
          <p class="mt-3 max-w-3xl text-xl text-gray-600">
            We have an exclusive partnership with Oriental Merchant, one of the world’s leading distributors of Asian food products and condiments.
            Through this collaboration, we developed a dedicated brand <span class=" text-2xl font-bold">ZUN PIN</span> exclusively designed for Oriental Merchant, with products distributed to Asian supermarkets across Australia.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div class="overflow-hidden rounded-2xl group cursor-pointer transition-transform duration-500 relative">
            <!-- 默认图片 -->
            <img
                src="/assets/images/products/triTip.jpg"
                alt="Primary image"
                class="aspect-[3/2] w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:opacity-0"
            />

            <!-- hover 图片 -->
            <img
                src="/assets/images/parts/BeefTriTip.png"
                alt="Hover image"
                class="absolute inset-0 w-full h-full rounded-2xl object-contain opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            />

            <p class="mt-8 text-base text-gray-500 relative z-10">
              Tri Tip
            </p>
          </div>


          <div class="overflow-hidden rounded-2xl group cursor-pointer transition-transform duration-500 relative">
            <!-- 默认图片 -->
            <img
                src="/assets/images/yakicer.jpg"
                alt="Primary image"
                class="aspect-[3/2] w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:opacity-0"
            />

            <!-- hover 图片 -->
            <img
                src="/assets/images/parts/BeefChuckEyeRoll.png"
                alt="Hover image"
                class="absolute inset-0 w-full h-full rounded-2xl object-contain opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            />

            <p class="mt-8 text-base text-gray-500 relative z-10">
              Chuck Eye Roll
            </p>
          </div>
        </div>
      </section>
    </div>


    <divider class="mt-6"></divider>
    <!--上品肉源-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div>
          <div class="border-b border-gray-200 pb-10">
            <h2 class="text-3xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 text-transparent bg-clip-text">上品肉源</h2>
            <p class="mt-2 text-4xl  uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">Prime Meat Origin</p>
          </div>

          <dl class="mt-10 space-y-10">
            <div v-for="feature in zunpin" :key="feature.name">
              <dt class="text-sm font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-3 text-sm text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>

        <div>
          <img src="/assets/images/banner/banner03.png" alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system." class="aspect-square w-full rounded-lg bg-gray-100 object-cover" />
          <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
            <img src="/assets/images/banner/banner05.png" alt="Detail of temperature setting button on kettle bass with digital degree readout." class="aspect-square w-full rounded-lg bg-gray-100 object-cover" />
            <img src="/assets/images/banner/banner06.png" alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug." class="aspect-square w-full rounded-lg bg-gray-100 object-cover" />
          </div>
        </div>
      </div>
    </div>


    <divider class="mt-6"></divider>
    <!--四季和牛-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-4xl  uppercase font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-gray-600 to-amber-400 inline-block text-transparent bg-clip-text">NIKU SHIKI</h2>
        <p class="mt-4 text-gray-500">Niku Shiki celebrates Japanese tradition with premium Wagyu Beef through our contemporary menu and take-home products. Our butcher section offers restaurant-quality Wagyu, condiments, and sauces for an authentic Yakiniku or Shabu Shabu experience at home.</p>
      </div>

      <div class="mt-16 space-y-16">
        <div v-for="(feature, featureIdx) in nikushiki" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4']">
            <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
          </div>
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8']">
            <img :src="feature.imageSrc" :alt="feature.imageAlt" class="aspect-[5/2] w-full rounded-lg bg-gray-100 object-cover" />
          </div>
        </div>
      </div>
    </div>

    <divider class="mt-6"></divider>
    <!--USHIMATSU-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <img src="/assets/images/logo/UshiLandscape.jpg" alt="" class="object-cover max-w-6xl mx-auto" />
    </div>

    <divider class=""></divider>

  </div>

</template>

<script  setup>
import divider from "/src/components/divider/index.vue";

const incentives = [
  {
    name: 'Wagyu Platter',
    imageSrc: '/assets/images/brands/Niku186.jpg',
    description: "Kagoshima Beef - Combination of Striploin, Outside Flat, Cube Roll, Chuck Eye Roll",
  },
  {
    name: 'Wagyu Sushi',
    imageSrc: '/assets/images/sm02.jpg',
    description: "Exquisite wagyu sushi, where tender marbled beef meets delicate craftsmanship.",
  },
  {
    name: 'Wagyu Dish',
    imageSrc: '/assets/images/sm03.jpg',
    description:
        "Ultimate Truffle Foie Gras and Wagyu with Garlic Fried Rice",
  },
]


const zunpin = [
  {
    name: 'name1',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  { name: 'name2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {
    name: 'name3',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  { name: 'name4', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
]



const nikushiki = [
  {
    name: ' NIKUSHIKI GLEN',
    description:
        'Located in The Glen Shopping Centre, our restaurant and butcher store invite you to enjoy expertly prepared Wagyu Beef and the finest Japanese hospitality in Melbourne.',
    imageSrc: '/assets/images/brands/Niku01.jpg',
    imageAlt: '123',
  },
  {
    name: 'NIKUSHIKI CBD',
    description:
        'Discover Melbourne Central’s destination for Wagyu excellence, where our restaurant and butcher boutique deliver meticulously prepared beef and refined Japanese service.',
    imageSrc: '/assets/images/cbdStore.png',
    imageAlt: '456',
  },
]


</script>

<style>

@keyframes glowMoveBW {
  0% { transform: translateX(0%); }
  50% { transform: translateX(50%); }
  100% { transform: translateX(100%); }
}
.group-hover\:animate-glowMoveBW {
  animation: glowMoveBW 3s linear infinite;
}

</style>