<template>
  <v-popup v-model:show="popupVisible">
    <v-post-form @create="createPost"></v-post-form>
  </v-popup>

  <v-input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск"> </v-input>

  <v-button @click="showPopup">Создать пост</v-button>

  <v-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></v-select>

  <v-post-list
    @remove="removePost"
    :posts="sortedAndSearchedPosts"
  ></v-post-list>
  <div v-intersection="loadMorePosts" class="observer"></div>

  <!-- <div class="page__wrapper">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{
        'current-page' : page === pageNumber,
      }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div> -->
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
import vPostForm from "@/components/v-post-form";
import vPostList from "@/components/v-post-list";

export default {
  components: {
    vPostList,
    vPostForm,
  },
  data() {
    return {
      popupVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort"
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.popupVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showPopup() {
      this.popupVisible = true;
    },

  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    selectedSort(newValue) {
      this.posts.sort();
    },
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPost: "post/sortedPost",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
};
</script>

<style lang="css">
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  width: 32px;
  height: 32px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.current-page {
  border: 1px solid teal;
}
</style>