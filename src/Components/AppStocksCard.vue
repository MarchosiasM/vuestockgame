<template>
  <div class="app-stocks-card col-md-6">
    <p>Stock: {{ name }} Price: {{ price }}</p>
    <div class="form-group">
      <input class="form-control" type="text" v-model="count">
      <button 
      class="btn btn-primary"
      @click="handleSubmit">Purchase</button>
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
