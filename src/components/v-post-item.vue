<template>
  <div class="post">
    <div>
      <div>
        {{post.id}}
      </div>
      <div>
        Название: <strong> {{ post.title }} </strong>
      </div>
      <div>
        Описание: <strong> {{ post.body }} </strong>
      </div>
    </div>
    <div class="post-btns">
      <v-button @click="$emit('remove', post)" >Удалить</v-button>
      <v-button @click="$router.push(`/posts/${post.id}`)">Открыть</v-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-post-item",
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>