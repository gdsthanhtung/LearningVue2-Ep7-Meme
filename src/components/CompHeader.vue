<template>
  <div id="header">
    <header>
      <div class="ass1-header">
        <div class="container">
          <router-link to="/" class="ass1-logo">Gds Meme</router-link>

          <comp-header-nav />

          <div class="ass1-header__search">
            <form action="#">
              <label>
                <input type="search" name="search-text" class="form-control" placeholder="Nhập từ khóa ...">
                <i class="icon-Search"></i>
              </label>
            </form>
          </div>
          <router-link to="/post/upload" class="ass1-header__btn-upload ass1-btn"><i class="icon-Upvote"></i> Đăng bài</router-link>
          <router-link to="/user/login" class="ass1-header__btn-upload ass1-btn">Đăng nhập</router-link>

        </div>
      </div>
    </header>
  </div>
</template>

<script>
import $ from 'jquery';
import CompHeaderNav from './CompHeaderNav.vue';
export default {
  components: { CompHeaderNav },
  name: 'comp-header',
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    $('.ass1-header__menu > li').hover(function() {
      $(this).find('.ass1-header__nav').stop().slideDown(300);
    }, function() {
      $(this).find('.ass1-header__nav').stop().slideUp(300);
    });

    $(".ass1-header__nav ul li > a").click(function(e) {
			$(this).parents('.ass1-header__nav').slideUp(300, 'swing')
		})
  }
}
</script>

<style></style>
