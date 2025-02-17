<script setup>
const props = defineProps(['color', 'type', 'action', 'disabled'])
</script>

<template>
    <button :disabled="disabled" :class="color" :type="type" @click="action" class="px-4 py-2 rounded">
        <slot />
    </button>
</template>