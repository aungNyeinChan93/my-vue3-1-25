<script setup>
import { useCounterStore } from '@/stores/counter'
import { useTestStore } from "@/stores/test"
import { onMounted } from 'vue';
import List from "../components/test/List.vue"

const { testData, fetchData } = useTestStore();

onMounted(() => fetchData('https://fakestoreapi.com/products'));
</script>

<template>
    <main class="w-full min-h-screen">
        <h1 class="text-2xl underline text-center font-bold ">Testing List</h1>
        <div class=" mt-1">
            <div class="p-4 border border-red-600 mt-4 mx-10 rounded">
                <div v-if="Object.keys(testData).length">
                    <template v-for="product in testData" :key="product.id">
                        <List :product="product" />
                    </template>
                </div>
                <div v-else>
                    <p class="text-center text-red-500">Empty Data</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>