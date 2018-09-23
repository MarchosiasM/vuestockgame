<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#" class="navbar-brand">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a href="#" class="nav-link">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              Stocks
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              Portfolio
            </a>
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
  </div> 
</template>

<script>
export default {
  data() {
    return {
      funds: 10000
    };
  }
};
</script>
