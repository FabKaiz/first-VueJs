<template>
    <div class="block">
      <base-card>
        <form @submit.prevent="submitData">
          <div class="form-control">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" ref="titleInput">
          </div>
          <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="3" ref="descInput"></textarea>
          </div>
          <div class="form-control">
            <label for="link">Link</label>
            <input type="url" name="link" id="link" ref="linkInput">
          </div>
          <div>
            <base-button :type="submit">Add Resource</base-button>
          </div>
        </form>
      </base-card>
    </div>
</template>

<script>
  export default {
    inject: ['addResource'],
    methods: {
      submitData() {
        const enteredTitle       = this.$refs.titleInput.value;
        const enteredDescription = this.$refs.descInput.value;
        const enteredLink        = this.$refs.linkInput.value;

        this.addResource(enteredTitle, enteredDescription, enteredLink);
      }
    },
  }
</script>

<style lang="scss" scoped>
.block {
  display: block;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;

  &:focus {
  outline: none;
  border-color: #00614c;
  background-color: #ebfff9;
}
}



.form-control {
  margin: 1rem 0;
}
</style>