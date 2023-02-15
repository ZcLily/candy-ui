import { App } from "vue";
import registerElementPlus from "./registerElementPlus";

export function globalRegister(app: App): void {
  app.use(registerElementPlus);
}
