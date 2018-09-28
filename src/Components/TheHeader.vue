<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link to="/" class="navbar-brand"><a>
        Stocks App
        </a></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <router-link to="/stocks" activeClass="active" tag="li">
            <a class="nav-link">
              Stocks
            </a>
            </router-link>
            <router-link to="/portfolio" activeClass="active" tag="li">
            <a class="nav-link">
              Portfolio
            </a>
            </router-link>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item ml-auto">
            <a class="nav-link" @click="endDay">
              End Day
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              Save & Load
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              Funds: {{ funds }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    endDay() {
      this.$store.dispatch('nextDay');
    }
  }
};
</script>
