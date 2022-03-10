<script setup>
import { RouterLink, RouterView } from 'vue-router';
import chatNav from './components/chatNav.vue';
import Footer from './components/Footer.vue';
import offerCard from './assets/offerCard.vue';
</script>

<template>
    <div class="flex" style="height: calc(100vh - 262px)">
        <div class="hidden md:block">
            <chatNav />
        </div>
        <div v-if="$route.path === '/'" class="md:hidden w-screen">
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
