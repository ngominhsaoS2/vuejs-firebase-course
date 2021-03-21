const app = Vue.createApp({
    data() {
        return {
            showMovie: false,
            title: 'Justice League',
            author: 'Zack Snyder',
            age: 45
        }
    },

    methods: {
        changeTitle(title) {
            console.log('You just changed the movie title.');
            this.title = title;
        },

        toggleMovie() {
            this.showMovie = !this.showMovie;
        }
    }
})

app.mount('#app')