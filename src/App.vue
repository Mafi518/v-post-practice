<template>
  <v-post-form @create="createPost"></v-post-form>
  <v-post-list :posts="posts"></v-post-list>
</template>

<script>
import vPostForm from "@/components/v-post-form"
import vPostList from "@/components/v-post-list"

export default {
  components: {
    vPostList,
    vPostForm
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Javascript", body: "description post" },
        { id: 2, title: "Javascript 2", body: "description post 2" },
        { id: 3, title: "Javascript 3", body: "description post 3" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
  },
};
</script>

<style lang="css">
* {
  margin: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  padding: 20px;
}


</style>