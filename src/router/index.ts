import { createRouter, createWebHistory } from 'vue-router';
import MainHomePage from '../components/MainHomePage.vue'; // Homeコンポーネントをインポート
import UserLogin from '../views/UserLogin/UserLogin.vue'; // Loginコンポーネントをインポート
import GalleryActive from '../views/GalleryActive/GalleryActive.vue'; 
import ContactUs from '../views/ContactUs/ContactUs.vue'; 
import ClubEvent from '../views/ClubEvent/ClubEvent.vue'; 

const routes = [
  { path: '/', component: MainHomePage },
  { path: '/UserLogin', component: UserLogin },
  { path: '/GalleryActive', component: GalleryActive },
  { path: '/ContactUs', component: ContactUs },
  { path: '/ClubEvent', component: ClubEvent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;