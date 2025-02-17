<script setup>
import { useRoute, useRouter } from "vue-router";
// import router from '../router/index'

const route = useRoute()
const router = useRouter()
console.log(route);


</script>

<template>
  <main class="home w-full min-h-screen ">
    <h1 class="text-2xl underline text-center font-bold ">Home Page </h1>

  </main>
  <pre>
    <!-- {{ $route }} -->
    <!-- {{ $router }} -->
      <!-- {{ router }} -->
        <!-- {{ route }} -->
  </pre>
</template>
