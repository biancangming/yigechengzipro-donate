<template>
  <div class="tabs">
    <div :class="['tab', doc.key == current ? 'active' : ''  ]" v-for="doc in docs" @click="current = doc.key">{{ doc.title }}</div>
  </div>
  <div>
      <component  class="doc" :is="currentDoc"></component>
  </div>
</template>
<script lang="ts" setup>
import About from "@/docs/about.md"
import Github from "@/docs/github.md"
import Live from "@/docs/live.md"
import Film from "@/docs/film.md"
import Donate from "./Donate.vue"

import { computed, ref } from 'vue';
import "@/assets/smart-blue.css"

const current = ref("1")
const currentDoc = computed(()=> docs.find(item=>item.key === current.value)?.md)
const docs = [
  {
    md: About,
    key: "1",
    title: "更新日志"
  },
  {
    md: Github,
    key: "2",
    title: "开源收藏"
  },
  {
    md: Live,
    key: "3",
    title: "直播源合集"
  },
  {
    md: Film,
    key: "4",
    title: "垃圾影视站"
  },
  {
    md: Donate,
    key: "5",
    title: "捐赠"
  },
]
</script>
<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;

  position: sticky;
  top: 25px;
  .tab {
    height: 50px;
    padding: 0 20px;
    background-color: #ffffff;
    font-size: 20px;
    line-height: 50px;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
    &:last-child {
      color: red;
    }
    &.active {
      background-color: #4fa749;
      color: #FFF;
    }
  }
}

.doc {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  color: rgba(255, 255, 255, 0.701);
  &:last-child {
    color: red;
  }
}
</style>