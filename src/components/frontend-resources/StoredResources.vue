<template>
  <ul>
    <resource-item
      v-for="item in resources"
      :key="item.id" 
      :id="item.id"
      :title="item.title"
      :description="item.description"
      :link="item.link"
    ></resource-item>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue'

export default {
  components: { ResourceItem },
  inject: ['resources'],
  }
</script>