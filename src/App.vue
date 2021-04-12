<template>
  <router-view />
  <Modal v-model="modalShow">
    <VeeForm v-slot="{ submitForm }">
      <Field name="password" rules="min:3" />
      <ErrorMsg name="password" />
      <button @click="submitForm">submit</button>
    </VeeForm>
  </Modal>
</template>

<script lang="ts">
import { test } from '@/api/home'
import { timeAdd } from '@/utils/time'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      modalShow: true,
      d_test: d(test),
      testTime: timeAdd('2021-04-12', 1, {
        unit: 'd',
        formatOutput: 'MM-DD HH:mm',
        endUnit: 'd',
      }),
    }
  },

  mounted() {
    // console.log(test)
    this.d_test({ sone: 'ss' })
  },
  methods: {
    test,
  },
})
</script>
