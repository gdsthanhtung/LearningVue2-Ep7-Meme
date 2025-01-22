<template>
  <div class="ass1-section__item">
    <div class="ass1-section">
      <comp-post-item-header :post="post" />
      <comp-post-item-content :post="post" />
      <comp-post-item-footer :post="post" />
    </div>
  </div>
</template>

<script>
import CompPostItemContent from './CompPostItemContent.vue'
import CompPostItemFooter from './CompPostItemFooter.vue'
import CompPostItemHeader from './CompPostItemHeader.vue'
export default {
  components: { CompPostItemHeader, CompPostItemFooter, CompPostItemContent },
  name: 'comp-post-item',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
