<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MasterLayout from './components/layouts/Master.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <MasterLayout>
        <RouterView />
        <template #footer>
          <footer>
            <div class="wrapper">
              <p>&copy; 2024 My Company</p>
            </div>
          </footer>
        </template>
      </MasterLayout>
    </div>
  </header>

</template>
