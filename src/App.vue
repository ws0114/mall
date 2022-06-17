<template>
  <headerPage></headerPage>
  <searchPage></searchPage>
  <menuPage></menuPage>
</template>
<script>
import headerPage from "./components/headerPage.vue";
import searchPage from './components/searchPage.vue';
import menuPage from "./components/menuPage.vue";
export default {
  components: {
    headerPage,
    searchPage,
    menuPage
  },
};
</script>