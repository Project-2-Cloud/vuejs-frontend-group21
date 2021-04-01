<template>
  <div class="container">
    <div class="container bg-white p-5 m-5 rounded">
      <form action="#" @submit="register">
        <div class="form-group">
          <label for="title">Product name</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="title"
            id="title"
            placeholder="Enter name"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Product description</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="description"
            id="description"
            placeholder="Enter description"
            required
          />
        </div>
        <div class="form-group">
          <label for="thumbnail_url">Thumbnail</label>
          <select id="thumbnail_url" class="form-control">
            <option>small.png</option>
            <option>medium.png</option>
            <option>large.png</option>
          </select>
        </div>
        <div class="form-group">
          <label for="quantity">Quantity</label>
          <input
            type="number"
            min="1"
            class="form-control"
            v-model.number="quantity"
            id="quantity"
            placeholder="Enter quantity"
            required
          />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            min="0"
            class="form-control"
            v-model.number="price"
            id="price"
            placeholder="Enter description"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxCreation",
  methods: {
    register(event) {
      event.preventDefault();
      this.$store.dispatch("registerProduct", {
        title: title.value,
        description: description.value,
        thumbnail_url: thumbnail_url.value,
        quantity: quantity.value,
        price: price.value
      });
    }
  },
  mounted() {
    quantity.value = 1;
  }
};
</script>

