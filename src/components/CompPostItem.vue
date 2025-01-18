<template>
  <div class="ass1-section__item">
    <div class="ass1-section">
      <div class="ass1-section__head">
        <a href="bai-viet-chi-tiet.html" class="ass1-section__avatar ass1-avatar">
          <img :src="post.profilepicture" alt=""></a>
        <div>
          <a href="bai-viet-chi-tiet.html" class="ass1-section__name">{{ post.fullname }}</a>
          <span class="ass1-section__passed">{{ postedTime }}</span>
        </div>
      </div>
      <div class="ass1-section__content">
        <p>{{ post.post_content }}</p>
        <div class="ass1-section__image">
          <router-link to="/post/1"><img :src="post.url_image" alt=""></router-link>
        </div>
      </div>
      <div class="ass1-section__footer">
        <a href="#" class="ass1-section__btn-comment ass1-btn-icon"><i
            class="icon-Comment_Full"></i><span>{{ post.count || 0 }}</span></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { formatTimeFromNow } from '../helpers/datetimeHelper';
export default {
  name: 'comp-post-item',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['formatTimeFromNow'])
  },
  computed: {
    postedTime() {
      return formatTimeFromNow(this.post.time_added);
    }
  }
}
</script>

<style>
  .ass1-avatar img {
    border-radius: 10%;
  }
</style>
