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

<!--  <div class="game-container">-->
<!--    <canvas id="gameCanvas" width="1000" height="800"></canvas>-->
<!--  </div>-->

<!--  <div class="snake-game">-->
<!--    <h1 class="text-center text-2xl font-semibold mb-4">贪吃蛇游戏</h1>-->
<!--    <div class="game-container">-->
<!--      <canvas id="snakeCanvas" width="400" height="400"></canvas>-->
<!--    </div>-->
<!--    <div class="text-center mt-4">-->
<!--      <button @click="startNewGame" class="bg-blue-500 text-white p-2 rounded-lg">开始新游戏</button>-->
<!--      <p class="mt-2">分数: {{ score }}</p>-->
<!--    </div>-->
<!--  </div>-->

</template>

<script setup>

import { ref,onMounted } from 'vue';

// onMounted(() => {
//   const canvas = document.getElementById('gameCanvas');
//   const ctx = canvas.getContext('2d');
//
//   // 游戏参数
//   const dog = { x: 60, y: 60, width: 60, height: 60, speed: 5 };
//   const bone = { x: Math.random() * 550, y: Math.random() * 350, width: 30, height: 30 };
//   let score = 0;
//
//   // 监听键盘事件
//   let keys = {};
//   window.addEventListener('keydown', (e) => {
//     keys[e.key] = true;
//   });
//   window.addEventListener('keyup', (e) => {
//     keys[e.key] = false;
//   });
//
//   // 加载宠物狗和骨头的图像
//   const dogImage = new Image();
//   dogImage.src = 'https://d1nuow4z6t9ani.cloudfront.net/logo/lunaLogo1.jpeg'; // 这里可以替换成宠物狗的图片地址
//
//   const boneImage = new Image();
//   boneImage.src = 'https://d1nuow4z6t9ani.cloudfront.net/logo/lunaLogo1.jpeg'; // 这里可以替换成骨头的图片地址
//
//   // 游戏主循环
//   function gameLoop() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
//
//     // 移动宠物狗
//     if (keys['ArrowUp'] && dog.y > 0) dog.y -= dog.speed;
//     if (keys['ArrowDown'] && dog.y < canvas.height - dog.height) dog.y += dog.speed;
//     if (keys['ArrowLeft'] && dog.x > 0) dog.x -= dog.speed;
//     if (keys['ArrowRight'] && dog.x < canvas.width - dog.width) dog.x += dog.speed;
//
//     // 检测碰撞
//     if (checkCollision(dog, bone)) {
//       score++;
//       // 重置骨头的位置
//       bone.x = Math.random() * 550;
//       bone.y = Math.random() * 350;
//       playSound();
//     }
//
//     // 绘制宠物狗和骨头
//     ctx.drawImage(dogImage, dog.x, dog.y, dog.width, dog.height);
//     ctx.drawImage(boneImage, bone.x, bone.y, bone.width, bone.height);
//
//     // 显示分数
//     ctx.font = '20px Arial';
//     ctx.fillStyle = 'black';
//     ctx.fillText('Score: ' + score, 10, 30);
//
//     requestAnimationFrame(gameLoop); // 循环调用游戏主循环
//   }
//
//   // 碰撞检测函数
//   function checkCollision(dog, bone) {
//     return (
//         dog.x < bone.x + bone.width &&
//         dog.x + dog.width > bone.x &&
//         dog.y < bone.y + bone.height &&
//         dog.y + dog.height > bone.y
//     );
//   }
//
//   // 播放音效
//   function playSound() {
//     const sound = new Audio('https://www.soundjay.com/button/beep-07.wav'); // 你可以换成更适合的音效
//     sound.play();
//   }
//
//   // 启动游戏
//   dogImage.onload = () => {
//     boneImage.onload = () => {
//       gameLoop();
//     };
//   };
// });
//
//
// const score = ref(0);  // 记录分数
// const canvas = ref(null);
// let ctx = null;  // 获取 canvas 上下文
// let snake = [];  // 贪吃蛇的身体
// let food = {};  // 食物的位置
// let direction = 'RIGHT';  // 蛇的初始方向
// let gameInterval = null;  // 游戏主循环定时器
//
// const snakeSize = 20;  // 贪吃蛇的单个块的尺寸
// const canvasSize = 400;  // canvas 的尺寸
//
// onMounted(() => {
//   canvas.value = document.getElementById('snakeCanvas');
//   ctx = canvas.value.getContext('2d');
//   document.addEventListener('keydown', changeDirection);
//   startNewGame();
// });
//
// function startNewGame() {
//   score.value = 0;
//   snake = [
//     { x: 100, y: 100 },
//     { x: 80, y: 100 },
//     { x: 60, y: 100 },
//   ];  // 初始化蛇的身体
//   direction = 'RIGHT';  // 初始化蛇的方向
//   spawnFood();  // 生成食物
//   if (gameInterval) clearInterval(gameInterval);  // 清除旧的定时器
//   gameInterval = setInterval(gameLoop, 100);  // 设置游戏主循环定时器
// }
//
// function gameLoop() {
//   moveSnake();  // 移动蛇
//   if (checkCollision()) {  // 检查游戏结束条件
//     alert('游戏结束！');
//     startNewGame();  // 重新开始游戏
//     return;
//   }
//   if (eatFood()) {  // 检查蛇是否吃到食物
//     score.value += 1;  // 增加分数
//     spawnFood();  // 重新生成食物
//   }
//   drawGame();  // 绘制游戏界面
// }
//
// function moveSnake() {
//   let head = { ...snake[0] };
//   if (direction === 'UP') head.y -= snakeSize;
//   if (direction === 'DOWN') head.y += snakeSize;
//   if (direction === 'LEFT') head.x -= snakeSize;
//   if (direction === 'RIGHT') head.x += snakeSize;
//
//   snake.unshift(head);  // 在蛇头前插入新的位置
//
//   if (!eatFood()) {
//     snake.pop();  // 如果没有吃到食物，删除蛇尾
//   }
// }
//
// function eatFood() {
//   const head = snake[0];
//   return head.x === food.x && head.y === food.y;
// }
//
// function checkCollision() {
//   const head = snake[0];
//   // 撞到墙壁
//   if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
//     return true;
//   }
//   // 撞到自己
//   for (let i = 1; i < snake.length; i++) {
//     if (snake[i].x === head.x && snake[i].y === head.y) {
//       return true;
//     }
//   }
//   return false;
// }
//
// function spawnFood() {
//   const x = Math.floor(Math.random() * (canvasSize / snakeSize)) * snakeSize;
//   const y = Math.floor(Math.random() * (canvasSize / snakeSize)) * snakeSize;
//   food = { x, y };
// }
//
// function drawGame() {
//   ctx.clearRect(0, 0, canvasSize, canvasSize);  // 清空画布
//
//   // 绘制蛇
//   snake.forEach(segment => {
//     ctx.fillStyle = 'green';
//     ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
//   });
//
//   // 绘制食物
//   ctx.fillStyle = 'red';
//   ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
//
//   // 绘制分数
//   ctx.font = '20px Arial';
//   ctx.fillStyle = 'black';
//   ctx.fillText('分数: ' + score.value, 10, 20);
// }
//
// function changeDirection(event) {
//   if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
//   if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
//   if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
//   if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
// }

</script>
<style scoped>
.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
canvas {
  border: 2px solid #000;
}

.snake-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.game-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

canvas {
  border: 2px solid black;
}

button {
  cursor: pointer;
}

button:hover {
  background-color: #2b6cb0;
}



</style>