<template>
  <div class="inner">
    <h1>Morgan Peck</h1>
    <p>Front-End Developer</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  beforeCreate: function() {
    document.body.className = 'layout--bg-img';
  }
};
</script>
<style lang="scss" scoped>
.inner {
  margin: auto 0;

  font-family: $main;
  text-align: center;

  h1 {
    margin-bottom: 0;
    margin-top: 0;

    font-size: 2rem;
    color: $navy;

    letter-spacing: 0.25rem;
    line-height: 2;

    @include tablet {
      font-size: 5rem;
    }
  }

  p {
    margin: 0;

    font-weight: 400;
    font-size: 1.5rem;
    font-family: $secondary;
    color: $navy;

    @include tablet {
      font-size: 3rem;
    }
  }
}
</style>
