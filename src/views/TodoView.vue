<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import Stat from '@/components/test/Stat.vue';
import CreateTodo from '@/components/Todo/CreateTodo.vue';
import { useRouter } from 'vue-router';


const showStatus = ref(false);
const todos = ref([]);
const router = useRouter();

const getData = async () => {
    const res = await axios.get('http://localhost:4000/todos');
    const data = res.data
    todos.value = data;
}

onMounted(() => {
    getData()
})


const todo = reactive({
    userId: 1,
    id: Object.keys(todos).length + 1,
    title: '',
    completed: false,

});

const action = () => {
    axios.post('http://localhost:4000/todos', todo);
    router.push({ name: 'todos' })
}




</script>

<template>
    <section>
        <h1 class="text-3xl text-red-500 text-center p-3">Todos List</h1>
        <div class="flex justify-end px-3 mx-10">
            <button class="px-4 py-2 rounded bg-blue-500" @click="showStatus = !showStatus">Create</button>
        </div>
        <div class="" v-show="showStatus">
            <CreateTodo v-model="todo" :action="action" />
        </div>
        <div class="grid grid-cols-6 gap-4 my-4">
            <template v-for="todo in todos" :key="todo.id">
                <Stat class="col-span-4 col-start-2" :todo="todo" />
            </template>
        </div>

        <pre>
    <!-- {{ todos.length }} -->
</pre>

    </section>
</template>
