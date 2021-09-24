<template>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/frontend-resources/StoredResources'

export default {

  name: 'App',
  data() {
    return {
      storedResources: [
        {
          id: 'cool-background',
          title: 'Cool Background',
          description: 'Create random and original background',
          link: 'https://coolbackgrounds.io/',
         },
         {
           id: 'color-space',
           title: 'Color Space',
           description: 'Create 2 or 3 colors gradient',
           link: 'https://mycolor.space/'
         }
      ]
    }
  },
  components: {
    StoredResources,
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
