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
$line-height-root = 1.8

@import '~vuetify/src/stylus/app'

body
  font-family: "Noto Sans KR", sans-serif
</style>
