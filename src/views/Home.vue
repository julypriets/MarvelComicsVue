<template>
  <div class="header">
    <img src="https://logorealm.com/wp-content/uploads/2016/07/Marvel-Logo.png" alt="Marvel logo"
         class="header__logo">
    <div class="header__wrapper">
      <div class="header__title">
        <p class="header__title-text">MARVEL COMICS</p>
      </div>
      <div class="header__wrapper-background"></div>
    </div>
    <p class="header__subheading">Find your favorites among thousands of stories</p>
    <input
        v-model="query"
        type="text"
        placeholder="Search"
        class="header__search"
    >
  </div>
  <ComicList
      :comics="resultQuery"
  />
</template>

<script>
import axios from 'axios'
import ComicList from '@/components/ComicList.vue'

const API_URL = "https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&orderBy=title&apikey=7cd30d3697116382070d9597a4e7efd2";

export default {
  components: {
    ComicList
  },
  data: () => ({
    comics: null,
    query: null
  }),
  created() {
    this.fetchData();
  },
  computed: {
    resultQuery() {
      if (this.query) {
        return this.comics.filter(item => {
          return this.query
              .toLowerCase()
              .split(" ")
              .every(c => item.title.toLowerCase().includes(c));
        })
      } else {
        return this.comics;
      }
    }
  },
  methods: {
    async fetchData() {
      const config = {
        headers: {
          ts: "marvel",
          apikey: "7cd30d3697116382070d9597a4e7efd2",
          hash: "9ce76949b277621ebd38b71889f6f53e"
        }
      };

      axios.get(
          `${API_URL}&ts=${config.headers.ts}&hash=${config.headers.hash}&offset=0&limit=100`
      ).then((result) => {
        this.comics = result.data.data.results;
      });
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/global.scss";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
}

.header {
  height: 14rem;
  background-image: linear-gradient(180deg, rgba(20, 20, 20, 0.83) 0%, rgba(20, 20, 20, 0.59) 100%), url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-Xf2EmqZ_61g%2FUE0IVylMJzI%2FAAAAAAAABhU%2FpAaJvuI7yW0%2Fs1600%2FMarvel-Comics-Wallpaper-3.jpg&f=1&nofb=1");
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
</style>
