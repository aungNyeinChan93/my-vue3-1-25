<script setup>
import { computed, ref } from 'vue'
import Form from "@/components/test/Form.vue";
import AssignmentList from '../components/test/AssignmentList.vue'

const assignments = ref([
    { name: 'assignment-1', status: false },
    { name: 'assignment-2', status: false },
    { name: 'assignment-3', status: false },
    { name: 'assignment-4', status: false },
]);

const finshedAssigns = computed(() => {
    return assignments.value.filter((assign) => assign.status === true);
});


</script>

<template>
    <main>
        <Form />
        <AssignmentList :assignments="assignments" :finshedAssigns="finshedAssigns" />
    </main>
</template>


<style scoped>
main {
    min-height: 100vh;
    display: grid;
    place-items: center;
}
</style>