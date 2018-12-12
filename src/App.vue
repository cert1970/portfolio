<template>
  <v-app>
    <portfolio-header></portfolio-header>
    <v-content>test</v-content>
  </v-app>
</template>

<script>
import PortfolioHeader from "./components/Header";

export default {
  name: "App",
  components: {
    PortfolioHeader
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables'

$body-font-family = 'Noto Sans KR'
$font-size-root = 18px
$line-height-root = 1.5

$material-light.background = #fff

// @import '~vuetify/src/stylus/main'
@import '~vuetify/src/stylus/app'
@import '~vuetify/src/stylus/components/_app'
@import '~vuetify/src/stylus/components/_content'

a
  background-color: transparent
  text-decoration: none

  &:link
  &:visited
  &:hover
  &:active
  &:focus
    outline: none
</style>
