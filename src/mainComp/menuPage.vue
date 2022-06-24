<template>
  <div id="total-comp">
    <div id="mainMenu">
      <ul>
        <li id="hello">商品分类</li>
        <li id="hello">天猫超市</li>
        <li>天猫国际</li>
        <li>平板电视</li>
        <li>电脑</li>
        <li>马桶</li>
      </ul>
    </div>
    <div id="navigation">
      <div id="asideMenu">
        <ul>
          <li>平板电视</li>
          <li>马桶</li>
          <li>电脑</li>
          <li>冰箱</li>
          <li>电动车</li>
          <li>汽车</li>
          <li>平板电视</li>
          <li>马桶</li>
          <li>电脑</li>
          <li>冰箱</li>
          <li>电动车</li>
          <li>汽车</li>
        </ul>
      </div>
      <rotation></rotation>
    </div>
  </div>
</template>
<style src="../assets/css/menuPage.css" scoped>
</style>
<script>
import rotation from "../reuseComp/rotation.vue";
export default {
  components: {
   rotation
  },
};
</script>
