<template>
  <headerPage></headerPage>
  <searchPage></searchPage>
  <menuPage></menuPage>
  <porductShowPage></porductShowPage>
</template>
<script>
import headerPage from "./mainComp/headerPage.vue";
import searchPage from './mainComp/searchPage.vue';
import menuPage from "./mainComp/menuPage.vue";
import porductShowPage from "./mainComp/porductShowPage.vue";
export default {
  components: {
    headerPage,
    searchPage,
    menuPage,
    porductShowPage
  },
};
</script>