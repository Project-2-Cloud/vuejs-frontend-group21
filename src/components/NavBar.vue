<template>
  <nav>
    <router-link to="/" class="d-flex align-items-center">
      <img class="grasshopper" src="../assets/grasshopper.png" />
      <span class="hellohopper"><span>Hello</span> <span>Hopper</span></span>
    </router-link>
    <span>How It Works</span>
    <router-link to="/Subscriptions">Our Subscriptions</router-link>
    <span>About Us</span>
    <router-link
      to="/"
      tag="div"
      v-if="!isAuthenticated"
      @click="onLoginClicked"
      class="login d-flex align-items-center"
    >
      <span>Log</span> <span>in</span>
    </router-link>
    <div
      class="d-flex justify-content-between li-pointer nav-item"
      style="width: 220px"
    >
      <div v-if="isAuthenticated" class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ getUserName() }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Account Settings</a>
          <a v-if="isPartner" @click="onRegisterClicked" class="dropdown-item" href="#">Register Product</a>
          <a @click="onLogoutClicked" class="dropdown-item"
            >Logout {{ userEmail }}</a
          >
        </div>
      </div>
      <ShoppingCart />
    </div>
  </nav>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";
export default {
  name: "NavBar",
  components: { ShoppingCart },
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    },
    isPartner() {
      return this.$store.state.user.partner;
    },
  },
  methods: {
    onLoginClicked() {
      window.location = this.$store.state.endpoints.login;
    },
    onLogoutClicked() {
      this.$store.commit("logout");
    },
    getUserName() {
      return this.$store.state.user.name;
    },
    onRegisterClicked() {
      let obj = { 'description': 'description', 'id': parseInt("1"), 'price': parseInt("1000"), 'quantity': parseInt("10"), 'thumbnail_url': "thumbnail_url", 'title': "title" }
      this.$store.dispatch("registerProduct", obj);
    },
  }
};
</script>

<style scoped>
nav {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.67);
  text-align: left;
  padding: 15px;
  box-shadow: 0px 6px 6px #00000029;
  height: 10vh;
}

nav .grasshopper {
  height: 80px;
}

nav .hellohopper {
  font-size: 2em;
  font-weight: bold;
  vertical-align: middle;
  padding-left: 10px;
}
nav .hellohopper > span:first-child {
  color: #4f5458;
}
nav .hellohopper > span:last-child {
  color: #228c22;
}
nav .login {
  background-color: #4f5458;
  border: 1px solid #707070;
  border-radius: 30px;
  box-sizing: border-box;
  font-weight: bold;
  padding: 0 20px;
}
nav .login > span:first-child {
  color: white;
}
nav .login > span:last-child {
  color: #228c22;
}

nav a,
nav span {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.5em;
  color: #4f5458;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.dropdown-item {
  font-size: 1rem;
  cursor: pointer;
}
</style>
