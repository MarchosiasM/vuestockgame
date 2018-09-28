<template>
  <div class="col-sm-6 col-md-3 app-stocks-card card m-2">
    <div class="card-header">
        <h3 class="Card-Title">
          {{ name }} 
          <small>Price: {{ price }}
          </small>
        </h3>
        <div class="card-body">
          <div class="pull-left">
            <div class="form-group">

            <input 
              type="number" 
              class="form-control"
              placeholder="Quantity"
              v-model="count"
              >
          </div>
            </div>
          <div class="pull-right"
          >
          <button class="btn btn-primary"
            @click="handleSubmit">
            Buy
          </button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    index: Number
  },
  data() {
    return {
      count: ''
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      const { name, count, price, index } = this;
      this.$store.dispatch('buyStocks', {
        name,
        count,
        price,
        index
      });
    }
  }
};
</script>

<style>
</style>
