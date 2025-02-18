<script setup>
import { computed, reactive, ref } from 'vue'
import Form from "@/components/test/Form.vue";
import AssignmentList from '../components/test/AssignmentList.vue'
import Button from '../components/Button.vue'
import { useRouter } from 'vue-router';
import GeneralCard from '@/components/test/GeneralCard.vue';
import TaskAdd from '@/components/test/TaskAdd.vue';


const assignments = ref([
    { name: 'assignment-1', status: false, tag: 'php' },
    { name: 'assignment-2', status: false, tag: 'laravel' },
    { name: 'assignment-3', status: false, tag: 'inertia' },
    { name: 'assignment-4', status: false, tag: 'vue' },
]);

const tags = computed(() => ['all', ...new Set(assignments.value.map(a => a.tag))]);  //Set class is unique value {} ![]


const finshedAssigns = computed(() => {
    return assignments.value.filter((assign) => assign.status === true);
});


const router = useRouter();

const task = reactive({
    name: '',
    tag: '',
    status: false
});

const add = () => {
    assignments.value.push({ name: task.name, status: task.status, tag: task.tag });
    task.name = ''
}

const handelFilter = (currentTag) => {
    assignments.value = currentTag.value == 'all' ? assignments.value.map((a) => a) : assignments.value.filter((a) => a.tag === currentTag.value)
}
</script>

<template>
    <main>

        <Form />

        <AssignmentList :assignments="assignments" :finshedAssigns="finshedAssigns" :tags="tags"
            @filter-emit="handelFilter" />

        <div class="my-4 border rounded p-1">
            <TaskAdd :action="add" v-model="task" />
        </div>

        <Button :disabled="true" color="bg-purple-400" type="button" :action="() => router.back()">Click</Button>

        <div class="grid grid-cols-4 gap-4 px-10">
            <template v-for="test in [1, 2, 3, 4]" :key="test">
                <GeneralCard>
                    <template #image>
                        <img src="@/assets//images/default.png" alt="img"
                            class="h-64 w-full object-cover sm:h-80 lg:h-96">
                    </template>
                    <template #title>
                        <p>Lorem ipsum dolor sit.</p>
                    </template>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt quis porro.
                </GeneralCard>
            </template>
        </div>

    </main>
    <pre>
    <!-- {{ tags }} -->
</pre>
</template>


<style scoped>
main {
    min-height: 100vh;
    display: grid;
    place-items: center;
}
</style>