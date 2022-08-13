<template lang="pug">
  #app.center
    <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
#app {
  font-family: 'Secular One', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  width: 640px;
  height: 480px;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}
</style>
