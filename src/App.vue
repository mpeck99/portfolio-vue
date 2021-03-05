<template>
  <navigation />
  <router-view />
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation';

export default {
  name: 'Home',
  components: {
    Navigation
  }
};
</script>

<style lang="scss"></style>
