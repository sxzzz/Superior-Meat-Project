<template>
  <div class="bg-white dark:bg-black">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="h-screen flex flex-col">
        <h2 class="ms-2 text-4xl my-2 dark:text-white">Fenced Dog Park</h2>

        <div class="flex-1 flex flex-col md:flex-row min-h-0">
          <!-- 左侧列表：在移动端根据视图切换 -->
          <div
              v-show="!isMobile || viewMode === 'list'"
              class="md:w-1/2 overflow-y-auto p-2 space-y-4 bg-white h-full"
          >
            <div
                v-for="park in parks"
                :key="park.name"
                class="border rounded-lg p-2 shadow cursor-pointer hover:bg-gray-50 border border-gray-300"
                @click="focusOnMap(park)"
                @mouseenter="startBounce(park)"
                @mouseleave="stopBounce(park)"
            >
              <img :src="park.image" alt="park photo" class="w-full h-48 object-cover rounded" />
              <h2 class="text-xl font-bold mt-2">{{ park.name }}</h2>
              <p class="text-sm text-gray-600">{{ park.suburb }} · {{ park.address }}</p>
              <p class="mt-2 text-gray-700">{{ park.notes }}</p>
            </div>
          </div>

          <!-- 右侧地图：在移动端根据视图切换 -->
          <div
              v-show="!isMobile || viewMode === 'map'"
              class="md:w-1/2 h-full relative"
          >
            <div id="map" class="w-full h-full"></div>
          </div>
        </div>

        <!-- 按钮：在移动端切换视图时显示在页面底部 -->
        <div
            v-if="isMobile"
            class="fixed bottom-20 left-0 right-0 flex justify-center z-50 pointer-events-none"
        >
          <button
              v-if="viewMode === 'map'"
              class="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md pointer-events-auto"
              @click="toggleView"
          >
            List View
          </button>

          <button
              v-if="viewMode === 'list'"
              class="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md pointer-events-auto"
              @click="toggleView"
          >
            Map View
          </button>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
  import {onMounted, ref,onBeforeUnmount,nextTick} from 'vue';
  const parks = ref([
  {
    "name": "Pawfield Park Fenced Dog Park",
    "suburb": "Caulfield East",
    "address": "2 Booran Rd, Caulfield East VIC 3145",
    "coords": [-37.881572960006196, 145.03515812433855],
    "image": "https://d1nuow4z6t9ani.cloudfront.net/images/parks/Pawfield.jpeg",
    "notes": "Great place for dog socialisation! Gated grounds with a separate small dogs play area. A bit of space for the dogs to chase balls but limited. A few agility obstacles for the dogs which is nice too! Would recommend for dog socialisation and playing."
  },
  {
    "name": "Farm Road Reserve Fenced Dog Park",
    "suburb": "Cheltenham",
    "address": "52 Brampton St, Cheltenham VIC 3192",
    "coords": [-37.96431475492113, 145.07692839832004],
    "image": "https://d1nuow4z6t9ani.cloudfront.net/images/parks/Farm.jpg",
    "notes": "A fantastic dog park which is fenced and gated on all sides. There are plenty of shaded areas with lots of trees, and a few water fountains for the dogs throughout. It's a great place for dogs to socialise, run around and explore."
  },
  {
    "name": "Haughton Road Fenced Dog Park",
    "suburb": "Clayton South",
    "address": "Orchid St &, Haughton Rd, Clayton South VIC 3169",
    "coords": [-37.930292778368546, 145.1277629841646],
    "image": "https://d1nuow4z6t9ani.cloudfront.net/images/parks/haughton.jpg",
    "notes": "Grass has been established so it has become a nice place to sit while the dogs run around. There is  a water tape just outside the gate, near the playground area."
  },
  {
    "name": "Reg Marlow Reserve Fenced Dog Park",
    "suburb": "Mentone",
    "address": "133 Warrigal Rd, Mentone VIC 3194",
    "coords": [-37.97638975572748, 145.07220051342546],
    "image": "https://d1nuow4z6t9ani.cloudfront.net/images/parks/reg.jpeg",
    "notes": "Quite a small but well secured dog park, with 4 entrances at each corner of the perimeter. Plenty of benches to enjoy whilst your dogs are socialising with drinking fountain and water bowl for them."
  },
  {
    "name": "Gordon Barnard Reserve Fenced Dog Play Area",
    "suburb": "Balwyn North",
    "address": "271C Belmore Rd, Balwyn North VIC 3104",
    "coords": [-37.80225996014578, 145.08722280224796],
    "image": "https://d1nuow4z6t9ani.cloudfront.net/images/parks/gordon.jpeg",
    "notes": "Amazing dog park! Well maintained and friendly people come with their dogs. Definitely recommended."
  },
  {
    "name": "Tatterson Park (North) Fenced Dog Park",
    "suburb": "Keysborough",
    "address": "30 Grevillea St, Keysborough VIC 3173",
    "coords": [-37.99713859906752, 145.15933588419227],
    "image": "https://d1nuow4z6t9ani.cloudfront.net/images/parks/tatterson.jpeg",
    "notes": "Great park divided into 2 sections. Larger park is for large breeds and small if aren't too afraid and the other for small breeds and puppies."
  },
  {
    "name": "Iluka Reserve Fenced Dog Park\n",
    "suburb": "Aspendale",
    "address": "5 Iluka Ave, Aspendale VIC 3195",
    "coords": [-38.02294802628665, 145.10909940052807],
    "image": "https://d1nuow4z6t9ani.cloudfront.net/images/parks/Iluka.jpeg",
    "notes": "A great open space for dogs off lead. Friendly doggie community meet on regular walk times."
  }
  ])

  let map
  const markerMap = new Map();

  const customIconHtml = `
  <div class="paw-marker">
    <img src="https://d1nuow4z6t9ani.cloudfront.net/icon/paw.svg" style="width:32px; height:32px;"/>
  </div>`

  const customIcon = L.divIcon({
  className: '', // 不加默认类名
  html: customIconHtml,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

  function focusOnMap(park) {
  if (map && park.coords) {
  map.setView(park.coords, 15)
  const marker = markerMap.get(park.name)
  if (marker) {
  marker.openPopup()
}
}
}

  function startBounce(park) {
  const marker = markerMap.get(park.name)
  if (marker && marker._icon) {
  marker._icon.querySelector('.paw-marker')?.classList.add('bounce')
    console.log(marker._icon.querySelector('.paw-marker'))
}
}

  function stopBounce(park) {
  const marker = markerMap.get(park.name)
  if (marker && marker._icon) {
  marker._icon.querySelector('.paw-marker')?.classList.remove('bounce')
}
}

  onMounted(() => {

  window.addEventListener('resize', handleResize)
  handleResize()

  map = L.map('map').setView([-37.85, 145.05], 11)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map)

  parks.value.forEach((park) => {
  const marker = L.marker(park.coords,{icon: customIcon}).addTo(map)
  marker.bindPopup(`<div style="max-width: 200px;">
      <img src="${park.image}" alt="${park.name}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 6px;" />
      <strong>${park.name}</strong>
    </div>`)
  markerMap.set(park.name, marker)
})

  // 计算所有公园的坐标范围，并自动缩放地图
  const allCoords = parks.value.map(p => p.coords)
  const bounds = L.latLngBounds(allCoords)
  map.fitBounds(bounds) // 🟡 自动适配视图范围
})

  onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

  // Responsive state
  const viewMode = ref('list') // 'list' or 'map'
  const isMobile = ref(window.innerWidth < 768)

  function handleResize() {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) viewMode.value = 'list' // reset to list on desktop
}
  //添加地图刷新逻辑
  function toggleView() {
  viewMode.value = viewMode.value === 'list' ? 'map' : 'list'

  if (viewMode.value === 'map') {
  nextTick(() => {
  map.invalidateSize()

  // 自动适配所有 parks 范围
  const bounds = L.latLngBounds(parks.value.map(p => p.coords))
  map.fitBounds(bounds)
})
}
}

</script>


<style>
#map {
  position: relative;
  z-index: 0;
}
/* Optional: fix Leaflet icon not loading issue */
:global(.leaflet-container) {
  z-index: 0;
}
.bounce {
  animation: bounce 0.5s infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}


</style>
