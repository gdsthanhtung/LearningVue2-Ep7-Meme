<template>
  <div class="sidebar">
    <aside class="ass1-aside">
      <div class="ass1-content-head__t">
        <div>Bài viết gần đây của bạn.</div>
      </div>
      <div>Vui lòng đăng nhập để xem nội dung này
        <a href="#">Đăng nhập</a>
      </div>
      <div class="ass1-section">
        <div class="ass1-section__head">
          <a href="#" class="ass1-section__avatar ass1-avatar"><img src="/dist/images/avatar-03.png" alt=""></a>
          <div>
            <a href="#" class="ass1-section__name">Gds Thanh Tung</a>
            <span class="ass1-section__passed">20 phút trước</span>
          </div>
          <!-- <a href="#" class="ass1-section__link ass1-btn-icon"><i class="icon-Link"></i></a> -->
        </div>
        <div class="ass1-section__content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tempore recusandae, nemo consequuntur rem
            pariatur ducimus dolorem aperiam nesciunt dolore, ratione aut, corporis laborum? Numquam ad magnam
            consectetur labore quam?</p>
        </div>
        <div class="ass1-section__footer">
          <a href="#" class="ass1-section__btn-upvote ass1-btn-icon"><i class="icon-Upvote"></i></a>
          <a href="#" class="ass1-section__btn-downvote ass1-btn-icon"><i class="icon-Downvote"></i></a>
          <!-- <a href="#" class="ass1-section__btn-repost ass1-btn-icon"><i class="icon-Repost"></i></a> -->
          <a href="#" class="ass1-section__btn-like ass1-btn-icon"><i
              class="icon-Favorite_Full"></i><span>1,274</span></a>
          <a href="#" class="ass1-section__btn-comment ass1-btn-icon"><i
              class="icon-Comment_Full"></i><span>982</span></a>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'comp-sidebar',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
  /* .sidebar {
    padding-top: 44px;
  } */
</style>
