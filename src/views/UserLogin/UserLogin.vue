<template>
 <v-container>
    <v-form>
      <v-text-field label="Email" />
      <v-text-field label="Password" type="password" />
      <v-btn color="primary">Login</v-btn>
    </v-form>
  </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'UserLogin',
    props: {
      msg: String,
    },
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  