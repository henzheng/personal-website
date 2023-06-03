<template>
    <h3 id="type">{{ text }}</h3>
</template>

<script setup>
const props = defineProps({
    text: String,
})
onMounted(() => {
    let letter = 0;
    const text = ref(props.text);
    function typeText() {
        if (letter < text.value.length) {
            text.value += text.value.charAt(letter);
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