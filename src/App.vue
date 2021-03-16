<template>
  <div id="app">
    <h1>Zhi Qi's Zi Char</h1>

    <PageContent></PageContent>
     <!--   
    <router-view></router-view>
    -->
  </div>
</template>

<script>
import PageContent from './components/PageContent.vue'

export default {
  name: 'App',
  components: {
    PageContent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4c33bd;
  margin-top: 60px;
}
h1 {
  background-color: aqua;
  font-size: 40px;
  padding: 30px;
}
</style>
 