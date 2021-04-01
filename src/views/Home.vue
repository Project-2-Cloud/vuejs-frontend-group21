<template>
  <div class="home">
    <div class="d-flex flex-column first-page">
      <div class="discover">DISCOVER THE NEW CUISINE OF INSECTS</div>
      <router-link to="/subscriptions" class="plans"
        >View our plans</router-link
      >
      <div class="button-next-page" @click="scroll()"></div>
    </div>
    <div class="container-fluid text-center p-3 bg-grey">
      <h1>Innovative and tasty recipes</h1>
      <div class="mb-5 h4 m-5">
        Each recipe has been curated by world class chefs. Whether they are used
        to insects or not, they loved it, and so will you!
      </div>
      <div id="carouselImages" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#carouselImages"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselImages" data-slide-to="1"></li>
          <li data-target="#carouselImages" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <img
                    class="d-block"
                    height="200"
                    src="../assets/big_mexican_grasshoppers.png"
                    alt="First slide"
                  />
                </div>
                <div class="col-sm">
                  <img
                    class="d-block"
                    height="200"
                    src="../assets/black_ant_quacamole.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="col-sm">
                  <img
                    class="d-block"
                    height="200"
                    src="../assets/carrot_buffalo_worm_soop.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <img
                    class="d-block"
                    height="200"
                    src="../assets/cricket_mealworm_grasshopper_burger.png"
                    alt="First slide"
                  />
                </div>
                <div class="col-sm">
                  <img
                    class="d-block"
                    height="200"
                    src="../assets/paleo_cricket_snaps.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="col-sm">
                  <img
                    class="d-block"
                    height="200"
                    src="../assets/cricket_powder_bananabread.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <img
                    class="d-block"
                    height="200"
                    src="../assets/ramen_nagi.jpg"
                    alt="First slide"
                  />
                </div>
                <div class="col-sm">
                  <img
                    class="d-block"
                    height="200"
                    src="../assets/ground_cricket_bread_garnish.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="col-sm">
                  <img
                    class="d-block"
                    height="200"
                    src="../assets/maroccan_summer_salad.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <router-link
          to="/subscriptions"
          tag="button"
          type="button"
          class="btn btn-primary m-5"
          >Get Cooking</router-link
        >
      </div>
    </div>
    <div class="second-page container-fluid bg-white">
      <div class="row">
        <img
          src="../assets/paleo_cricket_snaps.jpg"
          class="col-sm p-0 side-img"
        />
        <div class="col-5 text-center m-5">
          <h1>What's in the box</h1>
          <ul class="text-left m-5">
            <li class="m-2">Easy-to-follow recipes with clear steps</li>
            <li class="m-2">High-quality ethically sourced ingredients</li>
            <li class="m-2">Per-meal box easily organize your fridge</li>
            <li class="m-2">Exotic yet local flavours for you to experience</li>
          </ul>
          <router-link
            to="/subscriptions"
            tag="button"
            type="button"
            class="btn btn-primary"
            >Choose My Plan</router-link
          >
        </div>
      </div>
    </div>
    
  </div>
  <div class="third-page container-fluid bg-white">
    <div class="row">
      <div class="col-5 text-center m-5">
        <h1>The most ecological source of protein on the planet</h1>
        <ul class="text-left m-5">
          <li class="m-2">Bugs farmed in-house</li>
          <li class="m-2">Least water per meat required</li>
          <li class="m-2">No animal suffering</li>
          <li class="m-2">Better for the environment</li>
        </ul>
        <router-link
          to="/subscriptions"
          tag="button"
          type="button"
          class="btn btn-primary"
          >Go Nature</router-link
        >
      </div>
      <img src="../assets/ecology.jpg" class="col-sm p-0 side-img" />
    </div>
  </div>
  <div class="third-page container-fluid bg-grey">
    <div class="row">
      <img
        src="../assets/carrot_buffalo_worm_soop.jpg"
        class="col-sm p-0 side-img"
      />
      <div class="col-5 text-center m-5">
        <h1>It's just that easy</h1>
        <ol class="count text-left m-5 h4">
          <li class="m-4">Choose a box</li>
          <li class="m-4">Create an account</li>
          <li class="m-4">Add your address</li>
          <li class="m-4">Enjoy!</li>
        </ol>
        <router-link
          to="/subscriptions"
          tag="button"
          type="button"
          class="btn btn-primary"
          >Get started</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "@/Item.vue";
export default {
  name: "Home",
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    scroll() {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  },
  components: {
    Item
  }
};
</script>
<style scoped>
.first-page {
  height: 90vh;
}
.plans {
  display: block;
  width: 250px;
  position: static;
  right: calc(50% - 125px);
  background-color: #1e7f3f;
  border-radius: 20px;
  color: white;
  font-size: 1.7em;
  margin: 20vh auto auto;
  padding: 5px;
  text-align: center;
  text-decoration: none;
}
.button-next-page {
  display: block;
  width: 60px;
  height: 60px;
  position: static;
  margin: 10vh auto 0;
  background-color: white;
  border: 3px solid #1e7f3f;
  border-radius: 100%;
  animation: click-me 10s infinite;
  margin-bottom: 100px;
}
.button-next-page::after {
  display: block;
  content: "";
  width: 30px;
  height: 30px;
  border: 3px solid #1e7f3f;
  border-top: 0;
  border-right: 0;
  transform: rotate(-45deg);
  margin: 10px auto;
}
.sep {
  margin-top: 100vh;
}
.discover {
  color: white;
  font-size: 2.75em;
  width: max-content;
  padding: 0 10px;
  font-weight: bold;
  text-align: center;
  background: #474e46bd 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 6px #00000029;
  border-radius: 16px;
  margin: auto;
}
.bg-grey {
  background-color: #e1e1e1;
}

@keyframes click-me {
  0%,
  95%,
  100% {
    transform: none;
  }
  97% {
    transform: translate(0, -20px);
  }
  99% {
    transform: translate(0, 10px);
  }
}

ul li::before {
  content: "\2713";
  display: inline-block;
  color: green;
  padding: 0 6px 0 0;
}
ul li {
  list-style-type: none;
  font-size: 1.5em;
}
ol.count {
  list-style: none;
  counter-reset: cnt;
}
ol.count li {
  counter-increment: cnt;
}
ol.count li::before {
  content: counter(cnt) ". ";
  color: #1e7f3f;
  font-weight: bold;
}
.carousel-indicators {
  bottom: -50px;
}
.carousel-indicators > li {
  width: 20px;
  height: 20px;
  border: 3px solid #1ebd4a;
  border-radius: 50%;
  background-color: white;
}
.carousel-indicators > li.active {
  background-color: #1e7f3f;
}
img.d-block {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
img.side-img {
  width: 790px !important;
}
</style>
