<template>
  <div class="ass1-section__content">
    <p>{{ post.post_content }}</p>
    <div class="ass1-section__image">
        <router-link :to="getPostLink"><img :src="post.url_image" alt=""></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comp-post-item-content',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    getPostLink() {
      return { name: 'post-detail-page', params: { id: this.post.PID } };
    }
  }
}
</script>

<style>
</style>
