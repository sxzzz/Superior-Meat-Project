<template>
  <!--  tasklist-->
  <div class=" dark:bg-slate-800 dark:border-slate-500  rounded-t-xl">
    <div class="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">

      <div aria-label="Progress" class="mt-2">
        <div role="list" class="overflow-hidden grid grid-cols-2 ">
          <div class="dark:text-white">Ongoing
            <div class="relative p-2">
              <div class="absolute left-5 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
              <div href="#" class="group relative flex items-start">
                    <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hourglass-split mt-2 text-white bg-gray-500 rounded-full dark:bg-amber-600" viewBox="0 0 16 16">
                      <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                    </svg>
                    </span>
                <span class="ml-2 flex min-w-0 flex-col">
                      <span class="text-xl font-medium dark:text-white">Tech tree & game section</span>
                    </span>
              </div>
            </div>
            <div class="relative p-2">
              <div class="absolute left-5 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
              <div href="#" class="group relative flex items-start">
                    <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hourglass-split mt-2 text-white bg-gray-500 rounded-full dark:bg-amber-600" viewBox="0 0 16 16">
                      <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                    </svg>
                    </span>
                <span class="ml-2 flex min-w-0 flex-col">
                      <span class="text-xl font-medium dark:text-white">Music</span>
                      <span class="text-gray-500 dark:text-emerald-300">Add a music player</span>
                      <span class="text-gray-500 dark:text-emerald-300">Drag the progress bar to fast-forward or rewind</span>
                      <span class="text-gray-500 dark:text-emerald-300">Automatically reset button status and progress after playing</span>
                      <span class="text-gray-500 dark:text-emerald-300">Volume control and Visualizer</span>
                      <span class="text-gray-500 dark:text-emerald-300">All buttons are functional,Button tooltip</span>
                      <span class="text-gray-500 dark:text-emerald-300">Progress bar tooltip ?</span>
                      <span class="text-gray-500 dark:text-emerald-300">Global mini player ?</span>
                      <span class="text-gray-500 dark:text-emerald-300">7 theme of Visualizer (bar,wave,mirrorWave,centeredBars,dualStream,NeonLines,Matrix)</span>
                    </span>
              </div>
            </div>
            <div class="relative p-2">
              <div class="absolute left-5 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
              <div href="#" class="group relative flex items-start">
                    <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-question-circle mt-2 text-white bg-red-400 rounded-full dark:bg-pink-600" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                    </svg>
                    </span>
                <span class="ml-2 flex min-w-0 flex-col">
                      <span class="text-xl font-medium dark:text-white">Post</span>
                      <span class="text-gray-500 dark:text-emerald-300">Planing to redesign the post with highlight features </span>
                    </span>
              </div>
            </div>
            <div class="relative p-2">

              <div href="#" class="group relative flex items-start">
                    <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hourglass-split mt-2 text-white bg-gray-500 rounded-full dark:bg-amber-600" viewBox="0 0 16 16">
                      <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                    </svg>
                    </span>
                <span class="ml-2 flex min-w-0 flex-col">
                      <span class="text-xl font-medium dark:text-white">Friends</span>
                      <span class="text-gray-500 dark:text-emerald-300">Triangular wall - not responsive design yet, may need to refactor HTML part  </span>
                    </span>
              </div>
            </div>
          </div>
          <div class="dark:text-white">Completed
            <div class="relative p-2">
              <div class="absolute left-5 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
              <div href="#" class="group relative flex items-start">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                      </svg>
                    </span>
                <span class="ml-2 flex min-w-0 flex-col">
                      <span class="text-xl font-medium dark:text-white">Feedback board</span>
                    </span>
              </div>
            </div>
            <div class="relative p-2">
              <div class="absolute left-5 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
              <div href="#" class="group relative flex items-start">
                    <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                      </svg>
                    </span>
                <span class="ml-2 flex min-w-0 flex-col">
                      <span class="text-xl font-medium dark:text-white">Art Gallery</span>
                      <span class="text-gray-500 dark:text-emerald-300">Add more sections on Gallery</span>
                    </span>
              </div>
            </div>
            <div class="relative p-2">
              <div class="absolute left-5 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
              <div href="#" class="group relative flex items-start">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                      </svg>
                    </span>
                <span class="ml-2 flex min-w-0 flex-col">
                      <span class="text-xl font-medium dark:text-white">Header</span>
                      <span class="text-gray-500 dark:text-emerald-300">Add background music</span>
                    </span>
              </div>
            </div>
            <div class="relative p-2">
              <div class="absolute left-5 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
              <div href="#" class="group relative flex items-start">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                      </svg>
                    </span>
                <span class="ml-2 flex min-w-0 flex-col">
                      <span class="text-xl font-medium dark:text-white">Hero</span>
                      <span class="text-gray-500 dark:text-emerald-300">Added Dogcoder</span>
                      <span class="text-gray-500 dark:text-emerald-300">Redesigned hero section</span>
                      <span class="text-gray-500 dark:text-emerald-300">Added new challenge</span>
                    </span>
              </div>
            </div>
            <div class="relative p-2">
              <div href="#" class="group relative flex items-start">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                      </svg>
                    </span>
                <span class="ml-2 flex min-w-0 flex-col">
                      <span class="text-xl font-medium dark:text-white">Dark</span>
                      <span class="text-gray-500 dark:text-emerald-300">Dark Mode is activated </span>
                    </span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

  <div class="w-full h-full flex flex-col justify-center items-center">
    <canvas ref="gameCanvas" :width="500" :height="500" class="border mb-4"></canvas>

    <div class="space-x-4">
      <button @click="startGame" class="px-4 py-2 bg-green-500 text-white rounded">开始</button>
      <button @click="resetGame" class="px-4 py-2 bg-red-500 text-white rounded">重置</button>
      <p class="text-white">A 球数量: {{ aBallCount }}</p>

    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const gameCanvas = ref(null)
let ctx, canvas, center, radius
let balls = []
let speedMultiplier = 2.0
let running = false
let aBallCount = ref(1) // 初始有 1 个 A 球

class Ball {
  constructor(x, y, vx, vy, size, color, isB = false) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.size = size
    this.color = color
    this.isB = isB
  }

  move() {
    this.x += this.vx * speedMultiplier
    this.y += this.vy * speedMultiplier

    const distFromCenter = Math.hypot(this.x - center.x, this.y - center.y)
    if (distFromCenter + this.size >= radius) {
      const nx = (this.x - center.x) / distFromCenter
      const ny = (this.y - center.y) / distFromCenter
      const dot = this.vx * nx + this.vy * ny
      this.vx -= 2 * dot * nx + (Math.random() * 0.4 - 0.2) // 加扰动
      this.vy -= 2 * dot * ny + (Math.random() * 0.4 - 0.2)
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

function spawnTwoNewBalls() {
  for (let i = 0; i < 2; i++) {
    balls.push(new Ball(
        center.x + Math.random() * 100 - 50,
        center.y + Math.random() * 100 - 50,
        Math.random() * 4 - 2,
        Math.random() * 4 - 2,
        8,
        'blue'
    ))
  }
}

function checkCollisions() {
  const bBall = balls.find(b => b.isB)
  const remainingBalls = []
  let newBalls = []

  for (const ball of balls) {
    if (ball.isB) {
      remainingBalls.push(ball)
      continue
    }

    const dist = Math.hypot(ball.x - bBall.x, ball.y - bBall.y)
    if (dist <= ball.size + bBall.size) {
      // 碰到了：为每个被消除的 A 生成 2 个新 A
      for (let i = 0; i < 2; i++) {
        newBalls.push(new Ball(
            center.x + Math.random() * 100 - 50,
            center.y + Math.random() * 100 - 50,
            Math.random() * 4 - 2,
            Math.random() * 4 - 2,
            4,
            'blue'
        ))
      }
    } else {
      remainingBalls.push(ball)
    }
  }

  balls = remainingBalls.concat(newBalls)
  aBallCount.value += newBalls.length // 增加 A 球数量
}

function drawCircle() {
  ctx.beginPath()
  ctx.arc(center.x, center.y, radius, 0, Math.PI * 2)
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 2
  ctx.stroke()
}

function animate() {
  if (!running) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawCircle()

  balls.forEach(ball => {
    ball.move()
    ball.draw(ctx)
  })

  checkCollisions()
  requestAnimationFrame(animate)
}

function startGame() {
  if (!running) {
    running = true
    animate()
  }
}

function resetGame() {

  running = false
  balls = []

  // 初始化 B 球
  balls.push(new Ball(center.x, center.y, Math.random() * 4 - 2, Math.random() * 4 - 2, 6, 'red', true))
  // 初始化 A 球
  balls.push(new Ball(center.x + 50, center.y, Math.random() * 4 - 2, Math.random() * 4 - 2, 4, 'blue'))

  // 画初始画面
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawCircle()
  balls.forEach(ball => ball.draw(ctx))
}

onMounted(() => {
  canvas = gameCanvas.value
  ctx = canvas.getContext('2d')
  center = { x: canvas.width / 2, y: canvas.height / 2 }
  radius = canvas.width / 2 - 10

  resetGame()
})

</script>
<style scoped>


canvas {
  background-color: #f9f9f9;
}
button {
  transition: background-color 0.2s;
}
button:hover {
  filter: brightness(1.1);
}

</style>