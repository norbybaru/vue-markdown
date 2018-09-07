// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import "./assets/style.css";
import Markdown from "@/directives/markdown";

Vue.config.productionTip = false;

//v-markdown directive use directive Markdown
Vue.directive("markdown", Markdown);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
