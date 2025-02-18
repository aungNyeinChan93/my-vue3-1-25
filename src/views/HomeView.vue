<script setup>
import { useRoute, useRouter } from "vue-router";
import Form from "../components/test/Form.vue"

const route = useRoute()
const router = useRouter()
console.log(route);


</script>

<template>
  <main class="home w-full min-h-screen ">
    <h1 class="text-2xl underline text-center font-bold ">Home Page </h1>
    <Form />
  </main>
  <pre>
    <!-- {{ $route }} -->
    <!-- {{ $router }} -->
      <!-- {{ router }} -->
        <!-- {{ route }} -->
  </pre>
</template>
