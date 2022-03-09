<script setup>
import { RouterLink, RouterView } from 'vue-router';
import chatNav from './components/chatNav.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <div class="flex" style="height: calc(100vh - 262px)">
        <div class="hidden md:block">
            <chatNav />
        </div>
        <div class="bg-white grow">
            <RouterView />
        </div>
    </div>
    <div class="">
        <Footer />
    </div>
</template>
