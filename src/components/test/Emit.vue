<script setup>
import { useTestStore } from '@/stores/test'
import { onMounted } from 'vue';

const { testData, fetchData } = useTestStore();

onMounted(() => fetchData('https://jsonplaceholder.typicode.com/todos'));

const emit = defineEmits(['todos-emit'])

const emitData = () => {
    emit('todos-emit', testData)
}
</script>

<template>
    <section class="text-start px-3 mt-3">
        <button class="px-4 py-2 rounded bg-green-500" @click="emitData">Emit to parent</button>
    </section>
</template>
