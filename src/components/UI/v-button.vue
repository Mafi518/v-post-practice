<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'v-button',
  }
</script>

<style scoped>
button {
  padding: 10px;
  background: none;
  border: 1px solid teal;
  cursor: pointer;
  color: teal;
}
</style>