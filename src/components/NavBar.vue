<template>
  <nav>
    <router-link to="/">
      <img class="grasshopper" src="../assets/grasshopper.png" />
      <span class="hellohopper"><span>Hello</span> <span>Hopper</span></span>
    </router-link>
    <router-link to="/plans">Our Plans</router-link>
    <router-link to="/how-it-works">How It Works</router-link>
    <router-link to="/menus">Our Menus</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link class="signup" to="/signup">
      <span>Sign</span> <span>up</span>
    </router-link>
    <router-link
      to="/"
      tag="li"
      v-if="!isAuthenticated"
      class="nav-item"
      active-class="active"
    >
      <a @click="onLoginClicked" class="nav-link">Login</a>
    </router-link>
    <li v-if="isAuthenticated" class="li-pointer nav-item">
      <div class="dropdown">
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
          <a @click="onLogoutClicked" class="dropdown-item"
            >Logout {{ userEmail }}</a
          >
        </div>
      </div>
    </li>
    <li>
      <ShoppingCart />
    </li>
  </nav>
</template>

<script>
import ShoppingCart from "./ShoppingCart.vue";
export default {
  name: "NavBar",
  components: { ShoppingCart },
  name: "NavHeader",
  computed: {
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : "";
    },
    isAuthenticated() {
      return this.$store.state.user.isAuthenticated;
    }
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
    }
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
}

nav .grasshopper {
  width: auto;
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
nav .signup {
  background-color: #4f5458;
  border: 1px solid #707070;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 10px 30px;
  font-weight: bold;
}
nav .signup > span:first-child {
  color: white;
}
nav .signup > span:last-child {
  color: #228c22;
}

nav a {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.5em;
  color: #4f5458;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
