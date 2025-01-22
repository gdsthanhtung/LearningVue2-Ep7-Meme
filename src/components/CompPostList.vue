<template>
  <div id="post-list">
    <div v-if="listPost && listPost.length">
      <div class="ass1-section__list">
        <comp-post-item v-for="post in listPost" :key="post.id" :post="post" />
      </div>
      <button class="load-more ass1-btn"><span>Xem thêm</span></button>
    </div>
    <h3 v-else>Danh sách rỗng</h3>
  </div>
</template>

<script>
import CompPostItem from './CompPostItem.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'comp-post-list',
  components: { CompPostItem },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      listPost: 'post/getListPost'
    })
  },
  methods: {

  }
}
</script>

<style>

</style>
