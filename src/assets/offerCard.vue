<template>
    <div class="border border-blue-800 rounded-2xl min-w-2xl">
        <header class="bg-blue-800 text-white p-3 rounded-t-2xl">
            <h3>Custom Offer Request</h3>
            <p class="text-xs">{{ offer.label }}</p>
        </header>

        <!-- discription -->
        <main class="p-3 h-28">
            <p>
                {{ offer.description }}
            </p>
        </main>
        <!-- discription -->

        <footer class="p-3 border-t border-blue-800 space-y-2">
            <p><strong>Expected delivery time: </strong>{{ offer.time }}</p>
            <p><strong>Budget: </strong>{{ offer.budget }}</p>
            <div class="flex justify-between">
                <p></p>
                <btn>Accept & Create Offer</btn>
            </div>
        </footer>
    </div>
</template>

<script>
import btn from './btnwhite.vue';
export default {
    name: 'offerCard',
    components: { btn },
    props: ['offer'],
    data() {
        return {};
    },
};
</script>

<style></style>
