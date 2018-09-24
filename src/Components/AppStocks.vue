<template>
  <div class="container">
    <div class="row">
      <div v-for="company in companies" :key="company.index">
        <app-stocks-card :name="company.name" :price="company.price">

        </app-stocks-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppStocksCard from './AppStocksCard.vue';
export default {
  components: {
    AppStocksCard
  },
  data() {
    return {
      companies: this.$store.state.companies
    };
  }
};
</script>
