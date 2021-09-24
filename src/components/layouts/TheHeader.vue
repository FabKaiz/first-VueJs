<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  background-image: linear-gradient(
    to right top,
    #02ed99,
    #00eda1,
    #00eda8,
    #00ecaf,
    #00ecb6,
    #00eebb,
    #00efc1,
    #03f1c6,
    #01f5cc,
    #00f8d1,
    #00fcd7,
    #00ffdd
  );
  padding: 2rem;

  h1 {
    margin: 0;
    color: white;
    text-shadow: 0px 0px 6px #23232362;
  }
}
</style>