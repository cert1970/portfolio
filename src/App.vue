<template>
  <v-app>
    <portfolio-header></portfolio-header>
    <portfolio-navigation></portfolio-navigation>
    <portfolio-main></portfolio-main>
  </v-app>
</template>

<script>
import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioNavigation from "./components/PortfolioNavigation";
import PortfolioMain from "./components/PortfolioMain";

export default {
  name: "App",
  components: {
    PortfolioHeader,
    PortfolioNavigation,
    PortfolioMain
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables'

$body-font-family = 'Noto Sans KR'
$font-size-root = 16px
$line-height-root = 1.5

$material-light.background = #fff

// @import '~vuetify/src/stylus/main'
@import '~vuetify/src/stylus/app'
@import '~vuetify/src/stylus/components/_app'
@import '~vuetify/src/stylus/components/_content'

body
  font-family: "Noto Sans KR", sans-serif

a
  background-color: transparent
  text-decoration: none

  &:link
  &:visited
  &:hover
  &:active
  &:focus
    outline: none

.page-container
  max-width: 1280px
  width: 100%
  margin: 0 auto
</style>
