<template>
  <div>
    <div
      class="d-flex justify-content-end pt-2 pb-2"
      style="border-bottom: solid 1px #d5322c; font-weight: bold"
    >
      <div class="btn btn-danger d-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-cart2"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
          /></svg
        >&nbsp;Warenkorb
        <div v-if="cartCounter != 0">: {{ cartCounter }}</div>
      </div>
    </div>
    <div class="d-flex">
      <div class="d-flex flex-column nav">
        <div
          class="shopSelector"
          :class="{ selected: choosed == 'Baustoffe' }"
          @click="choosed = 'Baustoffe'"
        >
          Baustoffe
        </div>
        <div
          class="shopSelector"
          :class="{ selected: choosed == 'Kleber' }"
          @click="choosed = 'Kleber'"
        >
          Kleber
        </div>
        <div
          class="shopSelector"
          :class="{ selected: choosed == 'Band' }"
          @click="choosed = 'Band'"
        >
          Band
        </div>
        <div
          class="shopSelector"
          :class="{ selected: choosed == 'Fliesen' }"
          @click="choosed = 'Fliesen'"
        >
          Fliesen
        </div>
        <div
          class="shopSelector"
          :class="{ selected: choosed == 'Steine' }"
          @click="choosed = 'Steine'"
        >
          Steine
        </div>
        <div
          class="shopSelector"
          :class="{ selected: choosed == 'Griffe' }"
          @click="choosed = 'Griffe'"
        >
          Griffe
        </div>
        <div
          class="shopSelector"
          :class="{ selected: choosed == 'Schlüssel' }"
          @click="choosed = 'Schlüssel'"
        >
          Schlüssel
        </div>
        <div
          class="shopSelector"
          :class="{ selected: choosed == 'Birnen' }"
          @click="choosed = 'Birnen'"
        >
          Birnen
        </div>
        <div
          class="shopSelector"
          :class="{ selected: choosed == 'Äpfel' }"
          @click="choosed = 'Äpfel'"
        >
          Äpfel
        </div>
        <div class="sale">Sale Angebote %</div>
      </div>
      <div class="showroom w-100">
        <div class="showroomheader ms-4">
          <h1>{{ choosed }}</h1>
        </div>
        <div class="cardroom w-100 d-flex flex-wrap ms-3">
          <div class="card m-3" style="width: 15rem">
            <div v-if="details == 'Baustoff 1'"></div>
            <img
              v-else
              class="card-img-top"
              src="../assets/baustoffe.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Baustoff 1</h5>
              <p class="card-text">Kurze Produktbeschreibung</p>
              <p v-if="details == 'Baustoff 1'">
                Das sind alle wichtigen Infos die für Kunden Wichtig sind zum
                Baustoff 1! <br />
                Das kann grundsätlich ewig so weiter gehen.
              </p>
            </div>
            <div class="card-footer">
              <a class="btn btn-danger me-1" @click="addToCart()"
                >+ Warenkorb</a
              >
              <a
                v-if="details == 'Baustoff 1'"
                class="btn btn-outline-danger"
                @click="details = ''"
                >Details</a
              >
              <a
                v-else
                class="btn btn-outline-danger"
                @click="details = 'Baustoff 1'"
                >Details</a
              >
            </div>
          </div>
        </div>
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
  methods: {
    addToCart() {
      this.cartCounter = this.cartCounter + 1;
      console.log(this.cartCounter);
    },
  },
  data() {
    return {
      choosed: "Baustoffe",
      details: false,
      cartCounter: 0,
    };
  },
});
</script>

<style scoped lang="scss">
.card {
  border: #d5312c 1px solid;
}
.shopSelector {
  font-size: 2vh;
  font-weight: bold;
  color: #d5312c;
  border-right: solid 1px #d5312c;
  cursor: pointer;
  &:hover {
    font-size: 2.2vh;
  }
}
.nav {
  max-width: 20vh;
  @media (max-width: 550px) {
    max-width: 5vh;
  }
}
.sale {
  margin-top: 2vh;
  font-weight: bold;
  font-size: 3vh;
  color: #d5312c;
  &:hover {
    font-size: 3.3vh;
  }
}
.selected {
  background-color: #d5312c;
  color: white;
}
</style>
