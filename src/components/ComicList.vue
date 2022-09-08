<template>
  <div class="comic-list">
    <template v-for="comic in comics" class="comic-list">
      <Comic
          @click="goToComicDetail(comic)"
          :image-src="getComicThumbnail(comic)"
          :title="comic.title"
          :year="getComicYear(comic)"
      />
    </template>
  </div>
</template>

<script>
import Comic from './Comic.vue'
export default {
  name: "ComicList",
  components: {
    Comic
  },
  props: {
    comics: {
      type: Array
    }
  },
  methods: {
    getComicThumbnail(comic) {
      return `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    },
    getComicYear(comic) {
      if (comic.dates) {
        return new Date(comic.dates[0].date).getFullYear().toString();
      }
    },
    goToComicDetail(comic) {
      if (comic.id) {
        this.$router.push(`/comics/${comic.id}`);
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/global.scss";

  .comic-list {
    margin: 16rem auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0 7rem;
    justify-content: center;

    @include sm {
      margin: 9rem auto 0 auto;
      padding: 0 1rem;
    }
  }
</style>