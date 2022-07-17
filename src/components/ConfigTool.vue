<template>
  <div v-if="!manufacturersName">
    <h1>Wählen Sie ihren Hersteller</h1>
    <div class="d-flex">
      <div
        v-for="manufacturer in manufacturers"
        :key="manufacturer"
        class="card"
        style="width: 18rem"
        @click="setManufacturer(manufacturer)"
      >
        <img src="../assets/placeholder.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            {{ manufacturer.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="manufacturersName && !material">
    <div class="btn btn-danger" @click="manufacturersName = ''">zurück</div>
    <h1>Wählen Sie ihr Wunsch-Material</h1>
    <div class="d-flex">
      <div
        v-for="material in manufacturer.materials"
        :key="material"
        class="card"
        style="width: 18rem"
        @click="setMaterial(material)"
      >
        <img src="../assets/placeholder.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            {{ material }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="manufacturersName && material && !productType">
    <div class="btn btn-danger" @click="material = ''">zurück</div>
    <h1>Welches Produkt möchten Sie konfigurieren?</h1>
    <div class="d-flex">
      <div
        v-for="product in manufacturer.productTypes"
        :key="product"
        class="card"
        style="width: 18rem"
        @click="setProduct(product)"
      >
        <img src="../assets/placeholder.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            {{ product.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="manufacturersName && material && productType && !amountOfWings">
    <div class="btn btn-danger" @click="productType = ''">zurück</div>
    <h1>Wählen sie die Anzahl der Flügel.</h1>
    <div class="d-flex">
      <div
        v-for="amountOfWings in type.wings"
        :key="amountOfWings"
        class="card"
        style="width: 18rem"
        @click="setAmountOfWings(amountOfWings)"
      >
        <img src="../assets/placeholder.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            {{ amountOfWings.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="
      manufacturersName && material && productType && amountOfWings && !opening
    "
  >
    <div class="btn btn-danger" @click="amountOfWings = ''">zurück</div>
    <h1>Wählen sie die Anzahl der Flügel.</h1>
    <div class="d-flex">
      <div
        v-for="opening in wings.opening"
        :key="opening"
        class="card"
        style="width: 18rem"
        @click="setOpening(opening)"
      >
        <img src="../assets/placeholder.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            {{ opening }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Manufacturer, ProductTypes, Wings } from "@/types";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      manufacturers: [
        {
          name: "Hersteller1",
          materials: ["Kunststoff", "Aluminium", "Holz"],
          productTypes: [
            {
              name: "Fenster",
              wings: [
                { name: "1 Flügel", opening: ["Fest"] },
                { name: "2 Flügel", opening: ["Fest", "Kipp"] },
                { name: "3 Flügel", opening: ["Fest", "Dreh-Kipp"] },
              ],
            },
            {
              name: "Balkon",
              wings: [
                { name: "1 Flügel", opening: ["Kipp"] },
                { name: "3 Flügel", opening: ["Fest"] },
              ],
            },
            {
              name: "Terrassen",
              wings: [
                { name: "1 Flügel", opening: ["Kipp", "Dreh-Kipp"] },
                { name: "3 Flügel", opening: ["Fest"] },
              ],
            },
            {
              name: "Türen",
              wings: [
                { name: "1 Flügel", opening: ["Dreh-Links", "Dreh-Rechts"] },
              ],
            },
          ],
        },
        {
          name: "Hersteller2",
          materials: ["Kunststoff", "Aluminium"],
          productTypes: [
            {
              name: "Fenster",
              wings: [
                { name: "1 Flügel", opening: ["Fest"] },
                { name: "2 Flügel", opening: ["Fest", "Kipp"] },
                { name: "3 Flügel", opening: ["Fest", "Dreh-Kipp"] },
              ],
            },
            {
              name: "Balkon",
              wings: [
                { name: "1 Flügel", opening: ["Kipp"] },
                { name: "3 Flügel", opening: ["Fest"] },
              ],
            },
            {
              name: "Terrassen",
              wings: [
                { name: "1 Flügel", opening: ["Kipp", "Dreh-Kipp"] },
                { name: "3 Flügel", opening: ["Fest"] },
              ],
            },
            {
              name: "Türen",
              wings: [
                { name: "1 Flügel", opening: ["Dreh-Links", "Dreh-Rechts"] },
              ],
            },
          ],
        },
        {
          name: "Hersteller3",
          materials: ["Kunststoff", "Aluminium"],
          productTypes: [
            {
              name: "Fenster",
              wings: [
                { name: "1 Flügel", opening: ["Fest"] },
                { name: "2 Flügel", opening: ["Fest", "Kipp"] },
                { name: "3 Flügel", opening: ["Fest", "Dreh-Kipp"] },
              ],
            },
            {
              name: "Balkon",
              wings: [
                { name: "1 Flügel", opening: ["Kipp"] },
                { name: "3 Flügel", opening: ["Fest"] },
              ],
            },
            {
              name: "Terrassen",
              wings: [
                { name: "1 Flügel", opening: ["Kipp", "Dreh-Kipp"] },
                { name: "3 Flügel", opening: ["Fest"] },
              ],
            },
            {
              name: "Türen",
              wings: [
                { name: "1 Flügel", opening: ["Dreh-Links", "Dreh-Rechts"] },
              ],
            },
          ],
        },
      ],
    };
  },
  data() {
    return {
      manufacturer: {} as Manufacturer,
      manufacturersName: "",
      material: "",
      type: {} as ProductTypes,
      productType: "",
      wings: {} as Wings,
      amountOfWings: "",
      opening: "",
      product: {},
    };
  },
  methods: {
    setManufacturer(a: Manufacturer) {
      this.manufacturer = a;
      this.manufacturersName = a.name;
    },
    setMaterial(a: string) {
      this.material = a;
    },
    setProduct(a: ProductTypes) {
      this.type = a;
      this.productType = a.name;
    },
    setAmountOfWings(a: Wings) {
      this.wings = a;
      this.amountOfWings = a.name;
    },
    setOpening(a: string) {
      this.opening = a;
    },
  },
});
</script>

<style lang="scss" scoped></style>
