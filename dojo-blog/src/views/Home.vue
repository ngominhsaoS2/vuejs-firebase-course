<template>
  <div class="home">
    <h1>Home</h1>
    <p >My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    //const p = ref(null);

    const name = ref('saonm');
    const age = ref(26);

    const handleClick = () => {
      name.value = 'ltm';
      age.value = 20;
    }

    return { name, age, handleClick }
  }
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
