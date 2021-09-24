<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat">Delete</base-button>
      </header>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">Check Website</a>
    </nav>
    </base-card>
  </li>
</template>

<script>
  export default {
    props: ['title', 'description', 'link']
  }
</script>

<style lang="scss" scoped>
  li {
    list-style-type: none;

  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 { 
    font-size: 1.3rem;
    margin: .5rem 0;
  }

  p {
    margin: .5rem 0;
  }

  a {
    color: rgb(6, 180, 166);
    transition: .2s;

    &:hover,
    &:active {
      color: rgb(5, 124, 114);
    }
  }
</style>