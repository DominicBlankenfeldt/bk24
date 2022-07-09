<template>
  <div class="view row d-flex justify-content-center m-auto">
    <div class="p-0">
      <Banner
        headline="Unsere Türen zum Glück!"
        bannerSrc="tueren-banner.jpg"
        text="Innerhalb einer ansprechend designten Immobilie stellt die Eingangstür in der Regel das unübersehbare Zentrum dar. Um das Gebäude zu betreten, führt an dieser kein Weg vorbei, weshalb der erste Eindruck des Hauses meist direkt an der Tür entsteht. Achten Sie deshalb darauf, dass dieser Eindruck für Sie möglichst positiv ausfällt und suchen sich die passende Tür aus."
      />
      <div style="">
        <div class="d-flex justify-content-center mt-4 pt-4">
          <h1>Unseren Favoriten auf einem Blick</h1>
        </div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex justify-content-evenly">
                <card /><card /><card /><card /><card />
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex justify-content-evenly">
                <card /><card /><card /><card /><card />
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-flex justify-content-evenly">
                <card /><card /><card /><card /><card />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev btn-controls"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
            style="width: 2%; color: black; opacity: 0.2"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-caret-left-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
                />
              </svg>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next btn-controls"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            style="color: black; width: 2%; opacity: 0.2"
          >
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                />
              </svg>
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <CBanner
        headline="Die perfekte Tür für ihr Haus - In 5 einfachen Schritten!"
      />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card.vue";
import CBanner from "@/components/Configbanner.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    Card,
    CBanner,
    Banner,
    Footer,
  },
  setup() {
    return;
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
.view {
  background-color: white;
  width: 98vw;
  height: 88.5vh;
  overflow: auto;
}
.side {
  position: relative;
  text-align: center;
}
.headline {
  color: white;
  font-size: 5vh;
  font-weight: bold;
  background-color: #d5322c;
  @media (max-width: 550px) {
    font-size: 4vh;
  }
}
.headerPic {
  height: 40vh;
  width: 100% !important;
  object-fit: cover;
  object-position: top 5% center;
}
.seal {
  position: absolute;
  height: 10vh;
}
</style>
