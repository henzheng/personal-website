<template>
    <div class="flex flex-col items-center w-[65vw] m-auto lg:flex-row lg:gap-10">
        <div class="flex flex-col gap-4 w-3/4">
            <slot></slot>
        </div>
        <img class="w-1/4 mt-9" :src="image" :alt="alt">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    image: String,
    alt: String,
})
</script>