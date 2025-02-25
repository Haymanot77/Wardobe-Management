import { createApp } from "vue";
import ClothingList from "./components/ClothingList.vue";

const app = createApp({});
app.component("ClothingList", ClothingList);
app.mount("#app");
