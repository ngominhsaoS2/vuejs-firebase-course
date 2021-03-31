<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    let name = 'saonm';
    let age = 26;

    const handleClick = () => {
      console.log("You've just clicked me!")
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
