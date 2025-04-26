import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMusicStore = defineStore('music', () => {
    const musicList = ref([
        {
            id:'1',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/joe.jpeg',
            band: 'Joe Satriani',
            album: 'The Extremist',
            song: 'Rubinas Blue Sky Happiness',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/rubina.mp3',
        },
        {
            id:'21',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/tristram.jpeg',
            band: 'Diablo',
            album: 'Diablo',
            song: 'Tristram',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/tristram.mp3',
        },
        {
            id:'2',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/Avalanche.jpg',
            band: 'Evan Baker',
            album: 'Light the Air',
            song: 'Avalanche',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/Avalanche.mp3',
        },
        {
            id:'16',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/zard.jpeg',
            band: 'ZARD 坂井泉水',
            album: 'forever you',
            song: 'ハイヒール脱ぎ捨てて',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/kick.mp3',
        },
        {
            id:'3',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/runaway.jpg',
            band: 'CJ Burnett',
            album: 'Dream Shore',
            song: 'Runaway',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/Runaway.mp3',
        },
        {
            id:'4',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/tang.jpg',
            band: 'Tang Dynasty',
            album: 'Tang Dynasty',
            song: 'Legend',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/legend.mp3',

        },
        {
            id:'17',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/memory.jpg',
            band: 'Every Little Thing',
            album: 'Many Pieces',
            song: 'キヲクm',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/memory.mp3',
        },
        {
            id:'5',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/zhang.jpg',
            band: 'Zhang Chu',
            album: 'Zhang Chu',
            song: 'Shameful being left alone',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/shameful.mp3',
        },
        {
            id:'13',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/running.jpg',
            band: 'FM-84',
            album: 'Atlas',
            song: 'Running in the night',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/Running in the Night.mp3',

        },
        {
            id:'14',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/spitz.jpg',
            band: 'SPITZ',
            album: 'SPITZ',
            song: 'ロビンソン',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/SPITZ.mp3',

        },
        {
            id:'15',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/memories.jpeg',
            band: 'The Midnight ',
            album: 'Endless Summer',
            song: 'Memories',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/Memories.mp3',

        },
        {
            id:'6',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/Dou.jpg',
            band: 'Dou Wei',
            album: 'Black Dream',
            song: 'Advanced Animal',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/advanced.mp3',
        },
        {
            id:'7',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/steve.jpg',
            band: 'Steve Vai',
            album: 'SEX&RELIGION',
            song: 'In My Dreams With you',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/In+My+Dreams+With+You.mp3',
        },
        {
            id:'18',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/rakuen.jpeg',
            band: 'Do As Infinity',
            album: 'Need Your Love',
            song: 'Rakuen',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/rakuen.mp3',
        },
        {
            id:'8',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/III.jpg',
            band: 'Athletics',
            album: 'III',
            song: 'who you are is not enough',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/III.mp3',
        },
        {
            id:'9',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/eric.jpg',
            band: 'Eric Johnson',
            album: 'Ah Via Musicom',
            song: 'Cliffs of Dover',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/Cliffs Of Dover.mp3',

        },
        {
            id:'10',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/skidrow.jpeg',
            band: 'Skid Row',
            album: 'Skid Row',
            song: '18 and Life',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/18 and Life.mp3',
        },
        {
            id:'20',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/Silhouette Dance.jpeg',
            band: 'R4',
            album: 'ridge racer type 4',
            song: 'Silhouette Dance',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/Silhouette Dance.mp3',
        },
        {
            id:'11',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/Dream.jpg',
            band: 'Dream Theater',
            album: 'Awake',
            song: 'Lifting Shadows Off a Dream',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/Lifting Shadows Off a Dream.mp3',
        },
        {
            id:'19',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/the world.jpeg',
            band: 'Jason Mraz',
            album: 'Love is a Four Letter Word',
            song: 'The World as I See it',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/The World As I See It.mp3',
        },
        {
            id:'12',
            cover: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/music/White Lion.jpg',
            band: 'White Lion',
            album: 'Pride',
            song: 'Wait',
            src: 'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/music/Wait.mp3',

        },

    ])

    const currentIndex = ref(0)
    const currentMusic = computed(() => musicList.value[currentIndex.value])

    return {
        musicList,
        currentIndex,
        currentMusic,
    }
})