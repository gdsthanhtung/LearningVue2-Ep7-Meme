<template>
  <div id="header-nav">
    <nav>
      <ul class="ass1-header__menu">
        <li>
          <a href="#">Danh mục</a>
          <div class="ass1-header__nav" style="display: none;">
            <div class="container">
              <ul>
                <li v-for="category in categories" :key="category.id">
                  <router-link :to="getCategoryLink(category)">{{ category.text }}</router-link>
                </li>
              </ul>
            </div>
            <div class="ass1-header__menu-transition"></div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { renderSlug } from '../helpers/stringHelper';
export default {
  name: 'comp-header-nav',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      categories: 'post/getCategories'
    })
  },
  methods: {
    getCategoryLink(category) {
      return { name: 'home-page', query: { category: renderSlug(category.text), categoryId: category.id } };
    }
  }
}
</script>

<style scoped>
    .ass1-header__nav > .container ul {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .ass1-header__nav > .container ul li {
        width: 25%;
    }
    .ass1-header__nav > .container ul li:first-child {
        margin-top: 8px;
    }
</style>
