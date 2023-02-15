import { createApp } from "vue";
import App from "./App";
import CandyUI from "./components/index";
import "./styles/main.less";
import { globalRegister } from "./global";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(globalRegister);
app.use(CandyUI);

app.mount("#app");
