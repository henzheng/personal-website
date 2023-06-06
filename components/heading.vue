<template>
    <div class="flex flex-row items-start gap-6 mb-2 md:ml-[15vw] md:gap-5 md:m-0 lg:ml-0">
        <h2 class="text-2xl font-mono text-primary-blue">{{ number }}</h2>
        <h2 class="text-2xl whitespace-nowrap">{{ title }}</h2>
        <hr class="w-20 bg-[#023e8a] opacity-50 mt-4 md:w-60 lg:w-80 border-[1.5px] block">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    number: String,
    title: String,
})

</script>