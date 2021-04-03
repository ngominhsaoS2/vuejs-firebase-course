<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  name: 'Home',
  setup() {    
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    const matchingNames = computed(() => {
      // return ['a', 'b', 'c']
      return names.value.filter(name => name.includes(search.value))
    })
    return { names, search, matchingNames }
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
