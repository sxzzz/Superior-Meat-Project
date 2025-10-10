<template>
  <!-- ✅ 插入提示框：放在这行下方 -->
  <transition name="slide-fade">
    <div
        v-if="showThanks"
        class="fixed top-0 left-1/2 transform -translate-x-1/2 mt-12 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-500 ease-in-out"
    >
      Thank you for your feedback!
    </div>
  </transition>

    <!-- 遮罩层，点击空白区域关闭 -->
    <div
        v-show="visible"
        class="fixed inset-0 z-20 bg-black bg-opacity-30 transition-opacity duration-700 ease-in-out"
        :class="visible ? 'opacity-100' : 'opacity-0'"

        @click.self="closeModal"
    >

      <!-- Popup 内容区域 -->
        <div class="fixed right-0 top-1/3 transform -translate-y-1/2 transition-all duration-700 ease-in-out z-30"
             :class="visible ? 'right-0 opacity-100' : '-right-full opacity-0'"
             >
          <div class="bg-white rounded-md shadow-lg w-full max-w-md">
              <!-- Header -->
              <div class="bg-purple-700 text-white text-2xl font-semibold px-6 py-4 flex justify-between items-center rounded-t-md">
                <span>SPECIAL OFFER</span>
                <button class="text-white text-2xl hover:opacity-80" @click="closeModal">×</button>
              </div>
              <div class="p-6">
                <div class="text-center items-center justify-center">
                  <img src="/assets/images/logo/Logo.jpg" class="h-40 w-60" alt="">
                <div class="flex justify-center space-x-4 text-lg">
                  <span
                      v-for="(emoji, index) in emojis"
                      :key="index"
                      class="cursor-pointer transition transform hover:scale-110"
                      :title="emoji.label"
                      @click="selectEmoji(index)"
                      :class="selectedEmoji === index ? 'text-purple-600' : 'text-gray-700'"
                  >
                    {{ emoji.icon }}
                  </span>
                </div>
              </div>

                <!-- Animated Expandable Section -->
                <div
                    class="overflow-hidden transition-all duration-500 ease-in-out"
                    :class="selectedEmoji !== null ? 'max-h-[1000px] opacity-100 pt-6' : 'max-h-0 opacity-0'"
                >
                  <div class="space-y-4 text-sm text-gray-800 w-full">
                    <div>
                      <p>Chuck EYE ROLL Details</p>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  visible: Boolean,
})
const emit = defineEmits(['close'])
const emojis = [
  { icon: 'CLICK ME', label: 'Wagyu' },
]

const selectedEmoji = ref(null)
const feedback = ref('')
const name = ref('')
const email = ref('')
const showThanks = ref(false)
const feedbackError = ref(false)

function selectEmoji(index) {
  selectedEmoji.value = index
}

function submitFeedback() {
  // 提交时检查 textarea 是否为空
  if (!feedback.value.trim()) {
    feedbackError.value = true
    return // 阻止提交
  }

  feedbackError.value = false

  const data = {
    emoji: emojis[selectedEmoji.value]?.label,
    feedback: feedback.value,
    name: name.value,
    email: email.value
  }

  console.log('Submitted Feedback:', data)
  showThanks.value = true
  emit('close')

  setTimeout(() => {
    showThanks.value = false
    resetForm()
  }, 3000)
}

function resetForm() {
  selectedEmoji.value = null
  feedback.value = ''
  name.value = ''
  email.value = ''
}

function closeModal() {
  resetForm()
  emit('close')
}

</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translate(-50%, -30px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translate(-50%, 0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -30px);
}
</style>
