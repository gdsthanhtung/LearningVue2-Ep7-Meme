<template>
  <div id="post-list">
    <div v-if="listPost && listPost.length">
      <div class="ass1-section__list">
        <comp-post-item v-for="post in listPost" :key="post.id" :post="post" />
      </div>
      <button v-on:click="handleLoadMore" class="load-more ass1-btn"><span>Xem thêm</span></button>
    </div>
    <h3 v-else>Danh sách rỗng</h3>
  </div>
</template>

<script>
import CompPostItem from './CompPostItem.vue'
import { mapActions, mapGetters } from 'vuex';
import { PAGE_SIZE, CURRENT_PAGE } from '../constants'

export default {
  name: 'comp-post-list',
  components: { CompPostItem },
  data() {
    return {
      currentPage: CURRENT_PAGE
    }
  },
  computed: {
    ...mapGetters({
      listPost: 'post/getListPost'
    })
  },
  methods: {
    ...mapActions({
      'getListPost': 'post/getListPost'
    }),
    handleLoadMore() {
      let categoryId = this.$route.query.categoryId || null;
      this.getListPost({ pagesize: PAGE_SIZE, currPage: ++this.currentPage, categoryId });
    }
  },
  watch: {
    '$route.query.categoryId': function (newVal, oldVal) {
      this.currentPage = CURRENT_PAGE;
      this.getListPost({ pagesize: PAGE_SIZE, currPage: CURRENT_PAGE, categoryId: newVal });
    }
  }
}
</script>

<style>

</style>
