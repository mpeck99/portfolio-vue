<template>
  <footer>
    <p>@{{ currentYear.getFullYear() }} Morgan Peck</p>
  </footer>
</template>

<script>
export default {
  data: function() {
    return {
      currentYear: new Date()
    };
  }
};
</script>

<style lang="scss">
footer {
  p {
    font-weight: 500;
    color: $turquoise;
  }
}
</style>
