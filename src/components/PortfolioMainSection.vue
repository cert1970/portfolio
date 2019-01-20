<template>
  <section class="portfolio-section" :id="_.kebabCase(sectionName)">
    <h2 class="portfolio-section__title">{{ _.startCase(sectionName) }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    sectionName: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.portfolio-section
  &__title
    margin: 2rem 0 1rem
    color: var(--v-primary-base)
    font-weight: 700
    font-size: 1.8rem
    font-family: Roboto

  &:last-child
    min-height: calc(100vh - 48px)

  & >>> table
    thead
      th
        font-size: 0.8rem
    tbody
      td
        padding-top: 0.5rem
        padding-bottom: 0.5rem
        font-size: 1rem
</style>
