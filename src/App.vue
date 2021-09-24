<template>
  <ul></ul>
</template>

<script>


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
           description: 'Create 2 or 3 colors gradient'
           links: 'https://mycolor.space/'
         }
      ]
    }
  },
  components: {

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
