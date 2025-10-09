
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [
            {
                id: 10,
                title: 'Store1 open',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'/assets/images/cbdStore.png',
                date: 'Feb 08 2025',
                datetime: '2025-02-08',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 9,
                title: 'Store2 open ',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/glenStore.png',
                date: 'Jan 31, 2025',
                datetime: '2025-01-31',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 8,
                title: 'Japan trip',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/Logo.jpg',
                date: 'Jan 17, 2025',
                datetime: '2025-01-17',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 7,
                title: 'Pardoo trip',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'Dec 27, 2024',
                datetime: '2024-12-27',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 6,
                title: 'ushimatsu open',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'Nov 20, 2024',
                datetime: '2024-11-20',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 5,
                title: 'trip',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'Nov 18, 2024',
                datetime: '2024-11-18',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 4,
                title: 'trip',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'Nov 11, 2024',
                datetime: '2024-11-11',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 3,
                title: 'okan trip',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'Oct 07, 2024',
                datetime: '2024-10-07',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 2,
                title: 'store open',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'Sep 15, 2024',
                datetime: '2024-09-15',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 1,
                title: 'store open',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'Sep 02, 2024',
                datetime: '2024-09-02',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 13,
                title: 'store open"',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'Sep 01, 2024',
                datetime: '2024-09-01',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 12,
                title: 'trip"',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'Dec 28, 2023',
                datetime: '2023-09-28',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
                },
            },
            {
                id: 11,
                title: 'Vue 3.3 "Rurouni Kenshin"',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                imageUrl:'assets/images/logo/5.jpg',
                date: 'June 11, 2023',
                datetime: '2023-06-11',
                author: {
                    name: 'Superior',
                    imageUrl:'assets/images/logo/Logo.jpg',
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