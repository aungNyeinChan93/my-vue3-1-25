<script setup>
const props = defineProps(['todo'])
</script>

<template>

    <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
        <div>
            <p class="text-sm text-gray-500">{{ todo.id }}</p>

            <p class="text-2xl font-medium text-gray-900">{{ todo.title }}</p>
        </div>

        <div class="inline-flex gap-2 rounded-sm bg-green-100 p-1 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>

            <span class="text-xs font-medium"> {{ todo.completed }} </span>
        </div>
    </article>

</template>