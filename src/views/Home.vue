<template>
  <div class="content content-home">
    <h1>Morgan Peck</h1>
    <p>Front-End Developer</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  beforeCreate: function() {
    document.body.className = 'layout--bg-img';
  }
};
</script>
<style lang="scss">
.content-home {
  margin: auto 0;
  font-family: $main;

  h1 {
    margin-bottom: 0;

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

    text-align: center;
    font-weight: 400;
    font-size: 1.5rem;
    font-family: $secondary;
    color: $navy;

    @include tablet {
      font-size: 3rem;
    }
  }
}

.layout--bg-img {
  background-image: linear-gradient(
      rgba($navy, 1),
      rgba($turquoise, 0.75),
      rgba($navy, 1)
    ),
    url('../assets/images/home-background.jpg');
  background-size: cover;
  background-position: center;
}
</style>
