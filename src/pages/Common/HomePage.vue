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
    return {}
  },
  created() {
    this.getListPostHasPaging({ pagesize: 10, currPage: 1 });
  },
  methods: {
    ...mapActions({
            'getListPostHasPaging': 'post/getListPostHasPaging'
    })
  },
}
</script>

<style>
</style>
