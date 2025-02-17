<script setup>
import { computed, ref } from 'vue'
import Form from "@/components/test/Form.vue";
import AssignmentList from '../components/test/AssignmentList.vue'
import Button from '../components/Button.vue'
import { useRouter } from 'vue-router';
import GeneralCard from '@/components/test/GeneralCard.vue';


const assignments = ref([
    { name: 'assignment-1', status: false },
    { name: 'assignment-2', status: false },
    { name: 'assignment-3', status: false },
    { name: 'assignment-4', status: false },
]);

const finshedAssigns = computed(() => {
    return assignments.value.filter((assign) => assign.status === true);
});

const router = useRouter();

console.log(router);

</script>

<template>
    <main>

        <Form />

        <AssignmentList :assignments="assignments" :finshedAssigns="finshedAssigns" />

        <Button :disabled="true" color="bg-red-600" type="button" :action="() => router.back()">Click</Button>

        <div class="grid grid-cols-4 gap-4 px-10">
            <template v-for="test in [1, 2, 3, 4]" :key="test">
                <GeneralCard>
                    <template #image>
                        <img src="../assets//images/default.png" alt="img"
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
</template>


<style scoped>
main {
    min-height: 100vh;
    display: grid;
    place-items: center;
}
</style>