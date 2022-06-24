<template>
    <div id="rotation">
      <img :src="img" alt="" />
      <button class="arrow left" @click="backImg()">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </button>
      <button class="arrow right" @click="nextImg()">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
      <div class="selectImg">
        <ul>
          <li>
            <button
              class="btn"
              :class="{ selected: isTure.selected[0] }"
              @click="selectImg(0)"
            ></button>
          </li>
          <li>
            <button
              class="btn"
              :class="{ selected: isTure.selected[1] }"
              @click="selectImg(1)"
            ></button>
          </li>
          <li>
            <button
              class="btn"
              :class="{ selected: isTure.selected[2] }"
              @click="selectImg(2)"
            ></button>
          </li>
          <li>
            <button
              class="btn"
              :class="{ selected: isTure.selected[3] }"
              @click="selectImg(3)"
            ></button>
          </li>
        </ul>
      </div>
    </div>
</template>
<style src="../assets/css/rotation.css" scoped></style>
<script>
import { reactive, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  name: "total-comp",
  setup() {
    const imgNum = [
      require("../assets/photo/1.jpg"),
      require("../assets/photo/2.jpg"),
      require("../assets/photo/3.jpg"),
      require("../assets/photo/4.jpg"),
    ];
    let sped = 0;
    let img = ref(imgNum[sped]);
    const nextImg = () => {
      if (sped === selectedNum.length - 1) {
        sped = 0;
      } else {
        sped++;
      }
      changeSelected(sped);
    };
    const backImg = () => {
      if (sped === 0) {
        sped = selectedNum.length - 1;
      } else {
        sped--;
      }
      changeSelected(sped);
    };
    let selectedNum = [true, false, false, false];
    let isTure = reactive({ selected: selectedNum });
    const selectImg = (index) => {
      changeSelected(index);
    };

    let time = setInterval(() => {
      if (sped === selectedNum.length - 1) {
        sped = 0;
      } else {
        sped++;
      }
      changeSelected(sped);
    }, 3000);

    watch(isTure, () => {
      clearInterval(time);
      time = setInterval(() => {
        if (sped === selectedNum.length - 1) {
          sped = 0;
        } else {
          sped++;
        }
        changeSelected(sped);
      }, 3000);
    });

    function changeSelected(index) {
      if (!isTure.selected[index]) {
        for (let i = 0; i < isTure.selected.length; i++) {
          isTure.selected[i] = false;
        }
        isTure.selected[index] = !isTure.selected[index];
        sped = index;
        img.value = imgNum[index];
      }
    }

    return { img, nextImg, backImg, isTure, selectImg };
  },
};
</script>