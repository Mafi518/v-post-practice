<template>
  <form>
    <p>Создание поста</p>
    <v-input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название поста"
      name=""
      id=""
    />
    <v-input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание поста"
      name=""
      id=""
    />
    <v-button style="margin-top: 15px;" @click.prevent="createPost">Создать</v-button>
  </form>
</template>

<script>

export default {
  name: "v-post-form",
  data() {
    return {
      post: {
        title: '',
        body: ''
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
    deletePost() {
      
    }
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}


</style>