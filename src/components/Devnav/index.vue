<template>
  <div class="mb-2">
    <!--  class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text "-->
    <nav class="flex space-x-4" aria-label="Tabs">
      <RouterLink
          v-for="tab in navigation"
          :key="tab.name"
          :to="tab.href"
          :class="[isActive(tab.href) ? 'bg-purple-500 text-white' : 'text-gray-500 hover:text-orange-700']"
           class="rounded-md px-3 py-2 text-sm font-medium"
          :aria-current="isActive(tab.href) ? 'page' : undefined">{{ tab.name }}</RouterLink>
    </nav>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navigation = [
  { name: 'Music Player', href: '/dev/music'},
  { name: 'Plan', href: '/dev/plan'},
  { name: 'Layout', href: '/dev/layout'},
]
const isActive = (href) => route.path === href

</script>