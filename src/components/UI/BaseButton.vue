<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
  <!-- <base-button mode="flat"></base-button> -->
</template>

<script>
  export default {
    props: ['type','mode']
  }
</script>

<style lang="scss" scoped>
  button {
  padding: 0.55rem 1.5rem;
  font-family: inherit;
  background-color: #0bc2a9;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  transition: all .2s;
  font-size: 1rem;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #00ddad;
  }
}


.flat {
  background-color: transparent;
  color: #089b87;
  border: none;
  
  &:hover,
  &:active {
    background-color: #2fd8c150;
  }
}

</style>