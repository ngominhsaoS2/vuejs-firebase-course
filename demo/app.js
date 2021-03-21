const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.facebook.com/bw.shine/',
            showMovie: false,
            movies: [
                { title: 'Justice League', director: 'Zack Snyder' },
                { title: 'Avengers Endgame', director: 'Russo Brothers' },
            ]
        }
    },

    methods: {
        changeTitle(title) {
            console.log('You just changed the movie title.');
            this.title = title;
        },

        toggleMovie() {
            this.showMovie = !this.showMovie;
        },

        handleEvent(e, data) {
            if (data) {
                console.log(e, e.type);
            }
        },

        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

app.mount('#app')