<template>
  <div class="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
    <div class="overflow-hidden bg-white py-8">
      <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Foxhound breed</h2>
            <p class="mt-6 text-base leading-7 text-gray-600">The English Foxhound was originally a hunting dog breed. they were made to hunt fox's unlike a beagle, which are made to hunt rabbits and hares.</p>

          </div>
          <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img src="./images/12.jpeg" alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover">
            </div>
            <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img src="./images/09.jpeg" alt="" class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover">
              </div>
              <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img src="./images/09.jpeg" alt="" class="aspect-[4/5] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover">
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
  name:'Foxhound',
  data() {
    return {
    }
  }
}
</script>
