<template>
  <div class="myCard m-3 my-5">
    <div class="header">
      <div class="d-flex justify-content-start">{{ adjektiv }}</div>
      <div class="d-flex justify-content-between">
        <h3>{{ name }}</h3>
        <div @click="info = !info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="!info">
      <div class="special">{{ banner }}</div>
      <img
        src="../assets/placeholder.jpg"
        alt=""
        style="border: solid 1px #dbdbdb"
      />
    </div>
    <div v-if="info">
      <div class="infoTxt">{{ description }}</div>
    </div>
    <div v-if="priceStarts" class="price d-flex justify-content-start">
      ab
      <div class="ms-2">{{ price }},-</div>
    </div>
    <div v-if="!priceStarts" class="price d-flex justify-content-start">
      <div class="ms-2">{{ price }},-</div>
    </div>
    <div v-if="btnConfig" class="btn btn-config">
      <router-link
        to="/konfigurator"
        style="text-decoration: none; color: white"
        >Konfigurieren</router-link
      >
    </div>
    <div v-if="!btnConfig" class="btn btn-config" @click="addToCart()">
      In den Warenkorb
    </div>
  </div>
</template>

<script lang="ts">
import { Item } from "@/types";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      info: false,
      cart: [] as Item[],
      item: {
        id: this.id,
        name: this.name,
        price: this.price,
        category: this.category,
        description: this.description,
      } as Item,
    };
  },
  setup() {
    return;
  },
  props: {
    adjektiv: {
      default: "Erstklassig",
      type: String,
    },
    id: {
      default: null,
      type: Number,
    },
    name: {
      default: "Name",
      type: String,
    },
    category: {
      default: "",
      type: String,
    },
    description: {
      default:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque iusto repellendus iure expedita rem eveniet sit consequatur error nemo suscipit, quis quod dolor accusamus commodi itaque deserunt autem ab ex.",
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
    btnConfig: {
      default: true,
      type: Boolean,
    },
  },
  methods: {
    addToCart() {
      this.getCart();
      this.cart = this.cart || ([] as Item[]);
      this.cart.push(this.item);
      this.saveCart();
    },
    getCart() {
      this.cart = JSON.parse(localStorage.getItem("lastCart")!);
    },
    saveCart() {
      localStorage.setItem("lastCart", JSON.stringify(this.cart));
    },
  },
});
</script>

<style scoped lang="scss">
.btn-config {
  background-color: #d5322c;
  color: white;
  width: 20vw;
  &:hover {
    background-color: #b42622;
    color: white;
  }
}
.myCard {
  max-width: 20vw;
  position: relative;
  img {
    min-width: 100%;
    max-width: 100%;
  }
}
.price {
  color: #d5322c;
  font-size: 3vh;
  div {
    font-size: 5vh;
    font-weight: 700;
  }
}
.special {
  background-color: #d5322c;
  position: absolute;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-top: 1.5rem;
  font-size: x-large;
  color: white;
}
.infoTxt {
  max-width: 100%;
  border: solid 1px #dbdbdb;
}
</style>
