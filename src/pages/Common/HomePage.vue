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

export default {
  components: { CompPostList, CompSidebar },
  name: 'home-page',
  data() {
    return { }
  },
  created() {
    let categoryId = this.$route.query.categoryId || null;
    this.getListPost({ pagesize: 100, currPage: 1, categoryId });
  },
  methods: {
    ...mapActions({
            'getListPost': 'post/getListPost'
    })
  },
  watch: {
    '$route.query.categoryId': function (newVal, oldVal) {
      this.getListPost({ pagesize: 100, currPage: 1, categoryId: newVal });
    }
  }
}
</script>

<style>
</style>
