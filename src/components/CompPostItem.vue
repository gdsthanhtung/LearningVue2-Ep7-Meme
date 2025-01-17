<template>
  <div class="ass1-section__item">
    <div class="ass1-section">
      <div class="ass1-section__head">
        <a href="bai-viet-chi-tiet.html" class="ass1-section__avatar ass1-avatar"><img
            src="/dist/images/user-02.jpg" alt=""></a>
        <div>
          <a href="bai-viet-chi-tiet.html" class="ass1-section__name">Thanos</a>
          <span class="ass1-section__passed">2 giờ trước</span>
        </div>
      </div>
      <div class="ass1-section__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
          deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
          amet a ad suscipit laudantium unde quidem perferendis!</p>
        <div class="ass1-section__image">
          <router-link to="/post/1"><img src="/dist/images/microphone-1209816_1920.jpg" alt=""></router-link>
        </div>
      </div>
      <div class="ass1-section__footer">
        <a href="#" class="ass1-section__btn-comment ass1-btn-icon"><i
            class="icon-Comment_Full"></i><span>982</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comp-post-item',
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
