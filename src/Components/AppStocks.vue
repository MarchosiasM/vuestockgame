<template>
  <div class="container">
    <div class="row">
      <div v-for="company in companiesArray" :key="company.index">
        <app-stocks-card 
          :name="company.name" 
          :price="company.price"
          :index="company.index">

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
  computed: {
    companiesArray() {
      return this.$store.getters.fullCompanyData;
    }
  },
  data() {
    return {};
  }
};
</script>
