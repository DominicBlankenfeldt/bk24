<template>
  <div class="myCard m-3">
    <div class="header">
      <div class="d-flex justify-content-start">{{ adjektiv }}</div>
      <div class="d-flex justify-content-start">
        <h3>{{ name }}</h3>
      </div>
    </div>
    <div class="special">{{ banner }}</div>
    <img
      src="../assets/placeholder.jpg"
      alt=""
      style="border: solid 1px #dbdbdb"
    />
    <div v-if="priceStarts" class="price d-flex justify-content-start">
      ab
      <div class="ms-2">{{ price }},-</div>
    </div>
    <div v-if="!priceStarts" class="price d-flex justify-content-start">
      <div class="ms-2">{{ price }},-</div>
    </div>
    <div class="btn btn-config">{{ btnText }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  setup() {
    return;
  },
  props: {
    adjektiv: {
      default: "Erstklassig",
      type: String,
    },
    name: {
      default: "Name",
      type: String,
    },
    banner: {
      default: "Topseller",
      type: String,
    },
    price: {
      default: 123,
      type: Number,
    },
    btnText: {
      default: "Konfigurieren",
      type: String,
    },
    priceStarts: {
      default: true,
      type: Boolean,
    },
  },
  methods: {},
});
</script>

<style scoped lang="scss">
.btn-config {
  background-color: #d5322c;
  color: white;
  width: 12vw;
  &:hover {
    background-color: #b42622;
    color: white;
  }
}
.myCard {
  max-width: 12vw;
  img {
    max-width: 100%;
  }
}
.price {
  color: #d5322c;
  font-size: 2vh;
  div {
    font-size: 3vh;
    font-weight: 700;
  }
}
.special {
  background-color: #d5322c;
  position: absolute;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-top: 1.5rem;
  color: white;
}
</style>
