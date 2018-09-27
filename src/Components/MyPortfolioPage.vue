<template>
  <div class="container">
    <div v-for="company in nonZeroStocks" :key="company.index">
      <my-portfolio-card
        :name="company.name"
        :count="company.count"
        :price="company.price"
        :index="company.index">

      </my-portfolio-card>
    </div>
  </div>
</template>

<script>
import MyPortfolioCard from './MyPortfolioCard.vue';
export default {
  components: {
    MyPortfolioCard
  },
  methods: {},
  computed: {
    myStocks() {
      console.log('My stocks is updated');
      return this.$store.getters.fullPortfolioData;
    },
    nonZeroStocks() {
      return this.$store.getters.nonZeroPortfolioData;
    }
  }
};
</script>
