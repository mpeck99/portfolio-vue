<template>
  <button class="hamburger-menu">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <nav class="main-nav" aria-label="Navigation">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/about">Portfolio</router-link>
    <router-link to="/about">Movies</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-nav {
  display: none;

  font-family: $main;
  font-size: 1rem;
  font-weight: 700;

  a,
  &:visited {
    padding: 0.25rem;

    color: $turquoise;
    text-decoration: none;

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    &.active {
      border-bottom: 0.25rem solid $coral;
    }
  }

  ul {
    display: flex;

    li {
      margin: 0 2rem;

      list-style: none;

      &:hover,
      &:focus {
        transform: translateY(0.5rem);
        transition: 0.5s ease;
      }
    }
  }

  &.js-open {
    height: 100%;
    width: 100%;

    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;

    background-color: $turquoise;

    overflow: hidden;
    animation: slideDown 0.5s ease-in-out;

    ul {
      height: 100%;

      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      padding: 0;
      margin: 0;

      font-size: 2rem;
    }
    a {
      color: $navy;
      border-bottom-color: $coral;
    }
  }

  &.js-close {
    animation: slideUp 0.5s ease-in-out;
  }

  @include tablet {
    display: block;
  }
}
</style>
