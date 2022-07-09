<template>
  <div>
    <div class="header p-0">
      <div class="headline col-12 d-flex justify-content-center mt-4">
        {{ headline }}
      </div>
      <img
        v-if="bannerSrc"
        :src="require(`../assets/${bannerSrc}`)"
        alt=""
        class="headerPic"
      />
      <img
        v-if="sealsEnabled"
        :src="require(`../assets/seals/${seal1}`)"
        alt=""
        class="seal"
        style="top: 37vh; left: 76vw"
      />
      <img
        v-if="sealsEnabled"
        :src="require(`../assets/seals/${seal2}`)"
        alt=""
        class="seal"
        style="top: 36vh; left: 83vw"
      />
      <img
        v-if="sealsEnabled"
        :src="require(`../assets/seals/${seal3}`)"
        alt=""
        class="seal"
        style="top: 36vh; left: 89vw"
      />
      <div class="content mt-2 p-1">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return;
  },
  props: {
    headline: String,
    bannerSrc: String,
    text: String,
    seal1: {
      default: "seal_1.png",
      type: String,
    },
    seal2: {
      default: "tüv.png",
      type: String,
    },
    seal3: {
      default: "siegel.png",
      type: String,
    },
    sealsEnabled: {
      default: true,
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
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
.content {
  font-size: 2.5vh;
  @media (max-width: 550px) {
    font-size: 2vh;
  }
  background-color: #fff;
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
