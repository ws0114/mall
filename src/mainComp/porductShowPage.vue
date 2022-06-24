<template>
  <div id="main">
    <proTitle></proTitle>
    <proImg :imgSrc="imgSrc"></proImg>
  </div>
</template>
<style src="../assets/css/productShowPage.css" scoped>
</style>
<script>
import proTitle from "../reuseComp/proTitle.vue";
import proImg from "../reuseComp/proImg.vue";
import { ref } from '@vue/reactivity';
export default {
  components: {
    proTitle,proImg
  },
  setup(){
    let imgSrc=ref(require("../assets/photo/1.jpg"));
    return{
        imgSrc
    }
  }
};
</script>