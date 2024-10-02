<template>
    <div class="hello">
        <h1>ClubEvent</h1>
        <p>이곳에 연락처 정보를 입력하세요.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ClubEvent',
    props: {
      msg: String,
    },
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  