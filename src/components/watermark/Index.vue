
<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, unref, watch } from "vue";
import { createMarkBase64 } from "./util"
const wrapper = ref<HTMLElement>()
const props = defineProps({
  text: {
    default: () => "水印",
    type: String
  },
  show: {
    default: true,
    type: Boolean
  }
})

let lastMark: string | undefined = undefined

// 显示水印
function showMark() {
  const src = lastMark ?? createMarkBase64(props.text)
  const el = unref(wrapper) as HTMLElement
  el.style.background = `url(${src}),linear-gradient(to right bottom, #051937, #004065, #006b81, #009681, #54be6b)`
}

onMounted(() => { if (props.show) { showMark() } })

watch(
  [() => props.text, () => props.show],
  ([text, show]) => {
    if (show) { showMark() }
    else {
      const el = unref(wrapper) as HTMLElement
      el.style.background = ``
    }
  })
</script>