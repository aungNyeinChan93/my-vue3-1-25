<script setup>

</script>

<template>
    <a href="#" class="block border p-4 rounded my-3">
        <slot name="image" />

        <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            <slot name="title" />
        </h3>

        <p class="mt-2 max-w-sm text-gray-700">
            <slot />
        </p>
    </a>
</template>
