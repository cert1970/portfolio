<template>
  <section :id="id">
    <h2 class="headline">{{ title }}</h2>
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

<style lang="stylus" scoped>
h2
  margin: 2rem 0 1rem
</style>
