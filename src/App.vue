<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse p-2 container" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active mx-2">
          <RouterLink :to="{name: 'customer'}"  class="nav-link"
            ><i class="fa-solid fa-users mx-2"></i> Customers</RouterLink
          >
        </li>
        <li class="nav-item mx-2">
          <RouterLink :to="{name: 'product'}"  class="nav-link"
            ><i class="fa-solid fa-box-open mx-2"></i>Products</RouterLink
          >
        </li>
        <li class="nav-item mx-2">
          <RouterLink :to="{name: 'order'}"  class="nav-link"
            ><i class="fa-solid fa-cart-shopping mx-2"></i>Orders</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped></style>
