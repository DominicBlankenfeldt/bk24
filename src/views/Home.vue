<template>
  <div class="home row d-flex justify-content-center m-auto mt-4">
    <div v-if="home" class="p-0">
      <div class="header p-0">
        <div class="headline col-12 d-flex justify-content-center mt-4 p-1">
          Fenster regional in Kiel und Umgebung kaufen
        </div>
        <div class="content mx-4 mt-4 p-1">
          Baukönig24 liefert Ihnen Fenster, Türen & Baustoffe zum gewünschten
          Zeitpunkt an den richtigen Ort.<br />
          Wir halten unsere Preise transparent und bieten eine kompetente sowie
          ausführliche Beratung vor Ort für jeden unserer Kunden an.<br />
          Gerne vermessen wir Ihre Fenster & Türen persönlich und helfen bei der
          passenden Auswahl.<br />
          Ob PVC, Aluminium oder Holz – wir bieten für jeden Geschmack und Stil
          das Passende.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" Scoped>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
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
.home {
  background-color: white;
  width: 90vw;
  height: 79vh;
  overflow: auto;
}
.header {
  text-align: center;
}
.headline {
  color: white;
  font-size: 6vh;
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
}
</style>
