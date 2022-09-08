<template>
  <div class="comic">
    <img :src="imageSrc" alt="Comic name"
         class="comic__image">
    <p class="comic__title">{{ title }}</p>
    <p class="comic__year">{{ year }}</p>
  </div>
</template>

<script>
export default {
  name: "Comic",
  props: {
    imageSrc: {
      type: String
    },
    title: {
      type: String
    },
    year: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/global.scss";

.comic {
  position: relative;
  width: 14rem;
  margin: 1.5rem 1.5rem;
  transition-timing-function: ease-in-out;

  &:hover &__image {
    cursor: pointer;
    animation-name: raise-card;
    transform: translateY(-0.5rem);
  }

  &:hover &__title {
    color: $red;
  }

  @include sm {
    width: 9.3rem;
    margin: 1rem;
  }

  &__image {
    height: 21rem;
    transition: 0.3s;
    filter: drop-shadow(0px 74px 30px rgba(0, 0, 0, 0.02)) drop-shadow(0px 42px 25px rgba(0, 0, 0, 0.08)) drop-shadow(0px 19px 19px rgba(0, 0, 0, 0.13)) drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.15)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.15));
    max-width: 100%;
    object-fit: cover;
    object-position: left;

    @include sm {
      height: 12.5rem;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 120%;
    color: $black;
    max-width: 100%;

    @include sm {
      font-size: 0.8rem;
    }
  }

  &__year {
    background-color: $red;
    display: inline-block;
    color: white;
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
    margin: 0;
  }
}
</style>