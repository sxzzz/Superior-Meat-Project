<template>
  <div>
    <div>
      <img class="h-32 w-full object-cover lg:h-48" :src="profile.backgroundImage" alt="" />
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-40 sm:w-40" src="./images/Are-Beagles-Good-Dogs.jpg" alt="" />
        </div>
        <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
            <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
          </div>
          <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button type="button" class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">


              <i class="bi bi-envelope -ml-0.5 mr-1.5 h-5 w-5 text-gray-400 "></i>



              <span>Message</span>
            </button>
            <button type="button" class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">

              <span>Call</span>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
        <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      profile : {
        name: 'Luna the Foxhound',
        email: 'shenxin7905@gmail.com',
        avatar:
            '',
        backgroundImage:
            'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      }
    }
  }
}
</script>

