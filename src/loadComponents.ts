import type {App} from "vue";
import {
  Button, 
  Layout,
} from "ant-design-vue";

export function loadAntdComponents(app: App) {
  app
    .use(Button)
    .use(Layout);
}

export function loadSelfComponents(app: App) {

}