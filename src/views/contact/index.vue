<template>

  <div class="bg-white py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div class="w-full lg:max-w-lg lg:flex-auto">
          <h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
          <img src="/assets/images/contactus.jpg" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-black/5 lg:aspect-auto lg:h-[34.5rem]" />
        </div>
        <div class="w-full lg:max-w-xl lg:flex-auto">
          <ul class="-my-8 divide-y divide-yellow-200">
            <li v-for="opening in jobOpenings" :key="opening.id" class="py-8">
              <dl class="relative flex flex-wrap gap-x-3">
                <dt class="sr-only">Role</dt>
                <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                  <a :href="opening.href">
                    {{ opening.office }}
                    <span class="absolute inset-0" aria-hidden="true" />
                  </a>
                </dd>
                <dt class="sr-only">Description</dt>
                <dd class="mt-4 w-full text-base/7 font-semibold text-gray-900">{{ opening.location }}</dd>
                <dd class="mt-4 w-full text-base/7 font-semibold text-gray-900">{{ opening.tel }}</dd>
                <dd class="mt-4 w-full text-base/7 font-semibold text-gray-900">{{ opening.email }}</dd>

              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

const jobOpenings = [
  {
    id: 1,
    office: 'Superior Meat Head office',
    href: '#',
    location: '34 Hamilton Street, Oakleigh, VIC 3166',
    email: 'info@smeat.com.au',
    tel: '(03) 8820 6797',
  },
  {
    id: 2,
    office: 'Nikushiki Glen',
    href: '#',
    location: 'L009 The Glen Shopping Centre, 235 Springvale Rd, Glen Waverley VIC 3150',
    email: '',
    tel: '(03) 9803 7878',
  },
  {
    id: 3,
    office: 'Nikushiki Melbourne Central',
    href: '#',
    location: 'Melbourne Central, Shop GD070/360 Elizabeth St, Melbourne VIC 3000',
    email: '',
    tel: ' (03) 9367 9823',
  },
]


const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
    answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
    answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
    answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
    answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
    answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet',
    answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet",
  },
]











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
