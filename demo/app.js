const app = Vue.createApp({
    data() {
        return {
            title: 'Justice League',
            author: 'Zack Snyder',
            age: 45
        }
    },

    methods: {
        changeTitle(title) {
            console.log('You just changed the movie title.');
            this.title = title;
        }
    }
})

app.mount('#app')