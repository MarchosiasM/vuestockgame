<template>
  <div class="container">
    <h1>Trade or View Your Portfolio</h1>
    <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <hr>
    <h2>Your Funds: {{ funds }}</h2>
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
