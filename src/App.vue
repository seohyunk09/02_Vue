<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/layouts/NavBar.vue';
export default { components: { NavBar } };
</script>