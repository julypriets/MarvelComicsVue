<template>
  <Navbar />
  <div class="comic-detail">
    <button @click="goToHome" class="comic-detail__return">BACK TO COMICS</button>
    <div class="comic-detail__wrapper">
      <div class="comic-detail__img-wrapper">
        <img :src="getComicThumbnail" :alt="comic?.title ?? ''" class="comic-detail__img">
        <div class="comic-detail__img-background"></div>
      </div>
      <div class="comic-detail__text-wrapper">
        <p class="comic-detail__title">{{ comic?.title }}</p>
        <div class="comic-detail__labels">
          <p class="comic-detail__labels-year">{{ getComicYear }}</p>
          <p class="comic-detail__labels-series">{{ comic?.series.name }}</p>
        </div>
        <p class="comic-detail__description">
          {{ getComicDescription }}
        </p>
      </div>
    </div>
    <Creators
        v-if="comic?.creators.returned > 0"
        :creators="comic?.creators.items"
    />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Creators from '@/components/Creators.vue'
import axios from "axios";

export default {
  name: "ComicDetail",
  components: {
    Navbar,
    Creators
  },
  data: () => ({
    comicId: null,
    comic: null
  }),
  created() {
    this.comicId = this.$route.params.id;
    this.fetchComic();
  },
  computed: {
    getComicThumbnail() {
      if (this.comic) {
        return `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`;
      }
    },
    getComicYear() {
      if (this.comic && this.comic.dates) {
        return new Date(this.comic.dates[0].date).getFullYear().toString();
      }
    },
    getComicDescription() {
      if (this.comic && this.comic.description) {
        return this.comic.description.replaceAll("&#39;", "'");
      }
    }
  },
  methods: {
    async fetchComic() {
      const API_URL = `https://gateway.marvel.com:443/v1/public/comics/${this.comicId}?apikey=7cd30d3697116382070d9597a4e7efd2`;

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
        this.comic = result.data.data.results[0];
      });
    },
    goToHome() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/global.scss";

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
</style>