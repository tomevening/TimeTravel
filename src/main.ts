import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(createPinia());

app.use(vuetify);

app.mount('#app');
