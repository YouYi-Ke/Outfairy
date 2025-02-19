import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faMagnifyingGlass } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 添加圖標到 library
library.add(faShoppingCart);
library.add(faUser);
library.add(faMagnifyingGlass);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
