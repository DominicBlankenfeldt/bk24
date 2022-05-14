<template>
  <div class="shop row d-flex justify-content-center m-auto mt-4">
    <shopnav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import shopnav from "../components/ShopNav.vue";

export default defineComponent({
  setup() {
    return;
  },
  components: {
    shopnav,
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
