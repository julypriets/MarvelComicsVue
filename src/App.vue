<template>
  <div class="header">
    <img src="https://logorealm.com/wp-content/uploads/2016/07/Marvel-Logo.png" alt="Marvel logo" class="header__logo">
    <div class="header__wrapper">
      <div class="header__title">
        <p class="header__title-text">MARVEL COMICS</p>
      </div>
      <div class="header__wrapper-background"></div>
    </div>
    <p class="header__subheading">Find your favorites among thousands of stories</p>
    <input type="text" placeholder="Search" class="header__search">
  </div>
  <ComicList
      :comics="comics"
  />
</template>

<script>
import ComicList from './components/ComicList.vue'
import axios from 'axios'

const API_URL = "https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=title&apikey=7cd30d3697116382070d9597a4e7efd2";

export default {
  components: {
    ComicList
  },
  data: () => ({
    comics: null
  }),
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const config = {
        headers:{
          ts: "marvel",
          apikey: "7cd30d3697116382070d9597a4e7efd2",
          hash: "9ce76949b277621ebd38b71889f6f53e"
        }
      };

      axios.get(
          `${API_URL}&ts=${config.headers.ts}&hash=${config.headers.hash}&offset=0&limit=100`
      ).then((result) => {
        console.log("This is the result", result);
        this.comics = result.data.data.results;
        console.log(this.comics);
      });
    }
  }
}
</script>

<style lang="scss">
@import "./assets/global.scss";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
}

.header {
  height: 14rem;
  background-image: linear-gradient(180deg, rgba(20, 20, 20, 0.83) 0%, rgba(20, 20, 20, 0.59) 100%) ,url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-Xf2EmqZ_61g%2FUE0IVylMJzI%2FAAAAAAAABhU%2FpAaJvuI7yW0%2Fs1600%2FMarvel-Comics-Wallpaper-3.jpg&f=1&nofb=1");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-bottom: 4px solid $black;
  position: relative;

  @include sm {
    height: 7.25rem;
  }

  &__logo {
    height: 2rem;
    position: absolute;
    top: 2rem;
    left: 3rem;

    @include sm {
      top: 1rem;
      left: 1.5rem;
    }
  }

  &__wrapper {
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translate(50%, 50%);
    height: 5.625rem;

    @include sm {
      height: 2.8rem;
    }

    &-background {
      background-color: $black;
      height: 100%;
      max-width: 100%;
      position: relative;
      top: calc(-100% + 5px);
      left: 5px;

      @include sm {
        top: calc(-100% + 3px);
        left: 3px;
      }
    }
  }

  &__title {
    background-color: $red;
    border: 4px solid $black;
    display: inline-flex;
    position: relative;
    max-height: 100%;
    z-index: 1;
    align-items: center;
    padding: 0 1.5rem;

    @include sm {
      border-width: 2px;
    }

    &-text {
      color: white;
      font-size: 3.7rem;
      font-weight: 700;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: $black;
      text-shadow: 2px 2px 0 $black;
      white-space: nowrap;

      @include sm {
        font-size: 1.5rem;
      }
    }
  }

  &__subheading {
    position: relative;
    top: 19rem;
    margin: 0;
    display: inline-block;
    left: 50%;
    font-size: 1.25rem;
    transform: translateX(-50%);

    @include sm {
      font-size: 0.875rem;
      text-align: center;
      top: 9.5rem;
    }
  }

  &__search {
    position: relative;
    display: block;
    margin: 0 auto;
    top: 21.5rem;
    border: none;
    border-bottom: 2px solid $black;
    color: $black;
    font-size: 1rem;
    padding: 0.25rem 0.25rem;
    width: 26.25rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: $gray;
    }

    @include sm {
      top: 11rem;
      border-width: 1px;
      width: 80%;
      font-size: 0.875rem;
    }
  }
}

// HOLA

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

.comic-detail {
  padding: 1rem 3rem;
  text-align: center;

  @include sm {
    padding: 2rem 1.5rem;
  }

  &__return {
    display: block;
    color: $red;
    background-color: white;
    border: none;
    font-size: 0.8rem;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }

  &__wrapper {
    margin: 0 auto;
    padding: 2.5rem 3rem;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;

    @include sm {
      padding: 2rem 0;
    }
  }

  &__img-wrapper {
    position: relative;
    display: inline-block;
    height: 31rem;
    width: 20.6rem;

    @include md {
      height: 22rem;
      width: 11.6rem;
    }

    @include md {
      height: 22.5rem;
      width: 15.25rem;
    }
  }

  &__img {
    position: absolute;
    left: 0;
    height: 100%;
    border: 3px solid $black;
    z-index: 1;

    @include sm {
      margin-bottom: 1.8rem;
    }

    @include md {
      margin-bottom: 3rem;
    }

    &-background {
      background-color: $black;
      height: 100%;
      min-width: 100%;
      position: absolute;
      top: 12px;
      right: 12px;

      @include md {
        top: 5px;
        right: 7px;
      }
    }
  }

  &__text-wrapper {
    width: 50%;
    max-width: 32rem;
    margin-left: 2rem;
    text-align: left;

    @include md {
      width: 100%;
      margin: 0;
    }

    @include sm {
      width: 100%;
      margin: 0;
    }
  }

  &__title {
    font-size: 2rem;
    font-weight: 400;
    margin: 1.5rem 0 1rem 0;

    @include md {
      font-size: 1.5rem;
    }

    @include sm {
      font-size: 1.125rem;
    }
  }

  &__labels {
    display: flex;
    color: white;
    font-size: 0.875rem;
    font-weight: 700;

    @include sm {
      font-size: 0.75rem;
    }

    &-year {
      background-color: $red;
      margin: 0 0.5rem 0 0;
      padding: 0.25rem;
      display: inline-flex;
      align-items: center;
    }

    &-series {
      background-color: $blue;
      display: inline-flex;
      align-items: center;
      margin: 0;
      padding: 0.25rem;
    }
  }
}

.creators {
  text-align: left;
  padding: 0 3rem;

  @include sm {
    padding: 0;
  }

  &__title {
    font-size: 1.25rem;

    @include sm {
      font-size: 1.125rem;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    text-align: center;
    margin-right: 1rem;

    &-img {
      height: 5rem;
      width: 5rem;
      object-fit: contain;
      filter: drop-shadow(2px 2px 9px rgba(0, 0, 0, 0.2));
      background-color: $red;
      border-radius: 50%;

      @include sm {
        height: 4.5rem;
        width: 4.5rem;
      }
    }

    &-name {
      margin: 0.5rem 0 0.25rem 0;
      width: 7rem;

      @include sm {
        font-size: 0.875rem;
      }
    }

    &-role {
      color: $blue;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.8rem;
      margin: 0;

      @include sm {
        font-size: 0.75rem;
      }
    }
  }
}
</style>
