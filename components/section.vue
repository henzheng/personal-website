<template>
    <div class="flex flex-col items-center md:grid md:grid-cols-[3fr,1fr] md:gap-8">
        <div class="flex flex-col gap-4">
            <slot></slot>
        </div>
        <img class="h-[250px] w-[250px] aspect-square mt-8" :src="image" :alt="alt">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    image: String,
    alt: String,
})
</script>

<style scoped>
@media only screen and (max-width: 960px) {
    .inner img {
        height: 200px;
        width: 200px;
    }
}

@media only screen and (max-width: 768px) {
    .inner {
        display: block;
    }

    .inner img {
        margin-left: 80px;
    }
}
</style>