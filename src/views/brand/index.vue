<template>

  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-6">
   <!--Superior Meat-->
    <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
      <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
        <div>
          <h2 class="text-4xl font-bold tracking-tight text-gray-900">Superior Meat</h2>
          <p class="mt-4 text-gray-500">
            Superior Meat is Melbourne’s trusted partner for premium Australian and Japanese Wagyu, bridging the gap between world-class producers and discerning culinary professionals. Specialising in ethically sourced, marbling-rich Wagyu, we serve diverse clients—from multi-hats restaurants to home gourmets—through tailored supply solutions. Regulated by PrimeSafe and HACCP certified by DQS, we ensure traceability, consistency, and unmatched quality. We specialise in premium Wagyu solutions for:
          </p>
        </div>
        <img src="/assets/images/hero04.jpg" alt="" class="aspect-[3/2] w-full rounded-lg bg-gray-100 object-cover" />
      </div>
      <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <div v-for="incentive in incentives" :key="incentive.name" class="sm:flex lg:block">
          <div class="sm:shrink-0">
            <img class="size-4" :src="incentive.imageSrc" alt="" />
          </div>
          <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
            <h3 class="text-sm font-medium text-gray-900">{{ incentive.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
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
          <h2 id="details-heading" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">尊品</h2>
          <p class="mt-3 max-w-3xl text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <img src="/assets/images/yakibb.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="aspect-[3/2] w-full rounded-lg object-cover" />
            <p class="mt-8 text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img src="/assets/images/yakicer.jpg" alt="Front zipper pouch with included key ring." class="aspect-[3/2] w-full rounded-lg object-cover" />
            <p class="mt-8 text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h2 class="font-medium text-gray-500">上品肉源</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Prime Meat Origin</p>
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
            <img src="/assets/images/banner/banner05.png" alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug." class="aspect-square w-full rounded-lg bg-gray-100 object-cover" />
          </div>
        </div>
      </div>
    </div>

    <divider class="mt-6"></divider>
    <!--四季和牛-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">NIKUSHIKI</h2>
        <p class="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="mt-16 space-y-16">
        <div v-for="(feature, featureIdx) in primeMeatOrigin" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
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
      <div class="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        <div class="absolute inset-0 overflow-hidden">
          <img src="/assets/images/banner/banner05.png" alt="" class="size-full object-cover" />
        </div>
        <div aria-hidden="true" class="absolute inset-0 bg-gray-900/50" />
        <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">USHIMATSU</h2>
          <p class="mt-3 text-xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet</p>
          <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Read our story</a>
        </div>
      </div>
    </div>

    <divider class="mt-6"></divider>

  </div>

</template>

<script  setup>
import divider from "/src/components/divider/index.vue";

const incentives = [
  {
    name: 'Feature1',
    imageSrc: '/assets/images/Wagyu Platter.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: 'Feature2',
    imageSrc: '/assets/images/Wagyu Platter.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: 'Feature3',
    imageSrc: '/assets/images/Wagyu Platter.jpg',
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

const primeMeatOrigin = [
  {
    name: 'nikushiki glen',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageSrc: '/assets/images/glenStore.png',
    imageAlt: '123',
  },
  {
    name: 'nikushiki cbd',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageSrc: '/assets/images/cbdStore.png',
    imageAlt: '456',
  },
]


</script>

<style>



</style>