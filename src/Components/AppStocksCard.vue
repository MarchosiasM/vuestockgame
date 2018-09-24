<template>
  <div>
    {{ name }} {{ value }}
    <div class="form-group">
      <input class="form-control" type="text" v-model="stockNo">
      <button @click="handleSubmit"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: Number
  },
  data() {
    return {
      stockNo: 0
    };
  },
  methods: {
    handleSubmit() {
      const fundsNo = this.value * this.stocksNo;
      const { name, stockNo } = this;
      this.$store.dispatch('buyStock', {
        name,
        stockNo,
        fundsNo
      });
    }
  }
};
</script>
