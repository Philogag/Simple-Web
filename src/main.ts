import { createApp } from 'vue';
import App from './App.vue';
import { loadAntdComponents, loadSelfComponents } from '@/loadComponents';

import '@/assets/main.css';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

loadAntdComponents(app);
loadSelfComponents(app);

app.mount('#app');
