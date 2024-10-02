<template>
  <div>
    <MenuNavBar />
    <div class="hello">
        <h1>MainHomePage</h1>
        <img :src="mainImage" />
    </div>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import MenuNavBar from './MenuNavBar.vue';
  import mainImage from '@/assets/image/mainpage-bg.png';
  export default defineComponent({
    name: 'MainHomePage',
    components: {
      MenuNavBar
  },
  data() {
    return {
      // 데이터에 이미지 경로 추가
      mainImage
    };
  },
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>


  </style>
  