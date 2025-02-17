<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});


</script>

<template>
    <article class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 my-2">
        <div class="inline-flex gap-2 self-end rounded-sm bg-green-100 p-1 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>

            <span class="text-xs font-medium"> {{ product?.id }} </span>
        </div>

        <div>
            <strong class="block text-lg text-red-600 font-medium"> {{ product?.title }} </strong>

            <p>
                <span class="text-2xl font-medium text-gray-900"> {{ product?.price }} </span>

                <span class="text-sm ms-3 text-gray-500"> {{ product?.category }} </span>
            </p>
        </div>
    </article>
</template>