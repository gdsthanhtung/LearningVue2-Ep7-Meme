<template>
  <div class="ass1-section__head">
    <router-link :to="getUserPageLink" class="ass1-section__avatar ass1-avatar">
      <img :src="getAvatar" alt="">
    </router-link>
    <div>
      <router-link :to="getUserPageLink" class="ass1-section__name">{{ getFullname }}</router-link>
      <span class="ass1-section__passed">{{ postedTime }}</span>
    </div>
  </div>
</template>

<script>
import { formatTimeFromNow } from '../helpers/datetimeHelper';
export default {
  name: 'comp-post-item-header',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    postedTime() {
      return formatTimeFromNow(this.post.time_added);
    },
    getAvatar() {
      return (this.post.profilepicture) || '/dist/images/default-avatar.png';
    },
    getFullname() {
      return (this.post.fullname) || '#no-name';
    },
    getUserPageLink() {
      return { name: 'user-page', params: { id: this.post.USERID } };
    }
  }
}
</script>

<style>
    .ass1-section__avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10%;
    }
    .ass1-section__name {
        text-transform: capitalize;
    }
</style>
