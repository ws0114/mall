<template>
    <div>
        <img :src="props.imgSrc" alt="">
    </div>
</template>
<style src="../assets/css/proImg.css" scoped>
</style>
<script>
import { isReactive, isRef } from '@vue/reactivity';
export default{
    props:{
        imgSrc:String,
    },
    setup(props){
      console.log(isRef(props.imgSrc));
        console.log(isReactive(props.imgSrc));
      return{
        props
      }
    }
}
</script>