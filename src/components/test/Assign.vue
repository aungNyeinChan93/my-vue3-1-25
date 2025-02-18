<script setup>
defineProps({
    assignment: Object,
    title: String
});
</script>

<template>
    <li class="mb-2" :class="{ 'line-through': assignment.status }">
        <label :for="title" class=" flex justify-between space-x-2 items-center  ">
            <div>
                {{ assignment.name }}
                <span class="text-red-400 text-xs">{{ assignment?.tag }}</span>
            </div>
            <input type="checkbox" v-model="assignment.status" :id="title" class="  ">
        </label>
    </li>
</template>