<template>
  <div class="view row d-flex justify-content-center m-auto">
    <div class="p-0">
      <Banner
        headline="Ihre Produkte regional und preiswert kaufen!"
        text="Baukönig24 liefert Ihnen Fenster, Türen & Baustoffe zum gewünschten Zeitpunkt an den richtigen Ort.
              Wir halten unsere Preise transparent und bieten eine kompetente sowie ausführliche Beratung vor Ort für jeden unserer Kunden an.
              Gerne vermessen wir Ihre Fenster & Türen persönlich und helfen bei der passenden Auswahl.
              Ob PVC, Aluminium oder Holz – wir bieten für jeden Geschmack und Stil das Passende."
        bannerSrc="mainscr.png"
      />
      <CBanner headline="In nur 5 Schritten zum Wunschergebnis!" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" Scoped>
import { defineComponent } from "vue";
import Banner from "@/components/Banner.vue";
import CBanner from "@/components/Configbanner.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    Banner,
    CBanner,
    Footer,
  },
  data() {
    return {
      home: true,
    };
  },
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
