<template>
  <WaterMaker text="公众号：一个橙子pro">
    <div class="bg">
        <div class="collection">
          <Collection/>
        </div>
    </div>
  </WaterMaker>
</template>
<script lang="ts" setup>
import Collection from "@/components/Collection.vue"
import WaterMaker from "@/components/watermark/Index.vue"
</script>
<style scoped>
.bg {
  min-height: 100vh;
  padding: 10px;
}

.bg .donate{
  position: fixed;
  left: 0;
  bottom: 0;
  top: 10%;
  opacity: .9;
  width: 400px;
}

.collection {
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
}
</style>