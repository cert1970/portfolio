<template>
  <main class="page-container">
    <portfolio-skills></portfolio-skills>
    <portfolio-projects></portfolio-projects>
    <portfolio-education></portfolio-education>
    <portfolio-activities></portfolio-activities>
    <portfolio-awards></portfolio-awards>
    <portfolio-certification></portfolio-certification>
  </main>
</template>

<script>
import {
  PortfolioActivities,
  PortfolioAwards,
  PortfolioCertification,
  PortfolioEducation,
  PortfolioSkills,
  PortfolioProjects
} from "./sections";

export default {
  components: {
    PortfolioActivities,
    PortfolioAwards,
    PortfolioCertification,
    PortfolioEducation,
    PortfolioSkills,
    PortfolioProjects
  }
};
</script>

<style lang="stylus">
main
  padding: 0 1rem

a
  background-color: transparent
  text-decoration: none

  &:link
  &:visited
  &:hover
  &:active
  &:focus
    outline: none

ul
  padding: 0 !important
  list-style-type: none

.page-container
  max-width: 1280px
  width: 100%
  margin: 0 auto
</style>
