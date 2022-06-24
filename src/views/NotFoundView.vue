<template>
    <MenuComponent />

    <h1>404 not found</h1>
    <p>The page you are looking for is not available.</p>
</template>

<script>
import MenuComponent from '../components/MenuComponent'

export default {
    name: 'NotFoundView',
     components: {
        MenuComponent
    }
}
</script>

<style scoped>
</style>