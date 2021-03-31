<template>
  <div class="product">
    <div>
      <h2>{{ title }}</h2>
      <h3>{{ category }}</h3>
    </div>
    <div>
      <img :src="thumbnail_url" :alt="thumbnail_url" :title="thumbnail_url">
      <h3>€{{ price }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    title: String,
    category: String,
    description: String,
    price: Number,
    thumbnail_url: String
  }
};
</script>

<style scoped>
.product {
  display: flex;
  flex-flow: column;
  width: 250px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 6px #00000029;
  padding: 5px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.product > div:first-child {
  display: flex;
  text-align: center;
}
.product > div:last-child,
.product > div:first-child > div {
  border: 1px solid black;
  border-radius: 5px;
  flex-grow: 1;
}

.product > div:first-child > div {
  width: 50%;
  margin: 5px;
}

.product > div:last-child > div:first-child {
  height: 200px;
  width: 100%;
  font-size: 2em;
  transform: rotate(45deg);
  transform-origin: center center;
  vertical-align: middle;
  text-align: center;
  padding: 40%;
}
.product > div:last-child > div:last-child {
  font-size: 1.2em;
  position: relative;
  top: 10px;
  text-align: right;
  right: 0px;
}
</style>
