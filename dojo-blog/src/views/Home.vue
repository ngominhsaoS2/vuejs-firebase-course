<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue'
export default {
  name: 'Home',
  setup() {    
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    // will run these lines of code when the search variable changes
    const stopWatch = watch(search, () => {
      console.log('watch function just ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function just ran', search.value)
    })

    const matchingNames = computed(() => {
      // return ['a', 'b', 'c']
      return names.value.filter(name => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch();
      stopEffect();
    }

    return { names, search, matchingNames, handleClick }
  },
}
</script>

<style scoped>
  button {
    border: none;
    background-color: rgb(75, 161, 75);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 100;
  }
</style>
