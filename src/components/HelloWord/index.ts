import HelloWorld from './HelloWorld';
import { App } from 'vue'
HelloWorld.install = (app: App) => {    
    app.component(HelloWorld.name, HelloWorld);
};
export default HelloWorld;