<template>
  <div id="nav">
    <img class="grasshopper" src="./assets/grasshopper.png" />
    <router-link to="/">
      <span class="hellohopper"><span>Hello</span> <span>Hopper</span></span>
    </router-link>
    <router-link to="/about">Our Plans</router-link>
    <router-link to="/about">How It Works</router-link>
    <router-link to="/about">Our Menus</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link class="signup" to="/about">
      <span>Sign</span> <span>up</span>
    </router-link>
  </div>
  <router-view />
</template>

<style>
body {
  width: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/background.webp");
}

#nav {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.67);
  text-align: left;
  padding: 15px;
}

#nav .hellohopper {
  font-size: 2em;
  font-weight: bold;
}
#nav .hellohopper > span:first-child {
  color: #4f5458;
}
#nav .hellohopper > span:last-child {
  color: #228c22;
}
#nav .signup {
  background-color: #4f5458;
  border: 1px solid #707070;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 10px 5px;
  font-weight: bold;
}
#nav .signup > span:first-child {
  color: white;
}
#nav .signup > span:last-child {
  color: #228c22;
}

.grasshopper {
  width: auto;
  height: 80px;
}

#nav a {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.5em;
  color: #4f5458;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
