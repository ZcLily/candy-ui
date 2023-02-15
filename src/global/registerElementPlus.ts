import { App } from "vue";
import { ElRadioGroup, ElRadioButton, ElButton } from "element-plus";

const components = [ElRadioGroup, ElRadioButton, ElButton];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
