

<template>
  <div class="bg-white dark:bg-black">

    <!-- Yakiniki -->
    <div
        v-for="galleryItem in yakiniku"
        :key="galleryItem.subtitle"
        class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
            class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
        >
          {{ galleryItem.subtitle }}
        </h2>
      </div>

      <!-- 图片卡片网格 -->
      <div
          class="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
            v-for="(image, index) in galleryItem.images"
            :key="index"
            class="group bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- 图片部分 -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
                :src="image.path"
                :alt="image.alt"
                class="h-full w-full object-cover object-center transition duration-500 group-hover:blur-sm"
            />

            <!-- 遮罩 + 按钮 -->
            <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50 text-white font-semibold text-lg"
            >
              <button
                  @click="openYakinikuModal(image)"
                  class="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
              >
                View More
              </button>
            </div>

            <!-- 点赞图标 -->
            <i
                class="bi bi-chat-heart absolute bottom-4 right-6 text-gray-100 hover:text-pink-400 text-2xl"
            ></i>
          </div>

          <!-- ✅ 下方信息区 -->
          <div
              class="bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-5 text-center transition duration-500 group-hover:from-pink-50 group-hover:to-pink-100"
          >
            <h3
                class="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-all duration-500"
            >
              {{ image.title }}
            </h3>
                        <p
                            class="text-sm text-gray-500 opacity-90 transition duration-500 group-hover:text-gray-700"
                        >
                          {{ image.description }}
                        </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Shabu -->
    <div
        v-for="galleryItem in shabu"
        :key="galleryItem.subtitle"
        class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
            class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
        >
          {{ galleryItem.subtitle }}
        </h2>
      </div>

      <!-- 图片卡片网格 -->
      <div
          class="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
            v-for="(image, index) in galleryItem.images"
            :key="index"
            class="group bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- 图片部分 -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
                :src="image.path"
                :alt="image.alt"
                class="h-full w-full object-cover object-center transition duration-500 group-hover:blur-sm"
            />

            <!-- 遮罩 + 按钮 -->
            <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50 text-white font-semibold text-lg"
            >
              <button
                  @click="openYakinikuModal(image)"
                  class="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
              >
                View More
              </button>
            </div>

            <!-- 点赞图标 -->
            <i
                class="bi bi-chat-heart absolute bottom-4 right-6 text-gray-100 hover:text-pink-400 text-2xl"
            ></i>
          </div>

          <!-- ✅ 下方信息区 -->
          <div
              class="bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-5 text-center transition duration-500 group-hover:from-pink-50 group-hover:to-pink-100"
          >
            <h3
                class="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-all duration-500"
            >
              {{ image.title }}
            </h3>
            <!--            <p-->
            <!--                class="text-sm text-gray-500 opacity-90 transition duration-500 group-hover:text-gray-700"-->
            <!--            >-->
            <!--              {{ image.description }}-->
            <!--            </p>-->
          </div>
        </div>
      </div>
    </div>

    <!-- steak -->
    <div
        v-for="galleryItem in steak"
        :key="galleryItem.subtitle"
        class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
            class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
        >
          {{ galleryItem.subtitle }}
        </h2>
      </div>

      <!-- 图片卡片网格 -->
      <div
          class="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
            v-for="(image, index) in galleryItem.images"
            :key="index"
            class="group bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- 图片部分 -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
                :src="image.path"
                :alt="image.alt"
                class="h-full w-full object-cover object-center transition duration-500 group-hover:blur-sm"
            />

            <!-- 遮罩 + 按钮 -->
            <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50 text-white font-semibold text-lg"
            >
              <button
                  @click="openYakinikuModal(image)"
                  class="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
              >
                View More
              </button>
            </div>

            <!-- 点赞图标 -->
            <i
                class="bi bi-chat-heart absolute bottom-4 right-6 text-gray-100 hover:text-pink-400 text-2xl"
            ></i>
          </div>

          <!-- ✅ 下方信息区 -->
          <div
              class="bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-5 text-center transition duration-500 group-hover:from-pink-50 group-hover:to-pink-100"
          >
            <h3
                class="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-all duration-500"
            >
              {{ image.title }}
            </h3>
            <!--            <p-->
            <!--                class="text-sm text-gray-500 opacity-90 transition duration-500 group-hover:text-gray-700"-->
            <!--            >-->
            <!--              {{ image.description }}-->
            <!--            </p>-->
          </div>
        </div>
      </div>
    </div>

    <!-- Platter -->
    <div
        v-for="galleryItem in platters"
        :key="galleryItem.subtitle"
        class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
    >
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2
            class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
        >
          {{ galleryItem.subtitle }}
        </h2>
      </div>

      <!-- 图片卡片网格 -->
      <div
          class="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
            v-for="(image, index) in galleryItem.images"
            :key="index"
            class="group bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- 图片部分 -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
                :src="image.path"
                :alt="image.alt"
                class="h-full w-full object-cover object-center transition duration-500 group-hover:blur-sm"
            />

            <!-- 遮罩 + 按钮 -->
            <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black bg-opacity-50 text-white font-semibold text-lg"
            >
              <button
                  @click="openPlatterModal(image)"
                  class="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
              >
                View More
              </button>
            </div>

            <!-- 点赞图标 -->
            <i
                class="bi bi-chat-heart absolute bottom-4 right-6 text-gray-100 hover:text-pink-400 text-2xl"
            ></i>
          </div>

          <!-- ✅ 下方信息区 -->
          <div
              class="bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-5 text-center transition duration-500 group-hover:from-pink-50 group-hover:to-pink-100"
          >
            <h3
                class="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-600 transition-all duration-500"
            >
              {{ image.title }}
            </h3>
<!--            <p-->
<!--                class="text-sm text-gray-500 opacity-90 transition duration-500 group-hover:text-gray-700"-->
<!--            >-->
<!--              {{ image.description }}-->
<!--            </p>-->
          </div>
        </div>
      </div>
    </div>

    <!-- platter弹出窗口 -->
    <transition name="fade">
      <div v-if="isPlatterModalOpen" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 p-6 relative">
          <!-- 关闭按钮 -->
          <button
              class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              @click="closePlatterModal"
          >
            &times;
          </button>

          <!-- 动态标题 -->
          <h2 class="text-3xl font-bold mb-4 text-center text-pink-600">
            {{ selectedPlatterImage?.title || 'Wagyu Detail' }}
          </h2>

          <!-- 弹窗内部内容（可通过 v-for 动态渲染） -->
          <div class="space-y-4 text-gray-700">
            <p class="text-lg">{{ selectedPlatterImage?.description }}</p>

            <!-- 如果该图片有额外的内容数组 -->
            <div v-if="selectedPlatterImage?.details && selectedPlatterImage.details.length" class="grid grid-cols-2 gap-4">
              <div
                  v-for="(detail, i) in selectedPlatterImage.details"
                  :key="i"
                  class="bg-gray-100 p-4 rounded-lg shadow"
              >
                <h3 class="font-bold text-pink-600 mb-2">{{ detail.subtitle }}</h3>
                <p class="text-sm">{{ detail.text }}</p>
              </div>
            </div>

            <!-- 图片展示 -->
            <img
                v-if="selectedPlatterImage?.preview"
                :src="selectedPlatterImage.preview"
                class="rounded-lg mt-4 w-full object-cover"
            />
          </div>

        </div>
      </div>
    </transition>
    <!-- yakiniku弹出窗口 -->
    <transition name="fade">
      <div v-if="isYakinikuModalOpen" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div class="relative w-full max-w-7xl mx-4">
          <!-- 关闭按钮 -->
          <button
              class="absolute top-2 right-[85px] z-50 text-white bg-cyan-300 bg-opacity-30 rounded-full w-5 h-5 flex items-center justify-center hover:bg-black hover:bg-opacity-50 transition"
              @click="closeYakinikuModal"
          >
            &times;
          </button>

          <HtmlCompareSlider :width="selectedYakinikuImage?.sliderWidth || 1200" :height="selectedYakinikuImage?.sliderHeight || 600">
            <!-- before -->
            <template #before>
              <div class="w-full h-full flex flex-col items-center justify-center px-8 py-12 space-y-6 bg-white text-gray-900">
<!--                <h1 class="text-4xl font-extrabold text-pink-600">{{ selectedYakinikuImage?.title }} - Before</h1>-->
<!--                <p class="text-lg max-w-xl text-center">{{ selectedYakinikuImage?.description }}</p>-->
<!--                <div class="bg-gray-100 border border-gray-300 rounded-xl shadow p-6 space-y-2 w-full max-w-2xl">-->
<!--                  <h2 class="text-xl font-bold text-gray-700">Details</h2>-->
<!--                  <ul class="list-disc list-inside text-sm text-gray-700">-->
<!--                    <li v-for="(detail, i) in selectedYakinikuImage?.details" :key="i">{{ detail.subtitle }}: {{ detail.text }}</li>-->
<!--                  </ul>-->
<!--                </div>-->

                <h1 class="text-5xl font-extrabold text-pink-600">
                  ☀️ {{ selectedYakinikuImage?.titleBefore }}  Gold Cut
                </h1>
                <p class="text-lg max-w-xl leading-relaxed text-center">
                  {{ selectedYakinikuImage?.descriptionBefore }}
                </p>

                <div class="bg-gray-100 border border-gray-300 rounded-xl shadow p-6 space-y-3 max-w-2xl ">
                  <h2 class="text-xl font-bold text-gray-700">🥩 Product Details</h2>
                  <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li
                        v-for="(detail, i) in selectedYakinikuImage?.detailsBefore"
                        :key="'before-'+i"
                    >
                      {{ detail.subtitle }}: {{ detail.text }}
                    </li>
                  </ul>
                </div>

                <div class="mt-4 text-2xl font-bold text-red-600">
                  💰 Price: {{ selectedYakinikuImage?.priceBefore || '$189 / kg' }}
                </div>
              </div>
            </template>

            <!-- after -->
            <template #after>
              <div class="w-full h-full flex flex-col items-center justify-center px-8 py-12 space-y-6 bg-gray-900 text-gray-200">
<!--                <h1 class="text-4xl font-extrabold text-red-400">{{ selectedYakinikuImage?.title }} - After</h1>-->
<!--                <p class="text-lg max-w-xl text-center">{{ selectedYakinikuImage?.description }}</p>-->
<!--                <div class="bg-gray-800 rounded-xl shadow-lg p-6 space-y-2 w-full max-w-2xl">-->
<!--                  <h2 class="text-xl font-bold text-yellow-400">Highlights</h2>-->
<!--                  <ul class="list-disc list-inside text-sm text-gray-300">-->
<!--                    <li v-for="(detail, i) in selectedYakinikuImage?.details" :key="i">{{ detail.subtitle }}: {{ detail.text }}</li>-->
<!--                  </ul>-->
<!--                </div>-->
                <h1 class="text-5xl font-extrabold text-red-400">
                  🌙 {{ selectedYakinikuImage?.titleAfter }}  Platinum Cut
                </h1>
                <p class="text-lg max-w-xl leading-relaxed text-center">
                  {{ selectedYakinikuImage?.descriptionAfter }}
                </p>
                <div class="bg-gray-800 rounded-xl shadow-lg p-6 space-y-3 max-w-2xl ">
                  <h2 class="text-xl font-bold text-yellow-400">✨ Key Highlights</h2>
                  <ul class="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li
                        v-for="(detail, i) in selectedYakinikuImage?.detailsAfter"
                        :key="'after-'+i"
                    >
                      {{ detail.subtitle }}: {{ detail.text }}
                    </li>
                  </ul>
                </div>

                <div class="mt-4 text-2xl font-bold text-green-400">
                  💰 Price: {{ selectedYakinikuImage?.priceAfter || '$329 / kg' }}
                </div>
              </div>
            </template>
          </HtmlCompareSlider>

        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import HtmlCompareSlider from '/src/components/HtmlCompareSlider/index.vue'

onMounted(() => {
  //fetchImages()
})

// 图片与详情数据
const platters = ref([
  {
    id: 4,
    subtitle: 'Platter',
    images: [
      {
        path: '/assets/images/products/plaShabuGoldS.jpeg',
        alt: '',
        title: 'Shabu Gold Platter',
        description: 'This platter highlights rich marbling and perfect cuts for shabu shabu lovers.',
        preview: '/assets/images/products/plaShabuGoldS.jpeg',
        details: [
          { subtitle: 'Origin', text: 'Western Australia' },
          { subtitle: 'Cut Type', text: 'Thin sliced ribeye' },
        ]
      },
      {
        path: '/assets/images/products/plaShabuPlatinumS.jpg',
        alt: '',
        title: 'Shabu Platinum Platter',
        description: 'Premium Wagyu slices for a luxurious hotpot experience.',
        preview: '/assets/images/products/plaShabuPlatinumS.jpg',
        details: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Melt-in-mouth tenderness' },
        ]
      },
      {
        path: '/assets/images/products/plaYakiGoldS.jpeg',
        alt: '',
        title: 'Yakiniku Gold Platter',
        description: 'Ideal for grilling, rich in umami with a clean aftertaste.',
        preview: '/assets/images/products/plaYakiGoldS.jpeg',
        details: [
          { subtitle: 'Cooking', text: 'Yakiniku-style' },
          { subtitle: 'Serving', text: 'Fresh cut and chilled' },
        ]
      },
      {
        path: '/assets/images/products/plaYakiPlatinumS.jpg',
        alt: '',
        title: 'Yakiniku Platinum Platter',
        description: 'Top-grade wagyu with a buttery flavor and balanced fat ratio.',
        preview: '/assets/images/products/plaYakiPlatinumS.jpg',
        details: [
          { subtitle: 'Flavor', text: 'Buttery & delicate sweetness' },
          { subtitle: 'Recommended', text: 'Grill medium rare' },
        ]
      },
    ]
  }
])

const yakiniku = ref([
  {
    id: 4,
    subtitle: 'Yakiniku',
    images: [
      {
        path: '/assets/images/products/yakiCrS.jpg',
        title:'test1',
        titleBefore: 'Chuck Roll MB9+',
        descriptionBefore: 'Australian Wagyu MB9+ is admired for its balance of flavor, tenderness, and marbling Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.',
        detailsBefore: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Silky, melt-in-mouth' },
          { subtitle: 'Flavor', text: 'Umami-rich, delicate sweetness' },
          { subtitle: 'Processing', text: 'Hand-cut, chilled transport' },
        ],
        titleAfter: 'Chuck Roll A5',
        descriptionAfter: 'Known as the caviar of beef Wagyu A5 features an exquisite marbling that melts like butter. Raised in Japan under strict conditions, each cut offers a luxurious dining experience.',
        detailsAfter: [
          { subtitle: 'Marbling Score', text: 'A5+' },
          { subtitle: 'Texture', text: 'Tender yet firm' },
          { subtitle: 'Flavor', text: 'Rich, buttery finish' },
          { subtitle: 'Processing', text: 'Fresh cut, vacuum packed' },
        ],
        priceBefore: '$189 / kg',
        priceAfter: '$329 / kg',
      },
      {
        path: '/assets/images/products/yaReS.jpg',
        title:'test2',
        titleBefore: '1111111 MB9+',
        descriptionBefore: 'Australian Wagyu MB9+ is admired for its balance of flavor, tenderness, and marbling Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.',
        detailsBefore: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Silky, melt-in-mouth' },
          { subtitle: 'Flavor', text: 'Umami-rich, delicate sweetness' },
          { subtitle: 'Processing', text: 'Hand-cut, chilled transport' },
        ],
        titleAfter: '222222 A5',
        descriptionAfter: 'Known as the caviar of beef Wagyu A5 features an exquisite marbling that melts like butter. Raised in Japan under strict conditions, each cut offers a luxurious dining experience.',
        detailsAfter: [
          { subtitle: 'Marbling Score', text: 'A5+' },
          { subtitle: 'Texture', text: 'Tender yet firm' },
          { subtitle: 'Flavor', text: 'Rich, buttery finish' },
          { subtitle: 'Processing', text: 'Fresh cut, vacuum packed' },
        ],
        priceBefore: '$111 / kg',
        priceAfter: '$222 / kg',
      },
      {
        path: '/assets/images/products/yaSrS.jpg',
        title:'test3',
        titleBefore: '333333 MB9+',
        descriptionBefore: 'Australian Wagyu MB9+ is admired for its balance of flavor, tenderness, and marbling Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.',
        detailsBefore: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Silky, melt-in-mouth' },
          { subtitle: 'Flavor', text: 'Umami-rich, delicate sweetness' },
          { subtitle: 'Processing', text: 'Hand-cut, chilled transport' },
        ],
        titleAfter: '44444 A5',
        descriptionAfter: 'Known as the caviar of beef Wagyu A5 features an exquisite marbling that melts like butter. Raised in Japan under strict conditions, each cut offers a luxurious dining experience.',
        detailsAfter: [
          { subtitle: 'Marbling Score', text: 'A5+' },
          { subtitle: 'Texture', text: 'Tender yet firm' },
          { subtitle: 'Flavor', text: 'Rich, buttery finish' },
          { subtitle: 'Processing', text: 'Fresh cut, vacuum packed' },
        ],
        priceBefore: '$333 / kg',
        priceAfter: '$444/ kg',
      },
      {
        path: '/assets/images/products/yaTtS.jpg',
        title:'test4',
        titleBefore: '55555Chuck Roll MB9+',
        descriptionBefore: 'Australian Wagyu MB9+ is admired for its balance of flavor, tenderness, and marbling Perfect for grilling, yakiniku, or even hotpot, it’s a versatile choice for premium dining.',
        detailsBefore: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Silky, melt-in-mouth' },
          { subtitle: 'Flavor', text: 'Umami-rich, delicate sweetness' },
          { subtitle: 'Processing', text: 'Hand-cut, chilled transport' },
        ],
        titleAfter: '66666Chuck Roll A5',
        descriptionAfter: 'Known as the caviar of beef Wagyu A5 features an exquisite marbling that melts like butter. Raised in Japan under strict conditions, each cut offers a luxurious dining experience.',
        detailsAfter: [
          { subtitle: 'Marbling Score', text: 'A5+' },
          { subtitle: 'Texture', text: 'Tender yet firm' },
          { subtitle: 'Flavor', text: 'Rich, buttery finish' },
          { subtitle: 'Processing', text: 'Fresh cut, vacuum packed' },
        ],
        priceBefore: '$555/ kg',
        priceAfter: '$666 / kg',
      },
      // ...更多图片
    ],
  },
])

const shabu = ref([
  {
    id: 4,
    subtitle: 'Shabu Shabu',
    images: [
      {
        path: '/assets/images/products/shaCerS.jpg',
        alt: '',
        title: 'Shabu 1',
        description: 'Shabu 1',
        preview: '/assets/images/products/shaCerS.jpeg',
        details: [
          { subtitle: 'cooking', text: 'xxxxx1' },
          { subtitle: 'service', text: 'xxxx2' },
        ]
      },
      {
        path: '/assets/images/products/shaCtfS.jpeg',
        alt: '',
        title: 'Shabu 2',
        description: 'Premium Wagyu slices for a luxurious hotpot experience.',
        preview: '/assets/images/products/plaShabuPlatinumS.jpg',
        details: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Melt-in-mouth tenderness' },
        ]
      },
      {
        path: '/assets/images/products/shaKarubisS.jpg',
        alt: '',
        title: 'Shabu 3',
        description: 'Ideal for grilling, rich in umami with a clean aftertaste.',
        preview: '/assets/images/products/plaYakiGoldS.jpeg',
        details: [
          { subtitle: 'Cooking', text: 'Yakiniku-style' },
          { subtitle: 'Serving', text: 'Fresh cut and chilled' },
        ]
      },
      {
        path: '/assets/images/products/shaSirloinIS.jpeg',
        alt: '',
        title: 'Shabu 4',
        description: 'Top-grade wagyu with a buttery flavor and balanced fat ratio.',
        preview: '/assets/images/products/plaYakiPlatinumS.jpg',
        details: [
          { subtitle: 'Flavor', text: 'Buttery & delicate sweetness' },
          { subtitle: 'Recommended', text: 'Grill medium rare' },
        ]
      },
    ]
  }
])

const steak = ref([
  {
    id: 4,
    subtitle: 'Steak',
    images: [
      {
        path: '/assets/images/products/stCerS.jpg',
        alt: '',
        title: 'Chuck R',
        description: 'Chuck R',
        preview: '/assets/images/products/yakiCrs.jpg',
        details: [
          { subtitle: 'cooking', text: 'xxxxx1' },
          { subtitle: 'service', text: 'xxxx2' },
        ]
      },
      {
        path: '/assets/images/products/stCrS.jpg',
        alt: '',
        title: 'Re',
        description: 'Premium Wagyu slices for a luxurious hotpot experience.',
        preview: '/assets/images/products/plaShabuPlatinumS.jpg',
        details: [
          { subtitle: 'Marbling Score', text: 'MB9+' },
          { subtitle: 'Texture', text: 'Melt-in-mouth tenderness' },
        ]
      },
      {
        path: '/assets/images/products/stObS.jpg',
        alt: '',
        title: 'Tri Tip',
        description: 'Ideal for grilling, rich in umami with a clean aftertaste.',
        preview: '/assets/images/products/plaYakiGoldS.jpeg',
        details: [
          { subtitle: 'Cooking', text: 'Yakiniku-style' },
          { subtitle: 'Serving', text: 'Fresh cut and chilled' },
        ]
      },
      {
        path: '/assets/images/products/stReS.jpg',
        alt: '',
        title: 'Sr',
        description: 'Top-grade wagyu with a buttery flavor and balanced fat ratio.',
        preview: '/assets/images/products/plaYakiPlatinumS.jpg',
        details: [
          { subtitle: 'Flavor', text: 'Buttery & delicate sweetness' },
          { subtitle: 'Recommended', text: 'Grill medium rare' },
        ]
      },
    ]
  }
])


// Yakiniku 系列
const isYakinikuModalOpen = ref(false)
const selectedYakinikuImage = ref(null)

// Shabu 系列
const isShabuModalOpen = ref(false)
const selectedShabuImage = ref(null)

// Steak 系列
const isSteakModalOpen = ref(false)
const selectedSteakImage = ref(null)

// Platter 系列
const isPlatterModalOpen = ref(false)
const selectedPlatterImage = ref(null)

// 打开弹窗
const openPlatterModal = (image) => {
  selectedPlatterImage.value = image
  isPlatterModalOpen.value = true
}

const openYakinikuModal = (image) => {
  selectedYakinikuImage.value = image
  isYakinikuModalOpen.value = true
}

const openShabuModal = (image) => {
  selectedShabuImage.value = image
  isShabuModalOpen.value = true
}

const openSteakModal = (image) => {
  selectedSteakImage.value = image
  isSteakModalOpen.value = true
}

// 关闭弹窗
const closePlatterModal = () => {
  isPlatterModalOpen.value = false
  selectedPlatterImage.value = null
}

const closeYakinikuModal = () => {
  isYakinikuModalOpen.value = false
  selectedYakinikuImage.value = null
}

const closeShabuModal = () => {
  isShabuModalOpen.value = false
  selectedShabuImage.value = null
}

const closeSteakModal = () => {
  isSteakModalOpen.value = false
  selectedSteakImage.value = null
}


</script>
