<template>
    <div class="home-page">home page,message:{{ message }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('hello')

</script>

<style scoped lang="scss">
.home-page {
    color: $primary-color;
}
</style>