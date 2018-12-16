import Vue from "vue";
import Vuetify, { VApp, VContent } from "vuetify/lib";
import transitions from "vuetify/lib/components/transitions";
import { Scroll } from "vuetify/lib/directives";
// import "vuetify/src/stylus/app.styl";

// Astral Aura(19-3830), rgb(54, 49, 81), #363151
// Ultra Violet(18-3838), rgb(95, 75, 139), #5f4b8b
// Scuba Blue(16-4725), rgb(0, 171, 192), #00abc0
// Cloud Dancer(11-4201), rgb(240, 238, 233), #f0eee9
// Gardenia(11-0604), rgb(241, 232, 223), #f1e8df

Vue.use(Vuetify, {
  components: {
    VApp,
    VContent,
    transitions
  },
  directives: {
    Scroll
  },
  theme: {
    primary: "#5f4b8b",
    secondary: "#f0eee9",
    accent: "#363151"
  },
  options: {
    customProperties: true
  },
  iconfont: "md"
});
