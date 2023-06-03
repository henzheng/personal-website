<template>
    <div class="border-primary-blue border-[0px] transition-all ease-in-out duration-300 hover:border-b">
        <a class="text-primary-blue" :href="props.url" target="_blank">{{ props.text }}</a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    url: String,
    text: String,
})
</script>