<template>
  <div class="post-detail-page">
    <div class="row">
      <div class="col-lg-8">
        <!--section-->
        <div class="ass1-section__list" v-if="getPostDetail && getPostDetail.post">
          <comp-post-item :post="getPostDetail.post" />

          <div class="list-categories mb-5" v-if="getPostDetail && getPostDetail.categories">
            <strong>Danh mục: </strong>
            <span v-for="(item, index) in getPostDetail.categories" :key="item.tag_index">
              <router-link v-bind:to="getCategoryLink(item)">{{ item.tag_value }}<span v-if="index < getPostDetail.categories.length - 1">, </span></router-link>
            </span>
          </div>

          <comp-post-detail-comment-add />

          <comp-post-detail-comment />
        </div>
        <div class="ass1-section__list" v-else>
          <p>Không tìm thấy bài viết</p>
        </div>
      </div>
      <div class="col-lg-4">
        <comp-sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import CompPostDetailComment from '../../components/CompPostDetailComment.vue'
import CompPostDetailCommentAdd from '../../components/CompPostDetailCommentAdd.vue'
import CompPostItem from '../../components/CompPostItem.vue'
import CompSidebar from '../../components/CompSidebar.vue'
import { mapActions, mapGetters } from 'vuex';
import { renderSlug } from '../../helpers/stringHelper';

export default {
  components: { CompSidebar, CompPostItem, CompPostDetailCommentAdd, CompPostDetailComment },
  name: 'post-detail-page',
  data() {
    return {
      postId: this.$route.params.id
    }
  },
  created() {
    // Load post detail khi vừa vào trang
    this.fetchDataPostDetail();
  },
  computed: {
    ...mapGetters({
      getPostDetail: 'post/getPostDetail'
    })
  },
  watch: {
    '$route': function (to, from) {
      this.postId = to.params.postId || null;
      this.fetchDataPostDetail();
    }
  },
  methods: {
    ...mapActions({
      'getPostById': 'post/getPostById'
    }),
    fetchDataPostDetail() {
      this.getPostById({ postId: this.postId });
    },
    getCategoryLink(category) {
      return { name: 'home-page', query: { category: renderSlug(category.tag_value), categoryId: category.tag_index } };
    }
  }
}
</script>

<style></style>

<!--
  1. created() sẽ được gọi đầu tiên để fetch dữ liệu post detail
  2. action getPostById() sẽ đi lấy data của post detail từ API, rồi set vào store/state
      -> sau đó đi lấy thông tin user của post đó add vào store/state users (nếu chưa có)
      -> cuối có được thông tin post và user thì sẽ render ra giao diện
  3. computed getPostDetail sẽ lấy data post detail từ getters store/state
-->
