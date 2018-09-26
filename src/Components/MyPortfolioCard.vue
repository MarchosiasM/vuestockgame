<template>
  <div class="my-portfolio-card col-md-6">
    <p>Name: {{ name }} || Count: {{ count }} || Price: {{ price }} </p>
    <div class="form-group">
      <input v-model.number="sellCount" type="text">
      <button 
        class="btn btn-primary"
        @click="handleSubmit"
      >Sell</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sellCount: 0
    };
  },
  props: {
    name: String,
    price: Number,
    count: Number,
    index: Number
  },
  methods: {
    handleSubmit() {
      const { name, sellCount, price, index } = this;
      this.$store.dispatch('sellStocks', {
        name,
        count: sellCount,
        price,
        index
      });
    }
  }
};
</script>
