<template>
  <div>
    <h1>Here will be list of subscription options</h1>

    <div class="container">
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