<script setup>
const props = defineProps(['assignments', 'finshedAssigns']);

</script>

<template>
    <h2 class="text-center text-2xl text-red-400 font-bold"> Assigment Lists</h2>
    <ul class="list-disc pl-5">
        <template v-for="assignment in assignments" :key="assignment">
            <li class="mb-2" :class="{ 'line-through': assignment.status }">
                <label for="assigment">
                    {{ assignment.name }}
                    <input type="checkbox" v-model="assignment.status" id="assigment" class="ms-2">
                </label>
            </li>
        </template>
    </ul>
    <hr>
    <div v-show="finshedAssigns.length || Object.keys(finshedAssigns).length">
        <h2 class="text-center text-2xl text-red-400 font-bold"> Done Lists</h2>
        <ul class="list-disc pl-5">
            <li v-for="assign in finshedAssigns" :key="assign" class="mb-2">
                <label for="assigment">
                    {{ assign.name }}
                </label>
            </li>
        </ul>
    </div>

    <pre>
    <!-- {{ assignments }} -->
</pre>

</template>