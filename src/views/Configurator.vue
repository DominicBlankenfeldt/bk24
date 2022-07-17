<template>
  <div class="view row d-flex justify-content-center m-auto">
    <div class="p-0">
      <Banner headline="Baukönig24 - Der Konfigurator" :sealsEnabled="false" />
      <ConfigTool />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";
import ConfigTool from "@/components/ConfigTool.vue";
import Banner from "@/components/Banner.vue";

export default defineComponent({
  components: {
    Footer,
    ConfigTool,
    Banner,
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.view {
  background-color: white;
  width: 98vw;
  height: 88.5vh;
  overflow: auto;
}
.side {
  position: relative;
  text-align: center;
}
.headline {
  color: white;
  font-size: 5vh;
  font-weight: bold;
  background-color: #d5322c;
  @media (max-width: 550px) {
    font-size: 4vh;
  }
}
.headerPic {
  height: 40vh;
  width: 100% !important;
  object-fit: cover;
  object-position: top 5% center;
}
.seal {
  position: absolute;
  height: 10vh;
}
</style>
