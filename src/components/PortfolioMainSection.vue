<template>
  <section :id="id" class="p-content">
    <h2 class="p-content__title">{{ title }}</h2>
    <slot :values="values"></slot>
  </section>
</template>

<script>
import axios from "axios";

export default {
  props: {
    name: String
  },
  data: () => ({
    values: 0
  }),
  computed: {
    id() {
      return this._.kebabCase(this.name);
    },
    title() {
      return this._.startCase(this.name);
    }
  },
  created() {
    axios
      .get(`/data/${this.id}.json`)
      .then(response => {
        this.values = response.data;
      })
      .catch(error => {
        console.error(`Error in ${this.name}: ${error.message}`);
      });
  }
};
</script>

<style lang="stylus">
.p-content
  &__title
    margin: 2rem 0 1rem
    color: var(--v-primary-base)
    font-weight: 700
    font-size: 1.8rem
    font-family: Roboto

  &:last-child
    min-height: calc(100vh - 48px)

  & &__table
    tbody
      tr
        td
          padding-top: 0.5rem
          padding-bottom: 0.5rem
          font-size: 1rem
</style>
