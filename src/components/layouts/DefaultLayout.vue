<template>
    <div>
      <NavBar />
      <div class="container mt-4">
        <router-view />
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import NavBar from '../layouts/NavBar.vue';
  import Footer from '../layouts/Footer.vue';
  </script>
  