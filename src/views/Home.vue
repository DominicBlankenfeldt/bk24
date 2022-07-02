<template>
  <div class="home row d-flex justify-content-center m-auto">
    <div class="p-0">
      <div class="header p-0">
        <div class="headline col-12 d-flex justify-content-center mt-4">
          <!-- Fenster regional in Kiel und Umgebung kaufen -->
          Fenster regional und preiswert kaufen!
        </div>
        <img src="../assets/mainscr.png" alt="" class="headerPic" />
        <img
          src="../assets/seal_1.png"
          alt=""
          class="seal"
          style="top: 37vh; left: 76vw"
        />
        <img
          src="../assets/tüv.png"
          alt=""
          class="seal"
          style="top: 36vh; left: 83vw"
        />
        <img
          src="../assets/siegel.png"
          alt=""
          class="seal"
          style="top: 36vh; left: 89vw"
        />
        <div class="content mt-2 p-1">
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
      <div class="p-0 mt-5">
        <div class="steps d-flex justify-content-center py-2 px-0 row">
          <div class="contentHeader text-center p-0">
            5 Schritte bis zum Fenster nach Maß – holen Sie sich Ihr
            Wunsch-Fenster!
          </div>
          <div class="row justify-content-center p-0">
            <div class="col-2 p-4 step">
              <div class="d-flex justify-content-center my-5">
                <img src="../assets/membran.png" alt="" class="icon" />
              </div>
              <h2>1.</h2>
              <h4>Material und Profil</h4>
              <p>
                Wählen Sie aus erstklassigen Materialien für den Rahmen und
                setzen Sie den Fokus auf Energieeffizienz, Wärmedämmung,
                Sicherheit und Einbruchschutz.
              </p>
            </div>
            <div class="col-2 p-4 step">
              <div class="d-flex justify-content-center my-5">
                <img src="../assets/farbe.png" alt="" class="icon" />
              </div>
              <h2>2.</h2>
              <h4>Farben und Dekore</h4>
              <p>
                Bedienen Sie sich im großen Sortiment an Holzdekoren, Designs
                und diversen RAL-Farben und gestalten Sie die Optik der
                Premium-Profile nach Wunsch.
              </p>
            </div>
            <div class="col-2 p-4 step">
              <div class="d-flex justify-content-center my-5">
                <img src="../assets/massband.png" alt="" class="icon" />
              </div>
              <h2>3.</h2>
              <h4>Fenstertyp und Größe</h4>
              <p>
                Erstellen Sie anhand verschiedener Formen, Öffnungsarten und
                einer flexiblen Anzahl von Flügeln ein individuelles Produkt
                nach Maß.
              </p>
            </div>
            <div class="col-2 p-4 step">
              <div class="d-flex justify-content-center my-5">
                <img src="../assets/glass.png" alt="" class="icon" />
              </div>
              <h2>4.</h2>
              <h4>Verglasung und Extras</h4>
              <p>
                Sparen Sie Energie durch eine Verglasung mit hoher Wärmedämmung
                (niedrigem U-Wert) und fügen Sie Ihrer Bestellung eine
                bevorzugte Ausstattung, wie z.B. Strukturglas oder Sprossen,
                hinzu.
              </p>
            </div>
            <div class="col-2 p-4 step">
              <div class="d-flex justify-content-center my-5">
                <img src="../assets/bestellen.png" alt="" class="icon" />
              </div>
              <h2>5.</h2>
              <h4>Bestellung absenden</h4>
              <p>
                Transparent, sicher und versandkostenfrei ab 1.000 Euro: Im
                Konfigurator entwerfen Sie Ihr eigenes Produkt und haben
                jederzeit die Kosten Ihrer Bestellung im Blick.
              </p>
            </div>
          </div>
          <div class="btn btn-config my-4" style="width: 15vw; font-size: 3vh">
            Zum Konfigurator
          </div>
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
  width: 98vw;
  height: 88.5vh;
  overflow: auto;
}
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
.contentHeader {
  font-size: 5vh;
  font-weight: bold;
}
.steps {
  background-color: #eee;
}
.step {
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: rgb(228, 228, 228);
}
.btn-config {
  background-color: #d5322c;
  color: white;
  &:hover {
    background-color: #b42622;
    color: white;
  }
}
.icon {
  height: 15vh;
}
.seal {
  position: absolute;
  height: 10vh;
}
</style>
