<script setup>
import { ref } from 'vue';
import Assign from './Assign.vue';
const props = defineProps(['assignments', 'finshedAssigns', 'tags']);

const currentTag = ref();
const emit = defineEmits(['filter-emit'])
const emitFilter = (tagName) => {
    currentTag.value = tagName;
    emit('filter-emit', currentTag)
}
</script>

<template>
    <h2 class="text-center text-2xl text-red-400 font-bold"> Assigment Lists</h2>

    <div class="my-2 border p-1 rounded">
        <template v-for="tag in tags" :key="tag">
            <span class="px-1 rounded bg-gray-200 mx-1" :class="{ 'bg-green-200': tag === currentTag }"
                @click="emitFilter(tag)">{{ tag }}</span>
        </template>
    </div>

    <ul class="list-disc pl-5">
        <template v-for="assignment in assignments" :key="assignment">
            <Assign :assignment="assignment" title="assignment" />
        </template>
    </ul>
    <hr>
    <div v-show="finshedAssigns.length || Object.keys(finshedAssigns).length">
        <h2 class="text-center text-2xl text-red-400 font-bold"> Done Lists</h2>
        <ul class="list-disc pl-5">
            <template v-for="assign in finshedAssigns" :key="assign">
                <label for="assigment">
                    <li>
                        {{ assign.name }}
                    </li>
                </label>
            </template>
        </ul>
    </div>

    <pre>
    <!-- {{ assignments }} -->
</pre>

</template>
