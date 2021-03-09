<template>
  <footer>
    <p>@{{ currentYear.getFullYear() }} Morgan Peck</p>
    <ul class="social-media-list">
      <li>
        <a href="https://www.linkedin.com/in/morganpeck99/" target="_blank">linkedin</a
        >
      </li>
      <li>
        <a href="https://github.com/mpeck99" target="_blank">Repos</a>
      </li>
      <li>
        <a href="mailto:mopeck99@gmail.com?subject=Portfolio">Contact</a>
      </li>
    </ul>
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
