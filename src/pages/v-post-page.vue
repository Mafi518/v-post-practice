<template>
  <v-popup v-model:show="popupVisible">
    <v-post-form @create="createPost"></v-post-form>
  </v-popup>

  <v-input v-model="searchQuery" placeholder="Поиск"> </v-input>

  <v-button @click="showPopup">Создать пост</v-button>

  <v-select v-model="selectedSort" :options="sortOptions"></v-select>

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
import vPostForm from "@/components/v-post-form";
import vPostList from "@/components/v-post-list";
import axios from "axios";

export default {
  components: {
    vPostList,
    vPostForm,
  },
  data() {
    return {
      posts: [],
      popupVisible: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  methods: {
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
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка");
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        alert("Ошибка");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    // rootMargin: '0px',
    // threshold: 1.0
    // }
    // const callback = (entries, observer) => {
    //   if(entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts()
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer)
  },
  watch: {
    selectedSort(newValue) {
      this.posts.sort();
    },
    // page() {
    //   this.fetchPosts();
    // }
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPost.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style lang="css">

.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page{
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