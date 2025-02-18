<script setup>
defineProps({
    assignment: Object,
    title: String
});
</script>

<template>
    <li class="mb-2" :class="{ 'line-through': assignment.status }">
        <label :for="title">
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.status" :id="title" class="ms-2">
        </label>
    </li>
</template>