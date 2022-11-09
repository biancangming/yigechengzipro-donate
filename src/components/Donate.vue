<template>
  <div class="donate">
    <div class="center">👉 请我吃 </div>
    <div class="tabs">
      <div :class="['tab', img.key == current ? 'active' : ''  ]" v-for="img in imgs" @click="current = img.key">{{ img.title }}</div>
    </div>
    <img :src="currentImg" alt="捐赠二维码" style="width:100%"/>
  </div>
</template>
<script lang="ts" setup>
import five from "@/assets/images/5.jpg"
import fifteen from "@/assets/images/15.jpg"
import twentyFive from "@/assets/images/25.jpg"
import { computed, ref } from "vue";
const current = ref("five")
const currentImg = computed(()=> imgs.find(item=>item.key === current.value)?.png)
const imgs = [
  {
    png: five,
    key: "five",
    title: "两个包子"
  },
  {
    png: fifteen,
    key: "fifteen",
    title: "一碗牛杂"
  },
  {
    png: twentyFive,
    key: "twentyFive",
    title: "羊肉泡馍"
  },
]
</script>
<style lang="scss" scoped>
.donate {
  max-width: 400px;
  margin: 0 auto;
}
.tabs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;
  .tab {
    height: 50px;
    padding: 0 20px;
    font-size: 20px;
    line-height: 50px;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    color: #000;
    border: 1px solid #4fa749;
    &.active {
      background-color: #4fa749;
      color: #FFF;
    }
  }
}

img {
  background-blend-mode: lighten;
  border-radius: 10px;
}

.center {
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin-bottom: 1px;
  font-size: 32px;
  background-color: #54be6b;
  color: #FFF;
  border-radius: 10px;
}
</style>