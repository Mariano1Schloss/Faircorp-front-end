<template>
  
  <div id="app">
    <div id="nav-wrapper">
      <router-link to="/window">Search for a window</router-link>
      <router-link to="/allWindows">See all windows</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
//import ToDoItem from './components/ToDoItem.vue';





export default {
  name: 'App',
  components: {
    //ToDoItem
    //Window
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
