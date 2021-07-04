<template>
  <input :value="modelValue" @input="updateInput" type="text">
</template>

<script>
  export default {
    name: 'v-input',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style scoped>
input {
  border: 1px solid teal;
  padding: 10px;
  margin-top: 15px;
}
</style>