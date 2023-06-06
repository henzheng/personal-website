<template>
    <h3 id="type">{{ text }}</h3>
</template>

<script setup>
const text = ref("");
const props = defineProps({
    text: String,
});

onMounted(async () => {
    let letter = 0;
    function typeText() {
        if (letter < props.text.length) {
            text.value += props.text.charAt(letter);
            letter++;
            let speed = 50
            setTimeout(typeText, speed);
        }
    }
    typeText();
})
</script>

<style scoped>
#type {
    display: inline-block;
    margin-bottom: 1rem;
    line-height: 1;
    border-right: 3px solid skyblue;
    animation: cursor 1s step-end infinite;
}

@keyframes cursor {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: skyblue;
    }
}</style>