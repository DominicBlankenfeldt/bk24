<template>
  <div class="view row d-flex justify-content-center m-auto">
    <div class="p-0">
      <Banner
        headline="Durchblick mit unseren Fenstern!"
        bannerSrc="fenster-banner.jpg"
        text="Sie möchten den Gesamteindruck Ihrer Immobilie mit hochklassigen Fenstern in zahlreichen Ausführungen optimieren? Dann sind Sie bei uns genau richtig. Wir bieten Ihnen unzählige Fenster aus PVC, Holz, Aluminium mit Holz, sowie aus reinem Aluminium mit zweifacher oder dreifacher Verglasung."
      />
      <div style="">
        <div class="d-flex justify-content-center mt-4 pt-4">
          <h1>Unseren Favoriten auf einem Blick</h1>
        </div>
        <div class="d-flex justify-content-evenly flex-wrap">
          <card
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :btnConfig="false"
            :category="item.category"
          />
        </div>
      </div>
      <CBanner />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";
import CBanner from "@/components/Configbanner.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Items from "@/data/testItems";
import { Item, Manufacturer } from "@/types";

export default defineComponent({
  components: {
    Card,
    CBanner,
    Banner,
    Footer,
  },
  setup() {
    return {};
  },
  data() {
    return {
      items: Items,
      item: {} as Item,
    };
  },
  methods: {
    addToCart(a: Item) {
      this.item = a;
    },
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
