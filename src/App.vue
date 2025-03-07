<template>
    <NavBar></NavBar>
    <div>
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
</script>