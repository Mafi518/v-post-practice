<template>
  <div 
    class="post"
    v-for="post in posts"
    >
    
    <div>
      Название: <strong> {{ post.title }} </strong>
    </div>
    <div>
      Описание: <strong> {{ post.body }} </strong>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-post-list',
    props: {
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
}
</style>