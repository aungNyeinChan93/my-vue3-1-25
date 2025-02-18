<script setup>
import Emit from '@/components/test/Emit.vue';
import { ref } from 'vue';
import Stat from '@/components/test/Stat.vue'

const todos = ref([]);
const handelEmit = (emitData) => {
    todos.value = emitData;
}
</script>

<template>
    <section class="w-full min-h-screen">

        <Emit @todos-emit="handelEmit" />

        <div v-show="Object.keys(todos).length" class="px-10 grid grid-cols-2 gap-4 space-y-2 my-4">
            <template v-for="todo in todos" :key="todo.id">
                <Stat :todo="todo" />
            </template>
        </div>

    </section>
</template>
