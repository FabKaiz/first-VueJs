<template>
  <base-card>
    <div>
      <base-button 
        @click="setSelectedTab('stored-resources')" 
        :mode="storedResourcesBtnMode">Stored Resources</base-button>
      <base-button 
        @click="setSelectedTab('add-resource')" 
        :mode="addResourceBtnMode">Add Resource</base-button>
    </div>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources'
import AddResource from './AddResource'
  export default {
    data() {
      return {
        selectedTab: 'stored-resources',
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
    methods: {
      setSelectedTab(tab) {
        this.selectedTab = tab;
      },
      addResource(title, description, link) {
        const newResource = {
          id: new Date().toISOString(),
          title: title,
          description: description,
          link: link,
        };
        this.storedResources.unshift(newResource);
        this.selectedTab = 'stored-resources';
      },
      removeResource(resourceId) {
        const resIndex = this.storedResources.findIndex(res => res.id === resourceId);
        this.storedResources.splice(resIndex, 1);
      }
    },
    components: {
      StoredResources,
      AddResource,
    },
    provide() {
      return {
        resources: this.storedResources,
        addResource: this.addResource,
        deleteResource: this.removeResource,
      }
    },
    computed: {
      storedResourcesBtnMode() {
        return this.selectedTab === 'stored-resources' ? null : 'flat';
      },
      addResourceBtnMode() {
        return this.selectedTab === 'add-resource' ? null : 'flat';
      },
    },
  }
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
</style>