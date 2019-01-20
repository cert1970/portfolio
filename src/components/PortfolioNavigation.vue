<template>
  <nav class="page-navigation" v-scroll="onScroll">
    <div class="page-container">
      <v-tabs
        centered
        color="transparent"
        dark
        show-arrows
        v-model="activeIndex"
      >
        <v-tabs-slider color="#fff"></v-tabs-slider>
        <v-tab
          v-for="(item, index) in targetList"
          :key="index"
          @click="onClick"
        >
          {{ _.startCase(item.target) }}
        </v-tab>
      </v-tabs>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    activeIndex: null,
    currentOffset: 0,
    targetList: [],
    timeout: null,
    isClicked: false,
    options: {
      duration: 250,
      offset: -48,
      easing: "easeInOutQuad"
    }
  }),
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.updateNavigation();
      }, 100);

      setTimeout(() => {
        this.updateNavigation();
      }, 1000);
    });
  },
  methods: {
    updateNavigation() {
      this.targetList = [];
      [].forEach.call(document.querySelectorAll("section"), item => {
        this.targetList.push({
          target: item.id,
          offsetTop: item.offsetTop
        });
        // console.log(item.id, item.offsetTop);
      });
    },
    findActiveIndex() {
      const targetList = this.targetList.slice().reverse();
      const index = targetList.findIndex(item => {
        return item.offsetTop <= this.currentOffset - this.options.offset;
      });

      const lastIndex = targetList.length;
      this.activeIndex = index > -1 ? lastIndex - 1 - index : lastIndex;
    },
    onScroll() {
      if (this.isClicked) {
        return;
      }
      this.currentOffset =
        window.pageYOffset || document.documentElement.offsetTop;

      clearTimeout(this.timeout);

      this.timeout = setTimeout(this.findActiveIndex, 10);
    },
    onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      // e.stopImmediatePropagation();

      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
      }, this.options.duration + 50);

      this.$vuetify.goTo.call(
        this,
        `#${this._.kebabCase(e.target.innerText)}`,
        this.options
      );
    }
  }
};
</script>

<style lang="stylus">
.page-navigation
  display: flex
  justify-content: center
  position: sticky
  top: 0
  z-index: 10
  background-color: var(--v-primary-base)
  font-family: Roboto, sans-serif
  letter-spacing: 1px
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.12)
</style>
