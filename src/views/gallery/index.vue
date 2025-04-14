

<template>
  <div class="bg-white dark:bg-black">
    <div v-for="galleryItem in galleryZoomIn" :key="galleryItem.subtitle" class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          {{ galleryItem.subtitle }}
        </h2>
      </div>
      <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="(image, index) in galleryItem.images" :key="index" href="#" class="group">
          <div class="aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative transition-transform duration-300 transform group-hover:scale-110">
            <img :src="image.path" :alt="image.alt" class="h-full w-full object-cover object-center">
            <span>
              <i class="bi bi-chat-heart absolute bottom-4 right-8 text-gray-100 hover:text-pink-400 text-2xl"></i>
            </span>
          </div>
        </a>
      </div>
    </div>

    <div v-for="galleryItem in galleryTilt" :key="galleryItem.subtitle" class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          {{ galleryItem.subtitle }}
        </h2>
      </div>
      <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="(image, index) in galleryItem.images" :key="index" href="#" class="group">
          <div class="aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative transition duration-300 transform group-hover:scale-110 group-hover:rotate-2">
            <img :src="image.path" :alt="image.alt" class="h-full w-full object-cover object-center ">
            <span>
              <i class="bi bi-chat-heart absolute bottom-4 right-8 text-gray-100 hover:text-pink-400 text-2xl"></i>
            </span>
          </div>
        </a>
      </div>
    </div>

    <div v-for="galleryItem in galleryGrayscale" :key="galleryItem.subtitle" class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          {{ galleryItem.subtitle }}
        </h2>
      </div>
      <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="(image, index) in galleryItem.images" :key="index" href="#" class="group">
          <div class="aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative ">
            <img :src="image.path" :alt="image.alt" class="h-full w-full object-cover object-center transition duration-300 filter grayscale group-hover:grayscale-0">
            <span>
              <i class="bi bi-chat-heart absolute bottom-4 right-8 text-gray-100 hover:text-pink-400 text-2xl"></i>
            </span>
          </div>
        </a>
      </div>
    </div>

    <div v-for="galleryItem in galleryBlurText" :key="galleryItem.subtitle" class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          {{ galleryItem.subtitle }}
        </h2>
      </div>
      <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="(image, index) in galleryItem.images" :key="index" href="#" class="group">
          <div class="aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 relative group ">
            <img :src="image.path" :alt="image.alt" class="h-full w-full object-cover object-center transition duration-300 group-hover:blur-sm ">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 text-white font-semibold text-lg">
              View More
            </div>
            <span>
              <i class="bi bi-chat-heart absolute bottom-4 right-8 text-gray-100 hover:text-pink-400 text-2xl"></i>
            </span>
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const galleryZoomIn = ref([
  {
    id: 2,
    subtitle: 'Sleeping - Zoom in',
    images: [
      { path: '/assets/images/gallery/artsleep01.jpeg', alt: '' },
      { path: '/assets/images/gallery/artsleep02.jpeg', alt: '' },
      { path: '/assets/images/gallery/artsleep03.jpeg', alt: '' },
      { path: '/assets/images/gallery/artsleep04.jpeg', alt: '' }
    ]
  },
])
const galleryTilt = ref([

  {
    id: 3,
    subtitle: 'Trouble - Tilt',
    images: [
      { path: '/assets/images/gallery/arttrouble01.JPG', alt: '' },
      { path: '/assets/images/gallery/arttrouble02.JPG', alt: '' },
      { path: '/assets/images/gallery/arttrouble03.jpg', alt: '' },
      { path: '/assets/images/gallery/arttrouble04.jpg', alt: '' }
    ]
  },
])
const galleryGrayscale = ref([

  {
    id: 1,
    subtitle: 'Hunting - Grayscale',
    images: [
      { path: '/assets/images/gallery/arthunt01.jpeg', alt: '' },
      { path: '/assets/images/gallery/arthunt02.jpeg', alt: '' },
      { path: '/assets/images/gallery/arthunt03.jpeg', alt: '' },
      { path: '/assets/images/gallery/arthunt04.jpeg', alt: '' }
    ]
  },
])
const galleryBlurText = ref([

  {
    id: 4,
    subtitle: 'Fashion - Blur Text',
    images: [
      { path: '/assets/images/gallery/fashion01.jpg', alt: '' },
      { path: '/assets/images/gallery/fashion02.jpg', alt: '' },
      { path: '/assets/images/gallery/fashion03.jpg', alt: '' },
      { path: '/assets/images/gallery/fashion04.jpg', alt: '' }
    ]
  }
])
</script>
