<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" href="#" class="navbar-brand" @click="$router.push('home')"><a>
        Stocks App
        </a></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/stocks">
            <a class="nav-link" @click="$router.push('stocks')">
              Stocks
            </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio">
            <a class="nav-link" @click="$router.push('portfolio')">
              Portfolio
            </a>
            </router-link>
          </li>
          <li class="nav-item ml-auto">
            <a class="nav-link">
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
  }
};
</script>
