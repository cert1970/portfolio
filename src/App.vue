<template>
  <v-app>
    <portfolio-header></portfolio-header>
    <portfolio-navigation></portfolio-navigation>
    <main class="page-container">
      <section v-for="i in 15" :key="i" :id="`section-${i}`">
        {{ i }}
      </section>
    </main>
  </v-app>
</template>

<script>
import PortfolioHeader from "./components/Header";
import PortfolioNavigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    PortfolioHeader,
    PortfolioNavigation
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

body
  font-family: "Noto Sans KR"

section
  height: 100px
  border-bottom: 1px solid gray

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

section:last-child
  min-height: calc(100vh - 48px)
</style>
