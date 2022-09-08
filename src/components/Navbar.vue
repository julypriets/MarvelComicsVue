<template>
  <div class="navbar">
    <img src="https://logorealm.com/wp-content/uploads/2016/07/Marvel-Logo.png" alt="Marvel logo" class="navbar__logo">
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped lang="scss">
@import "../assets/global.scss";
  .navbar {
    height: 3.75rem;
    background: $black;
    padding: 1rem 2rem;

    &__logo {
      height: 2rem;
      top: 2rem;
      left: 3rem;

      @include sm {
        top: 1rem;
        left: 1.5rem;
      }
    }
  }
</style>