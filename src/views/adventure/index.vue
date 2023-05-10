<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 caption-top">The Story of Adventure </h2>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img src="./images/tas01.jpeg" alt="" class="object-cover object-center group-hover:opacity-75">
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div class="flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white">
                <a href="#">
                  <span class="absolute inset-0"></span>
                   Luna in Tasmania
                </a>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">10/01/2023-20/01/2023</p>
            </div>
          </div>
        </div>
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img src="./images/bamboo02.jpeg" alt=""
               class="object-left group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full">
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white">
                <a href="#">
                  <span class="absolute inset-0"></span>
                   Luna and Bamboo
                </a>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">24/12/2021-5/01/2022</p>
            </div>
          </div>
        </div>
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img src="./images/c01.jpg" alt="" class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full">
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white">
                <a href="#">
                  <span class="absolute inset-0"></span>
                   Luna and Cookie
                </a>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">17/04/2023-23/04/2023</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>




</template>

<script>

export default {
  name:'Adventure',
  data() {
    return {
    }
  }
}
</script>

