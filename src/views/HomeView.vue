<script setup>
import { useRoute } from "vue-router";

const route = useRoute()


</script>

<template>
  <main class="home w-full min-h-screen ">
    <h1 class="text-2xl underline text-center font-bold ">Home Page </h1>

  </main>
  <pre>
    {{ $route }}
  </pre>
</template>
