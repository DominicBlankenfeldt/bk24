<template>
  <div class="Navbar gx-0 d-flex row align-items-end">
    <div class="col-2 d-flex justify-content-evenly">
      <router-link
        to="/"
        @click="isActive = ''"
        :class="{ choosed: isActive === 'home' }"
        style="border-bottom: #d5322c solid 4px"
        ><img src="../assets/logo.png" alt="" style="height: 10vh"
      /></router-link>
    </div>
    <div class="navigation col-9 justify-content-evenly">
      <div class="row justify-content-evenly gx-0">
        <div class="trust-nav col-12 gx-0 row mb-2 p-1">
          <div class="col-3 d-flex">
            <img src="../assets/telephone.png" alt="" style="height: 4vh" />
            <div>
              <b>&nbsp;+49 1234 567890</b> <br />
              <div style="font-size: small">
                &nbsp; &nbsp;Mo. - Fr. 08 - 19 Uhr
              </div>
            </div>
          </div>
          <div class="col-3 d-flex">
            <img src="../assets/saver.png" alt="" style="height: 4vh" />
            <div>
              <b>&nbsp;Umweltbewusst</b>
              <div style="font-size: small">
                &nbsp;Nachhaltig Dank neuester Standards
              </div>
            </div>
          </div>
          <div class="col-3 d-flex">
            <img
              src="../assets/customer-service.png"
              alt=""
              style="height: 4vh"
            />
            <div>
              <b>&nbsp;Nummer 1 im Service</b>
              <div style="font-size: small">
                &nbsp;vereinbaren Sie Hausbesuche
              </div>
            </div>
          </div>
          <div class="col-3 d-flex">
            <img src="../assets/trusted.png" alt="" style="height: 5vh" />
            <div>
              <b>&nbsp;Trusted Partner</b>
              <div style="font-size: small">
                &nbsp;Autorisierter Vertriebspartner
              </div>
            </div>
          </div>
        </div>
        <router-link
          to="/fenster"
          @click="isActive = 'Fenster'"
          :class="{ choosed: isActive === 'Fenster' }"
          >Fenster</router-link
        ><router-link
          to="/tueren"
          @click="isActive = 'Türen'"
          :class="{ choosed: isActive === 'Türen' }"
          >Türen</router-link
        ><router-link
          to="/baustoffe"
          @click="isActive = 'Rollladen'"
          :class="{ choosed: isActive === 'Rollladen' }"
          >Rollladen</router-link
        >
        <router-link
          to="/baustoffe"
          @click="isActive = 'Zubehör'"
          :class="{ choosed: isActive === 'Zubehör' }"
          >Zubehör</router-link
        >
        <router-link
          to="/baustoffe"
          @click="isActive = 'Baustoffe'"
          :class="{ choosed: isActive === 'Baustoffe' }"
          >Baustoffe</router-link
        >
      </div>
    </div>
    <div class="nav-end col-1">
      <div class="d-flex justify-content-evenly mb-2" style="color: #d5322c">
        <router-link to="/fenster"
          ><img src="../assets/user.png" alt="" style="height: 3vh" />
        </router-link>
        <router-link to="/fenster"
          ><img src="../assets/enter.png" alt="" style="height: 3vh" />
        </router-link>
      </div>
      <div class="d-flex justify-content-center" style="color: #d5322c">
        <router-link to="/fenster"
          >Warenkorb
          <div class="cart-circle d-flex justify-content-center">
            {{ cart.length }}
          </div></router-link
        >
      </div>
      <div class="d-flex justify-content-center">0,00 €</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      isActive: "",
      cart: [],
    };
  },
  setup() {
    return;
  },
  methods: {},
});
</script>

<style scoped lang="scss">
.Navbar {
  background: #eeeeee;
  border-bottom: solid 1px #dbdbdb;

  .navigation {
    a {
      width: 10rem;
    }
    border-left: solid 1px #dbdbdb;
    border-right: solid 1px #dbdbdb;
  }
  a {
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 500;
    text-decoration: none;
    color: black;
    &:hover {
      color: #d5322c;
    }
    &.choosed {
      box-shadow: inset 0 -4px 0 #d5322c;
      transform: scale(1.2);
    }
    &.router-link-exact-active {
      color: white;
    }
  }
}
.trust-nav {
  background-color: rgb(219, 219, 219);
}
.cart-circle {
  background-color: #d5322c;
  border-radius: 50%;
  width: 31px;
  color: white;
}
</style>
