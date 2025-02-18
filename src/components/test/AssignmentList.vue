<script setup>
import Assign from './Assign.vue';
const props = defineProps(['assignments', 'finshedAssigns']);

</script>

<template>
    <h2 class="text-center text-2xl text-red-400 font-bold"> Assigment Lists</h2>
    <ul class="list-disc pl-5">
        <template v-for="assignment in assignments" :key="assignment">
            <Assign :assignment="assignment" title="assignment" />
        </template>
    </ul>
    <hr>
    <div v-show="finshedAssigns.length || Object.keys(finshedAssigns).length">
        <h2 class="text-center text-2xl text-red-400 font-bold"> Done Lists</h2>
        <ul class="list-disc pl-5">
            <template v-for="assign in finshedAssigns" :key="assign">
                <label for="assigment">
                    <li>
                        {{ assign.name }}
                    </li>
                </label>
            </template>
        </ul>
    </div>

    <pre>
    <!-- {{ assignments }} -->
</pre>

</template>
