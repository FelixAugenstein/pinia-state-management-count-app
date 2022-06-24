<template>
    <MenuComponent />
    
    <h1>Home</h1>
    <p>This is the home section</p>

    <h2>Hello {{storeCounter.userName}}, feel free to change the number:</h2>

    <CounterComponent />

    <div class="buttons">
        <button @click="storeCounter.decreaseCount">-</button>
        <button @click="storeCounter.increaseCount">+</button>
    </div> 

    <hr />

    <div>
        This counter is: {{ storeCounter.oddOrEven }}
    </div>

    <hr />

    <div> 
        <p> Edit the counter: </p>
        <input 
            v-model="storeCounter.count"
            type="number" 
        />
    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter.js'

const storeCounter = useCounterStore()

import MenuComponent from '../components/MenuComponent'
import CounterComponent from '../components/CounterComponent'
</script>

<style scoped>
.count {
    font-size: 60px;
    margin: 20px;
}
.buttons button {
    font-size: 40px;
    margin: 10px;
}
</style>