<template>
  <div>
    <h1>Pick your poison</h1>

    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <Product
            v-for="product in products"
            :key="product.id"
            :item="product"
            :title="product.title"
            :category="product.category"
            :description="product.description"
            :price="product.price"
            :thumbnail_url="product.thumbnail_url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "Home",
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  components: {
    Product
  }
};
</script>
<style scoped>
div h1 {
  text-align: center;
  color: white;
  padding: 0.5rem 2rem;
  background-color: rgba(204, 204, 204, 0.27);
  width: fit-content;
  margin: 0.5rem auto 2rem;
  border-radius: 0.5rem;
}
div.container-fluid, div.container{
  width: 100%;
  margin: 0 auto; 
}
div.row{
  justify-content: center;
}
</style>