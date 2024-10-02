import { createRouter, createWebHistory } from 'vue-router';
import MainHomePage from '../components/MainHomePage.vue'; // Homeコンポーネントをインポート
import UserLogin from '../views/UserLogin/UserLogin.vue'; // Loginコンポーネントをインポート
import GalleryActive from '../views/GalleryActive/GalleryActive.vue'; 
import ContactUs from '../views/ContactUs/ContactUs.vue'; 
import ClubEvent from '../views/ClubEvent/ClubEvent.vue'; 

const routes = [
  { path: '/', component: MainHomePage, name: 'MainHomePage' },
  { path: '/UserLogin', component: UserLogin, name: 'UserLogin' },
  { path: '/GalleryActive', component: GalleryActive, name: 'GalleryActive' },
  { path: '/ContactUs', component: ContactUs, name: 'ContactUs' },
  { path: '/ClubEvent', component: ClubEvent, name: 'ClubEvent' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;