<template>
  <div class="p-0 mt-5">
    <div class="steps d-flex justify-content-center py-2 px-0 row">
      <div class="contentHeader text-center p-0">
        {{ headline }}
      </div>
      <div class="row justify-content-center p-0">
        <div class="col-2 p-4 step">
          <div class="d-flex justify-content-center my-5">
            <img src="../assets/icons/membran.png" alt="" class="icon" />
          </div>
          <h2>1.</h2>
          <h4>Material und Profil</h4>
          <p>
            Wählen Sie aus erstklassigen Materialien für den Rahmen und setzen
            Sie den Fokus auf Energieeffizienz, Wärmedämmung, Sicherheit und
            Einbruchschutz.
          </p>
        </div>
        <div class="col-2 p-4 step">
          <div class="d-flex justify-content-center my-5">
            <img src="../assets/icons/farbe.png" alt="" class="icon" />
          </div>
          <h2>2.</h2>
          <h4>Farben und Dekore</h4>
          <p>
            Bedienen Sie sich im großen Sortiment an Holzdekoren, Designs und
            diversen RAL-Farben und gestalten Sie die Optik der Premium-Profile
            nach Wunsch.
          </p>
        </div>
        <div class="col-2 p-4 step">
          <div class="d-flex justify-content-center my-5">
            <img src="../assets/icons/massband.png" alt="" class="icon" />
          </div>
          <h2>3.</h2>
          <h4>Typ und Größe</h4>
          <p>
            Erstellen Sie anhand verschiedener Formen, Öffnungsarten und einer
            flexiblen Anzahl von Flügeln ein individuelles Produkt nach Maß.
          </p>
        </div>
        <div class="col-2 p-4 step">
          <div class="d-flex justify-content-center my-5">
            <img src="../assets/icons/glass.png" alt="" class="icon" />
          </div>
          <h2>4.</h2>
          <h4>Verglasung und Extras</h4>
          <p>
            Sparen Sie Energie durch eine Verglasung mit hoher Wärmedämmung
            (niedrigem U-Wert) und fügen Sie Ihrer Bestellung eine bevorzugte
            Ausstattung, wie z.B. Strukturglas oder Sprossen, hinzu.
          </p>
        </div>
        <div class="col-2 p-4 step">
          <div class="d-flex justify-content-center my-5">
            <img src="../assets/icons/bestellen.png" alt="" class="icon" />
          </div>
          <h2>5.</h2>
          <h4>Bestellung absenden</h4>
          <p>
            Transparent, sicher und versandkostenfrei ab 1.000 Euro: Im
            Konfigurator entwerfen Sie Ihr eigenes Produkt und haben jederzeit
            die Kosten Ihrer Bestellung im Blick.
          </p>
        </div>
      </div>
      <div class="btn btn-config my-4" style="width: 15vw; font-size: 3vh">
        <router-link
          to="/konfigurator"
          style="text-decoration: none; color: white"
          >Zum Konfigurator</router-link
        >
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
    headline: {
      default:
        "5 Schritte bis zum Fenster nach Maß – holen Sie sich Ihr Wunsch-Fenster!",
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
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
</style>
