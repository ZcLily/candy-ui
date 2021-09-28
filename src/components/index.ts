import HelloWorld from './HelloWord/index';
import Banner from './Banner/index';
import Tabs from './Tabs/index'

import { App } from 'vue';

const components = [HelloWorld, Banner, Tabs];
const install = (app: App) => {    
components.forEach(component => {        
    app.use(component.install);    
}); 
};
export default {install, HelloWorld, Banner};