import Tabs from "./tabs";
import { App } from "vue";
Tabs.install = (app: App) => {
  app.component(Tabs.name, Tabs);
};
export default Tabs;
