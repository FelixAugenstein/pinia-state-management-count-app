<template>
    <div class="buttons">
        <button @click="storeCounter.increaseCount">
            {{ storeCounter.count }}
        </button>
    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter.js'

const storeCounter = useCounterStore()
</script>

<style scoped>
.buttons button {
    font-size: 40px;
    margin: 10px;
}
</style>