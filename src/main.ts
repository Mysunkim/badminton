import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; // Vuetify 플러그인 가져오기

createApp(App)
  .use(router)
  .use(vuetify) // Vuetify를 애플리케이션에 등록
  .mount('#app');