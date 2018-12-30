<template>
  <header class="page-header">
    <h1 class="page-header__title">Dong-Young Kim</h1>
    <div class="page-header__list">
      <div class="page-header__item">
        <svg class="page-header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/></svg>
        <a class="page-header__link" href="mailto:31337.cert@mail.com"><span itemprop="email">31337.cert@gmail.com</span></a>
      </div>
      <div class="page-header__item">
        <svg class="page-header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
        <a class="page-header__link" href="https://github.com/cert1970">cert1970</a>
      </div>
      <div class="page-header__item">
        <svg class="page-header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"/></svg>
        <a class="page-header__link" href="https://cert1970.github.io">cert1970.github.io</a>
      </div>
      <div class="page-header__item">
        <svg class="page-header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z"/></svg>
        <a class="page-header__link" href="https://blog.naver.com/cert1970">blog.naver.com/cert1970</a>
      </div>
    </div>
  </header>
</template>

<style lang="stylus">
@import '~vuetify/src/stylus/settings/_variables'

.page-header
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding: 2em 0
  background-color: var(--v-primary-base)
  font-size: 1.2rem
  font-family: Roboto, sans-serif
  color: var(--v-secondary-base)

  &__title
    margin-bottom: 1.2rem
    font-size: 2.2em

  &__list
    display: flex
    flex-direction: column
    justify-content: center

  &__item
    display: flex
    align-items: center
    margin-bottom: 0.6em

  &__icon
    width: 1em
    margin-right: 0.4em
    fill: $material-dark.icons.inactive

  &__link
    padding: 0 0.2em
    border-bottom: 1px dotted
    color: var(--v-secondary-base)
    transition: background 150ms $transition.fast-out-slow-in,
                border 150ms $transition.fast-out-slow-in

    &:hover
      border-bottom-color: transparent
      background-color: var(--v-accent-base)
      color: var(--v-secondary-base)

  ::selection
    background-color: rgba(#fff, 255 / 256)
    color: var(--v-primary-base)
</style>
