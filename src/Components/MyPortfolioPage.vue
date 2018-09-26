<template>
  <div class="container">
    <div v-for="company in myStocks" :key="company.index">
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
  computed: {
    myStocks() {
      return this.$store.getters.fullPortfolioData;
    }
  }
};
</script>
