<template>
  <div id="nav">
    <!--
      <Modal v-model="modalShow">
      <VeeForm v-slot="{ submitForm }">
      <Field name="password" rules="min:3" />
      <ErrorMsg name="password" />
      <button @click="submitForm">submit</button>
      </VeeForm>
      </Modal> 
    -->
    {{ $store.state.user.count }}
  </div>
  <!-- <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      modalShow: true,
    }
  },
})
</script>
