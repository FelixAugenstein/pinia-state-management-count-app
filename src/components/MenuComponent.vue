<template>
        <!-- Menu -->
        <nav>
                <router-link to="/" class="nav-link">
                    Home
                </router-link>
                 | 
                <router-link to="/about" class="nav-link">
                    About
                </router-link>
        </nav>
</template>

<script>
export default {
  name: 'MenuComponent'
}
</script>

<style scoped>
a {
    color: #3eaf7c;
    text-decoration: none;
}
nav{
    text-align: center;
}
.router-link-active {
    text-decoration: underline;
}
</style>
