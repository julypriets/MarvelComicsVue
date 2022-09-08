<template>
  <div class="creators">
    <p class="creators__title">Creators</p>
    <div class="creators__list">
      <template v-for="creator in creators">
        <Creator
            :creator="creator"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Creator from "@/components/Creator.vue";

export default {
  name: "Creators",
  components: {
    Creator
  },
  props: {
    creators: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/global.scss";
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
}

</style>