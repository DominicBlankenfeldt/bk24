<template>
  <navbar />
  <router-view />
  <div class="footer d-flex justify-content-center">
    <router-link to="/impressum">Impressum</router-link>
    &nbsp; | &nbsp;
    <router-link to="/datenschutz">Datenschutz</router-link>
  </div>
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
body {
  margin: 0px !important;
  background-image: url("https://images.pexels.com/photos/10003490/pexels-photo-10003490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  backdrop-filter: blur(5px);
  height: 90vh;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #000000;
}
.footer {
  color: #d5322c;
  font-weight: bold;
  a {
    color: #d5322c;
    &:hover {
      color: #e66f6a;
    }
    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
