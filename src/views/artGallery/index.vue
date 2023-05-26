<template>

  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Photo Albums</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-2 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="/assets/images/artgallery/art01.jpeg" alt="On the deck" class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Not Happy</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">On the deck</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="/assets/images/artgallery/art02.jpeg" alt="In backyard" class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Say Cheese</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">In backyard</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="/assets/images/artgallery/art03.jpeg" alt="In backyard (side angle)" class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Sleeping</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">On the couch</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="/assets/images/artgallery/art04.jpeg" alt="In the house" class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Smile</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">Annie baby</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="/assets/images/artgallery/art07.jpeg" alt="Behind the door" class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Tired</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">Take a nap</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="/assets/images/artgallery/art06.jpeg" alt="Lavender Field" class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Super Dog</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">On bed</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="/assets/images/artgallery/art05.jpeg" alt="In Lavender Field" class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Pudding</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">Memory</p>
        </a>
        <a href="#" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src="/assets/images/artgallery/art08.jpeg" alt="Sleeping" class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Sleepy</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">In the car sleeping</p>
        </a>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name:'ArtGallery',
  data() {
    return {
    }
  }
}
</script>

