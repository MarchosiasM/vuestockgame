<template>
    <div class="row m-3">
        <app-stocks-card v-for="company in companiesArray" :key="company.index"
          :name="company.name" 
          :price="company.price"
          :index="company.index">

        </app-stocks-card>
    </div>
</template>

<script>
import AppStocksCard from './AppStocksCard.vue';
export default {
  components: {
    AppStocksCard
  },
  methods: {
    getCompaniesArray() {
      return this.$store.getters.fullCompanyData;
    }
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
