<template lang="pug">
div
  div {{ text }}
  div reactive 物件{{ obj }}
  div reactive 物件內的值，直接取用，不會更新，因為非ref - {{ objCount }}
  div 將內值轉ref後取用，可更新{{ refObjCount }}
</template>

<script lang="ts">
import { ref, reactive, toRefs, defineComponent, onMounted } from 'vue'
import gsap from 'gsap'

export default defineComponent({
  setup() {
    const text = ref('hi')
    text.value += ' you'
    const obj = reactive({ count: 0 })
    const refObj = toRefs(obj)
    gsap.to(refObj.count, { duration: 10, value: 100 })
    onMounted(() => {
      obj.count++
    })
    return { text, obj, objCount: obj.count, refObjCount: refObj.count }
  },
})
</script>
