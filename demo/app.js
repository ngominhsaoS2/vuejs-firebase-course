const app = Vue.createApp({
    data() {
        return {
            showMovie: false,
            title: 'Justice League',
            author: 'Zack Snyder',
            age: 45,
            x: 0,
            y: 0
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