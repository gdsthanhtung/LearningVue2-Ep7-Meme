<template>
  <div id="post-list">
    <div class="ass1-section__list">
      <comp-post-item v-for="post in listPost" :key="post.id" :post="post" />
    </div>
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
