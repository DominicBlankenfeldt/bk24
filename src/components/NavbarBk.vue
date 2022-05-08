<template>
  <div>
    <input type="checkbox" id="burger-toggle" />
    <label for="burger-toggle" class="burger-menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
    <div class="menu">
      <div class="menu-inner">
        <ul class="menu-nav">
          <li class="menu-nav-item">
            <a class="menu-nav-link" href="#"
              ><span>
                <router-link to="/" @click="closeNavbar()">Home</router-link>
              </span></a
            >
          </li>
          <li class="menu-nav-item">
            <a class="menu-nav-link" href="#"
              ><span>
                <router-link to="/shop" @click="closeNavbar()"
                  >Shop</router-link
                >
              </span></a
            >
          </li>
          <li class="menu-nav-item">
            <a class="menu-nav-link" href="#"
              ><span>
                <router-link to="/service" @click="closeNavbar()"
                  >Service</router-link
                >
              </span></a
            >
          </li>
          <li class="menu-nav-item">
            <a class="menu-nav-link" href="#"
              ><span>
                <router-link to="/team" @click="closeNavbar()"
                  >Team</router-link
                >
              </span></a
            >
          </li>
        </ul>
        <div class="gallery">
          <div class="images">
            <a class="image-link" href="#" @click="closeNavbar()">
              <div class="image" data-label="Fenster">
                <img src="../assets/fenster.jpg" alt="" style="width: 100%" />
              </div>
            </a>
            <a class="image-link" href="#" @click="closeNavbar()">
              <div class="image" data-label="Türen">
                <img src="../assets/tür.jpg" alt="" />
              </div>
            </a>
            <a class="image-link" href="#" @click="closeNavbar()">
              <div class="image" data-label="Baustoffe">
                <img src="../assets/baustoffe.jpg" alt="" />
              </div>
            </a>
            <a class="image-link" href="#" @click="closeNavbar()">
              <div class="image" data-label="Zubehör">
                <img src="../assets/zubhör.jpg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="contacts d-flex justify-content-center pt-2 pb-2"
      style="border-bottom: solid 1px #d5322c; font-weight: bold"
    >
      <div style="color: #d5322c">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-telephone-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          />
        </svg>
        04347 / 901 03 47
      </div>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <div style="color: #d5322c">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-envelope-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
          />
        </svg>
        info@baukoenig24.de
      </div>
    </div>
    <div class="logo d-flex justify-content-end pt-2 px-4">
      <router-link to="/"
        ><img alt="Logo" src="../assets/logo.png" style="height: 10vh"
      /></router-link>
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
    closeNavbar() {
      var inputs = document.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
          if (inputs[i].checked == true) {
            inputs[i].checked = false;
          } else {
            return;
          }
        }
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

@mixin sp-layout {
  @media screen and (max-width: 750px) {
    @content;
  }
}

@mixin pc-layout {
  @media screen and (min-width: 751px) {
    @content;
  }
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

p {
  margin: 0;
}

#burger-toggle {
  position: absolute;
  appearance: none;
  opacity: 0;

  &:checked {
    & ~ .menu {
      backdrop-filter: blur(1px);
      opacity: 1;
      visibility: visible;

      .menu-nav-link span div,
      img,
      .title p {
        transform: translateY(0);
        transition: 1.2s 0.1s cubic-bezier(0.35, 0, 0.07, 1);
      }

      .image-link {
        @for $i from 1 through 4 {
          &:nth-child(#{$i}) img {
            transition-delay: 0.1s + 0.08s * $i;
          }
        }
      }
    }

    & ~ .burger-menu {
      .line {
        &::after {
          transform: translateX(0);
        }

        &:nth-child(1) {
          transform: translateY(calc(var(--burger-menu-radius) / 5))
            rotate(45deg);
        }

        &:nth-child(2) {
          transform: scaleX(0);
        }

        &:nth-child(3) {
          transform: translateY(calc(var(--burger-menu-radius) / -5))
            rotate(-45deg);
        }
      }
    }
  }
}

.burger-menu {
  --burger-menu-radius: 4em;

  position: fixed;
  top: 5vh;
  left: 5vw;
  z-index: 100;
  display: block;
  width: var(--burger-menu-radius);
  height: var(--burger-menu-radius);
  outline: none;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.178);
    border-radius: 5px;
  }
  .line {
    position: absolute;
    left: 25%;
    width: 50%;
    height: 3px;
    background: #d5322c;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s;

    &:nth-child(1) {
      top: 30%;
    }

    &:nth-child(2) {
      top: 50%;
    }

    &:nth-child(3) {
      top: 70%;
    }

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary-color-darker);
      transform: translateX(-100%);
      transition: 0.25s;
    }

    @for $i from 2 through 3 {
      &:nth-child(#{$i})::after {
        transition-delay: 0.1s * ($i - 1);
      }
    }
  }

  &:hover {
    .line::after {
      transform: translateX(0);
    }
  }
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d6d6d66b;
  opacity: 0;
  overflow-x: hidden;
  visibility: hidden;
  transition: 0.3s;

  @include sp-layout {
    display: block;
  }

  &-nav {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style-type: none;

    @include sp-layout {
      flex-direction: column;
    }

    &-item {
      flex: 1;
    }

    &-link {
      position: relative;
      display: inline-flex;
      font-size: 2rem;
      color: white;
      text-decoration: none;

      span {
        overflow: hidden;

        div {
          transform: translateY(102%);
        }
      }

      &::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--primary-color);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  .gallery {
    margin-top: 60px;
    text-align: center;
  }

  .title {
    font-size: 24px;
    color: white;
    overflow: hidden;

    p {
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      transform: translateY(102%);
    }
  }

  .images {
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;

    @include sp-layout {
      justify-content: center;
    }

    .image-link {
      width: 15vw;
      margin: 0 12px;
      overflow: hidden;

      @include sp-layout {
        width: 40vw;
        margin: 0 12px 12px 0;
      }

      .image {
        position: relative;
        transition: 0.6s;

        &::before {
          position: absolute;
          content: attr(data-label);
          top: 0;
          left: 0;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: white;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: 0.4s;
        }
      }

      &:hover .image {
        transform: scale(1.2);

        &::before {
          opacity: 1;
        }
      }
    }

    img {
      height: 250px;
      transform: translateY(102%);
    }
  }
}
a {
  text-decoration: none;
  color: #d5312c;
  font-weight: bold;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.79);
  &:hover {
    color: white;
  }
}
</style>
