<template>
  <nav class="bg-white">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->

            <button type="button" @click="toggleMobileMenu" :class="{ 'x-icon': isMenuOpen }" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" :aria-expanded="isMobileMenuOpen.toString()">
                <span class="sr-only">Open main menu</span>
                <!-- Icon when menu is closed -->
                <svg v-if="!isMenuOpen" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <!-- Icon when menu is open -->

                <svg v-if="isMenuOpen" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

          <div class="hidden sm:ml-4 sm:flex sm:space-x-6">
              <router-link to="/hero"
                           :class="['inline-flex items-center border-b-2', $route.path === '/hero' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700']">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>

                  Hero
              </router-link>
            <router-link to="/artGallery"
                         :class="['inline-flex items-center border-b-2', $route.path === '/artGallery' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700']">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Art Gallery
            </router-link>
            <router-link to="/adventure"
                         :class="['inline-flex items-center border-b-2', $route.path === '/adventure' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700']">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Adventure
            </router-link>
            <router-link to="/friends"
                         :class="['inline-flex items-center border-b-2', $route.path === '/friends' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700']">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                Friends
            </router-link>
            <router-link to="/breed"
                         :class="['inline-flex items-center border-b-2', $route.path === '/breed' ? 'border-indigo-500' : 'border-transparent', 'px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700']">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 me-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                Breed
            </router-link>
          </div>
        </div>

      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="isMobileMenuOpen" class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 pb-4 pt-2">
        <router-link to="/hero" :class="['block border-l-4',$route.path === '/hero' ? 'border-indigo-500 bg-indigo-50':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700']">Hero</router-link>
        <router-link to="/artGallery" :class="['block border-l-4',$route.path === '/artGallery' ? 'border-indigo-500 bg-indigo-50':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700']">Art Gallery</router-link>
        <router-link to="/adventure" :class="['block border-l-4',$route.path === '/adventure' ? 'border-indigo-500 bg-indigo-50':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700']">Adventure</router-link>
        <router-link to="/friends" :class="['block border-l-4',$route.path === '/friends' ? 'border-indigo-500 bg-indigo-50':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700']">Friends</router-link>
        <router-link to="/breed" :class="['block border-l-4',$route.path === '/breed' ? 'border-indigo-500 bg-indigo-50':'border-transparent','py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700']">Breed</router-link>
      </div>
    </div>
  </nav>



</template>

<script>

export default {
  data() {
    return {
      isMobileMenuOpen: false,
      isMenuOpen: false,
    }
  },
    methods:{
        toggleMobileMenu:function(){
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<style scoped>
.close-icon {
    /* Add your styles for the close icon here */
}
</style>

