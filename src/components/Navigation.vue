<template>
  <nav class="page-navigation" v-scroll="onScroll">
    <div class="page-container">
      <v-tabs
        dark
        v-model="activeIndex"
        color="transparent"
        _fixed-tabs
        show-arrows
      >
        <v-tabs-slider color="#fff"></v-tabs-slider>
        <v-tab
          v-for="(item, index) in targetList"
          :key="index"
          @click="onClick"
        >
          {{ item.target }}
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
    setTimeout(() => {
      [].forEach.call(document.querySelectorAll("section"), item => {
        this.targetList.push({
          target: item.id,
          offsetTop: item.offsetTop
        });
        console.log(item.id, item.offsetTop);
      });
    }, 200);
  },
  methods: {
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
        `#${e.target.innerText.toLowerCase()}`,
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
</style>
