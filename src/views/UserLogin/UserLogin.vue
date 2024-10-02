<template>
  <v-container>
    <v-form>
      <v-text-field label="id" />
      <v-text-field label="Password" type="password" />
      <v-btn color="primary" @click="loginHandler">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const isLogin = ref(false);
const router = useRouter();
const loginHandler = () => {
  isLogin.value = true;
  alert('success');

  if (isLogin.value) {
    router.push({ name: 'MainHomePage' }); // Adjust the route name as needed
  }
}


</script>

<style scoped>
</style>