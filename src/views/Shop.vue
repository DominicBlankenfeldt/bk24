<template>
  <div class="shop row d-flex justify-content-center m-auto mt-4">
    <h1>This is a shop page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.shop {
  background-color: white;
  width: 90vw;
  height: 79vh;
  overflow: auto;
}
</style>
