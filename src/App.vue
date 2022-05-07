<template>
  <navbar />
  <router-view />
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
  //background: linear-gradient(45deg, #fde6a0 0%, #d17f7c 100%);
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  //text-align: center;
  color: #000000;
}
</style>
