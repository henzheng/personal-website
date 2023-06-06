<template>
    <div class="flex flex-col items-center w-full m-auto lg:flex-row lg:gap-10">
        <div class="flex flex-col gap-4 w-[90vw] md:w-[60vw] lg:w-3/4">
            <slot></slot>
        </div>
        <img class="w-1/2 mt-[25%] md:mt-[5%] md:w-1/4 lg:mt-0" :src="image" :alt="alt">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    image: String,
    alt: String,
})
</script>