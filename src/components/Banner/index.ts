import Banner from "./banner";
import { App } from 'vue'
Banner.install = (app: App) => {
    app.component(Banner.name, Banner);
};
export default Banner;