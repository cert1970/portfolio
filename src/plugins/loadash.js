import Vue from "vue";
import _ from "lodash";

// Object.defineProperty(Vue.prototype, "_", { value: _ });
Vue.set(Vue.prototype, "_", _);
