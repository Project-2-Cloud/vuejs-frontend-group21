<template>
  <NavBar />
  <router-view />
</template>

<style>
body {
  width: 100%;
  margin: 0;
}

#app {
  font-family: Verdana, Geneva, sans-serif;
  color: #4f5458;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("assets/big_mexican_grasshoppers.png");
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 100vh;
}

.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited {
  background-color: #1e7f3f !important;
  color: white;
  border-color: #228c22;
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  mounted() {
    this.$store.dispatch("getProducts");
  },

  name: "App",
  components: {
    NavBar
  }
};
</script>
