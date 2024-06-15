import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VMask from "@/directives/VMask";

const app = createApp(App);

app.use(router).directive("mask", VMask).mount("#app");
