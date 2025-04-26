
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [
            {
                id: 14,
                title: 'Vue 2',
                description:
                    '响应式数据绑定 (Reactive Data Binding), 组件化开发 (Component-Based Architecture), 指令系统 (Directive System), 虚拟 DOM (Virtual DOM), 生命周期钩子 (Lifecycle Hooks), 双向数据绑定 (Two-Way Data Binding)...',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b14.jpeg',
                date: 'Oct 01, 2024',
                datetime: '2024-10-01',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },
            {
                id: 13,
                title: 'Vue 3.5 "Tengen Toppa Gurren Lagann"',
                description:
                    'Optimization of the reactivity system,Destructuring of reactive Props.响应式系统优化，响应式 Props 解构。',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b13.jpeg',
                date: 'Sep 01, 2024',
                datetime: '2024-09-01',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },
            {
                id: 12,
                title: 'Vue 3.4 "Slam Dunk"',
                description:
                    'Rewrote the template parser,Refactored the reactivity system,Stabilized the defineModel API and introduced a shorthand for binding props with the same name.重写模板解析器，重构了响应式系统，稳定了 defineModel API，并引入了绑定 props 的同名简写。',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b12.jpeg',
                date: 'Dec 28, 2023',
                datetime: '2023-09-28',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },
            {
                id: 11,
                title: 'Vue 3.3 "Rurouni Kenshin"',
                description:
                    '改进了 <script setup> 与 TypeScript 的集成，增强开发者体验。',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b11.jpeg',
                date: 'June 11, 2023',
                datetime: '2023-06-11',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },
            {
                id: 10,
                title: 'Dark Mode is activated',
                description:
                    'The dark night bestowed upon me eyes of black, yet I use them to seek out the LIGHT. 黑夜给了我黑色的眼睛，我却用它寻找光明。',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b10.jpeg',
                date: 'May 31, 2023',
                datetime: '2023-05-31',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },
            {
                id: 9,
                title: 'A beautiful metaphor! ',
                description:
                    'A seed neither fears light nor darkness, but uses both to grow. Resilience and adaptability are key in navigating life\'s ups and downs, just like a seed that can thrive regardless of the conditions it encounters. 一颗种子既不惧怕光明，也不惧怕黑暗，而是利用二者共同成长。坚韧和适应能力是在人生的起起落落中航行的关键，就像一颗种子可以在任何遭遇的条件下茁壮成长一样。',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b09.jpeg',
                date: 'May 31, 2023',
                datetime: '2023-05-31',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },
            {
                id: 8,
                title: 'Movie night! 电影之夜',
                description:
                    'Luna and her brother are having a blast, watching a movie! Luna和她的哥哥玩得很开心，正在看电影！',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b08.jpeg',
                date: 'May 28, 2023',
                datetime: '2023-05-28',
                author: {
                    name: 'James',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/jamesAvator.jpeg',
                },
            },
            {
                id: 7,
                title: 'Programming dog and programmer 编程狗和程序猿',
                description:
                    'Whether it\'s "Programming dog" or "Programmer," both represent an interest and talent in programming. They express a love for the programming world and possess professional skills in different contexts. 无论是"编程狗"还是"程序员"，都代表着对编程的兴趣和才能，他们在不同的背景下表达了对编程世界的热爱和专业能力。',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b06.jpeg',
                date: 'May 27, 2023',
                datetime: '2023-05-27',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },
            {
                id: 6,
                title: 'Night all 晚安',
                description:
                    'Immersed in the ocean of Programming.沉浸在编程的海洋中！',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b07.jpeg',
                date: 'May 27, 2023',
                datetime: '2023-05-27',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },
            {
                id: 5,
                title: 'recycling 回收工作',
                description:
                    'Good girl! Luna chewing up the cardboard into small pieces so it fit in the bin. Good job recycling! 好孩子! Luna把纸板撕成小块，这样就能放进回收垃圾箱里面，干得漂亮!',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b05.jpeg',
                date: 'May 24, 2023',
                datetime: '2023-05-24',
                author: {
                    name: 'James',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/jamesAvator.jpeg',
                },
            },
            {
                id: 4,
                title: 'Luna first run training 第一次跑步训练',
                description:
                    'Good job, Luna, completed 2.31km in 17 minutes. 真棒,2.31公里,用时17分钟!',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b03.jpeg',
                date: 'May 23, 2023',
                datetime: '2023-05-23',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },
            {
                id: 3,
                title: 'Reading together 读书',
                description:
                    'Luna rested peacefully on her favorite mat while her brother gave her pats and read her book. 安静地躺在她最喜欢的垫子上，哥哥拍拍她，给她读书。',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b04.jpeg',
                date: 'May 22, 2023',
                datetime: '2023-05-22',
                author: {
                    name: 'James',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/jamesAvator.jpeg',
                },
            },
            {
                id: 2,
                title: 'Pawfield Park 狗狗公园',
                description:
                    'Cold,Windy,High chance of showers,still take Luna for a refreshing stroll in the park. Sit！寒冷，有风，大概率有阵雨，我们还是来公园散步,坐!',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b01.jpeg',
                date: 'May 21, 2023',
                datetime: '2023-05-21',
                author: {
                    name: 'James',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/jamesAvator.jpeg',
                },
            },
            {
                id: 1,
                title: 'BE Circle Run 东本特利绕圈',
                description:
                    'I just ran 7.5 kilometers in 47 minutes, with an average pace of 6 minutes and 17 seconds per kilometer. However, an adult American foxhound can easily run at a speed of 60 kilometers per hour, which means it takes them 1 minute per kilometer. That makes their pace six times faster than mine!! 我刚刚用时47分钟完成7.5公里，配速为每公里6分17秒。然而，一只成年的美国猎狐犬可以轻松地以时速60公里奔跑，这意味着它们只需1分钟即可达成目标。比我整整快了六倍！！',
                imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/hero/b02.jpeg',
                date: 'May 21, 2023',
                datetime: '2023-05-21',
                author: {
                    name: 'Andy',
                    imageUrl:'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/logo/andyAvator.png',
                },
            },

        ]
    }),
    actions: {
        setPosts(data) {
            this.posts = data
        }
    }
})