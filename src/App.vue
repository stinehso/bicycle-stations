<script setup>
import StationList from './components/StationList.vue';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <TheHeader class="header" />
  <StationList />
</template>

<style scoped>
header {
  display: flex;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    justify-content: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
