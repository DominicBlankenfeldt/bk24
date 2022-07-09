<template>
  <div class="content row">
    <div class="col-12 d-flex headers">
      <div class="col-4">Unternehmen</div>
      <div class="col-4">Bestellung & Versand</div>
      <div class="col-4"></div>
    </div>
    <div class="col-12 d-flex links">
      <div class="col-4">Über Baukönig24</div>
      <div class="col-4">Lieferung & Versand</div>
      <div class="col-4"></div>
    </div>
    <div class="col-12 d-flex links">
      <div class="col-4">Kontakt</div>
      <div class="col-4">Garantiebedingungen</div>
      <div class="col-4"></div>
    </div>
    <div class="col-12 d-flex links">
      <div class="col-4">Partner werden</div>
      <div class="col-4">Reklamationsformular</div>
      <div class="col-4"></div>
    </div>
    <div class="col-12 d-flex links">
      <div class="col-4">Impressum</div>
      <div class="col-4">Zahlungsarten</div>
      <div class="col-4"></div>
    </div>
    <div class="col-12 d-flex links">
      <div class="col-4">Datenschutz</div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
    <div class="col-12 d-flex links">
      <div class="col-4">AGB</div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
    <div class="row d-flex justify-content-center" style="font-size: x-small">
      &#169; 2022 Baukoenig24.de - Alle Rechte vorbehalten. Created by Dominic
      Blankenfeldt.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
.content {
  background: #191b1d;
  min-width: 100%;
  color: rgb(182, 182, 197);
  margin-top: 5vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
}
.headers {
  font-size: large;
  font-weight: bold;
  margin-bottom: 1vh;
}
.links {
  font-size: smaller;
}
</style>
