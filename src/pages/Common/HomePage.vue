<template>
  <div class="row">
    <div class="col-lg-8">
      <comp-post-list />
    </div>
    <div class="col-lg-4">
      <comp-sidebar />
    </div>
  </div>
</template>

<script>
import CompPostList from '../../components/CompPostList.vue'
import CompSidebar from '../../components/CompSidebar.vue'
import { mapActions } from 'vuex'
import { PAGE_SIZE, CURRENT_PAGE } from '../../constants'

export default {
  components: { CompPostList, CompSidebar },
  name: 'home-page',
  data() {
    return { }
  },
  created() {
    let categoryId = this.$route.query.categoryId || null;
    this.getListPost({ pagesize: PAGE_SIZE, currPage: CURRENT_PAGE, categoryId });
  },
  methods: {
    ...mapActions({
      'getListPost': 'post/getListPost'
    })
  }
}
</script>

<style>
</style>
