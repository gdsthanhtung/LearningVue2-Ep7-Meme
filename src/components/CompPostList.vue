<template>
  <div id="post-list">
    <div class="ass1-section__list">
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
      <comp-post-item />
    </div>
  </div>
</template>

<script>
import CompPostItem from './CompPostItem.vue'
export default {
  name: 'comp-post-list',
  components: { CompPostItem },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
