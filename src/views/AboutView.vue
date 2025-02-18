<script setup>
import BlogCard from '@/components/test/BlogCard.vue';
import { useTestStore } from '@/stores/test';
import { ref } from 'vue';

const { testData } = useTestStore();
const hideStatus = ref(true);



</script>

<template>
  <div class="about grid grid-cols-4 gap-4 my-5 mx-10">

    <template v-for="test in testData" :key="test">
      <div v-show="hideStatus">
        <BlogCard :title="test.title" :description="test.description" @hide="hideStatus = !hideStatus">
          <template #image>
            <img :src="test.image" alt="img"
              class="max-h-60 w-full rounded-xl object-contain shadow-xl transition group-hover:grayscale-[50%] overflow-hidden">
          </template>
        </BlogCard>
      </div>
    </template>


  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
