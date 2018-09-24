<template>
  <div class="app-stocks-card">
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
    price: Number
  },
  data() {
    return {
      count: 0
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      const { name, count, price } = this;
      this.$store.dispatch('buyStocks', {
        name,
        count,
        price
      });
    }
  }
};
</script>
