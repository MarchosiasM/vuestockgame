<template>
  <div class="col-sm-6 col-md-4 app-stocks-card card m-2">
    <div class="card-header">
        <h3 class="Card-Title">
          {{ name }} </h3>
          <small>Price: {{ price }}
          </small>
        
        <div class="card-body">
          <div class="pull-left">
            <div class="form-group">

            <input 
              type="number" 
              class="form-control"
              placeholder="Quantity"
              v-model.number="count"
              @input="capValue"
              >
          </div>
            </div>
          <div class="pull-right"
          >
          <button class="btn btn-primary"
            @click="handleSubmit"
            :disabled="count <= 0 || !Number.isInteger(count) || count < maxBuy">
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
      count: 0
    };
  },
  computed: {
    maxBuy() {
      return Math.floor(this.$store.state.funds / this.price);
    }
  },
  methods: {
    capValue() {
      if (this.count > this.maxBuy) {
        console.log('Max buy is ', this.maxBuy);
        this.count = this.maxBuy;
      }
    },
    handleSubmit() {
      const { name, count, price, index } = this;
      this.$store.dispatch('buyStocks', {
        name,
        count,
        price,
        index
      });
      this.count = 0;
    }
  }
};
</script>

<style>
</style>
