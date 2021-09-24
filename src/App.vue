<template>
  <the-header title="Front End Resource"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader'
import TheResources from './components/frontend-resources/TheResources'

export default {

  name: 'App',
  components: {
    TheHeader,
    TheResources,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
