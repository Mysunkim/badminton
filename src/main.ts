import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles'; // Vuetify 스타일을 가져옵니다.
import '@mdi/font/css/materialdesignicons.css'; // 아이콘 사용
import { createVuetify } from 'vuetify'; 
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(router)
  .use(vuetify) // Vuetify를 애플리케이션에 등록
  .mount('#app');