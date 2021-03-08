<template>
  <header class="header">
    <a href="/">
      <img src="./assets/images/logo-mp.png" alt="MP Logo" class="logo" />
    </a>
    <navigation />
  </header>

  <router-view />
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation';

export default {
  name: 'Home',
  components: {
    Navigation
  },

};
</script>

<style lang="scss">
.header {
  min-height: 6rem;
  width: 100%;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;

  grid-row: 1 / 2;
  grid-column: 1 / 2;

  align-items: center;

  margin: 0;
  padding: 1rem;

  button {
    grid-row: 1 / 2;
    grid-column: 2 / 3;

    justify-self: flex-end;

    background: none;
    border: 0;

    &:hover,
    &:focus {
      color: $coral;

      cursor: pointer;
    }
  }
}

.logo {
  width: 5rem;
  height: auto;

  grid-row: 1 / 2;
  grid-column: 1 / 2;

  margin-top: 0.5rem;
}
</style>
