<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" to="/">Fake Store</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/electronics">가전</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jewelery">주얼리</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/mensclothing">남성의류</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/womenclothing">여성의류</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup></script>

<style scoped>
.navbar {
  background: #007bff;
}
.navbar-brand {
  font-weight: bold;
}
.nav-link {
  color: white !important;
}
</style>