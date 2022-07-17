<template>
  <div class="view row d-flex justify-content-center m-auto">
    <div class="p-0">
      <Banner headline="Mein Warenkorb" :sealsEnabled="false" />
      <Cart />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" Scoped>
import { defineComponent } from "vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Cart from "@/components/Cart.vue";

export default defineComponent({
  components: {
    Banner,
    Footer,
    Cart,
  },
  data() {
    return {
      home: true,
    };
  },
  methods: {},
});
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: 0px;
}
.view {
  background-color: white;
  width: 98vw;
  height: 88.5vh;
  overflow: auto;
}
</style>
