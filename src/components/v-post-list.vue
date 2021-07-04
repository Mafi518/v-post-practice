<template>
  <div class="post-list">
    <transition-group name="v-post-list">
      <v-post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
      > ></v-post-item>
    </transition-group>

  </div>
  <h2 v-if="posts.length <= 0">Список постов пуст</h2>
</template>

<script>
import vPostItem from "@/components/v-post-item"

export default {
  name: "v-post-list",
  components: {
    vPostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-post-list-enter-active,
.v-post-list-leave-active {
  transition: all 1s ease;
}
.v-post-list-enter-from,
.v-post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>