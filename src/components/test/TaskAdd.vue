<script setup>

const props = defineProps({
    action: Function,

});

const task = defineModel();

const emit = defineEmits(['alert-emit'])



</script>

<template>
    <form @submit.prevent="action">
        <div class="flex justify-between items-center space-x-2">
            <input type="text" v-model="task.name" class="bg-gray-600 rounded text-white">
            <input type="text" v-model="task.tag" class="bg-gray-600 rounded text-white">
            <input type="submit" value="Add">
        </div>
    </form>
    <!-- <button type="button" @click="alert">Alert</button> -->
</template>