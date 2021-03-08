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
