<template>
  <navbar />
  <router-view />
  <!-- <div class="footer d-flex justify-content-center">
    <router-link to="/impressum">Impressum</router-link>
    &nbsp; | &nbsp;
    <router-link to="/datenschutz">Datenschutz</router-link>
  </div> -->
</template>

<script>
import { defineComponent } from "vue";
import navbar from "@/components/NavbarBk.vue";

export default defineComponent({
  components: {
    navbar,
  },
});
</script>

<style lang="scss">
// .footer {
//   height: 1vh;
//   color: #d5322c;
//   font-weight: bold;
//   a {
//     color: #d5322c;
//     &:hover {
//       color: #e66f6a;
//     }
//     &.router-link-exact-active {
//       color: white;
//     }
//   }
// }
</style>
