<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    console.log(this); // null

    const p = ref(null);

    let name = 'saonm';
    let age = 26;

    const handleClick = () => {
      console.log(p);
      console.log(p.value);
      p.value.classList.add('saonm'); // add class into this selector
      p.value.textContent = 'Hello saonm';
    }

    return { name, age, handleClick, p }
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
