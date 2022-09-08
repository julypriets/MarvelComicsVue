<template>
  <div class="creator">
    <img :src="creatorThumbnail"
         alt="Creator name"
         class="creator__img"
    >
    <p class="creator__name">{{ creator.name }}</p>
    <div class="creator__role">{{ creator.role }}</div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Creator",
  props: {
    creator: {
      type: Object
    }
  },
  data: () => ({
    creatorData: null
  }),
  created() {
    this.fetchCreator();
  },
  computed: {
    creatorThumbnail() {
      if (this.creatorData && this.creatorData.thumbnail) {
        return `${this.creatorData.thumbnail.path}.${this.creatorData.thumbnail.extension}`;
      } else {
        return "https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png";
      }
    }
  },
  methods: {
    fetchCreator() {
      const creatorStrArray = this.creator.resourceURI.split("/");
      const creatorId = creatorStrArray[creatorStrArray.length-1];
      const API_URL = `https://gateway.marvel.com:443/v1/public/creators/${creatorId}?apikey=7cd30d3697116382070d9597a4e7efd2`;

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
        this.creatorData = result.data.data.results[0];
      });
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/global.scss";
  .creator {
    text-align: center;
    margin-right: 1rem;

    &__img {
      height: 5rem;
      width: 5rem;
      object-fit: cover;
      filter: drop-shadow(2px 2px 9px rgba(0, 0, 0, 0.2));
      background-color: $red;
      border-radius: 50%;

      @include sm {
        height: 4.5rem;
        width: 4.5rem;
      }
    }

    &__name {
      margin: 0.5rem 0 0.25rem 0;
      width: 7rem;

      @include sm {
        font-size: 0.875rem;
      }
    }

    &__role {
      color: $blue;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.8rem;
      margin: 0;
      width: 7rem;

      @include sm {
        font-size: 0.75rem;
      }
    }
  }
</style>