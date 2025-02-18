<script setup>
import { onMounted } from 'vue';
import { useTodoStore } from '@/stores/todo';

const { todos, getData } = useTodoStore();

onMounted(() => getData('https://jsonplaceholder.typicode.com/todos'));

const emit = defineEmits(['todos-emit'])

const emitData = () => {
    emit('todos-emit', todos)
}

</script>

<template>
    <section class="text-start px-3 mt-3">
        <button class="px-4 py-2 rounded bg-green-500" @click="emitData">Emit to parent</button>
    </section>
</template>
