<template>
  <div>
    <NuxtLayout>
      <Loading v-if="!loaded" />
      <Topbar v-if="loaded" />
      <Social v-if="loaded" />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
const loaded = ref(false);
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

onMounted(async () => {
  await sleep(3000);
  loaded.value = true;
})
</script>

<style>
@import "~/assets/index.css";
</style>