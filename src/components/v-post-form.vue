<template>
  <form>
    <p>Создание поста</p>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название поста"
      name=""
      id=""
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание поста"
      name=""
      id=""
    />
    <button class="btn" @click.prevent="createPost">Создать</button>
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
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px;
  margin-top: 15px;
}
.btn {
  margin-top: 15px;
  padding: 10px;
  background: none;
  border: 1px solid teal;
  cursor: pointer;
}
</style>