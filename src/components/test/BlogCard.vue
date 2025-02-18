<script setup>
defineProps(['title', 'description'])
</script>

<template>
    <article class="group">

        <slot name="image" />

        <div class="p-4">
            <a href="#">
                <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {{ description }}
            </p>
            <button class=" float-end" @click="$emit('hide')">X</button>
        </div>
    </article>
</template>
<!-- <img alt=""
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]" /> -->