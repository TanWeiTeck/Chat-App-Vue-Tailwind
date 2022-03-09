<template>
    <div
        class="border md:flex w-screen justify-around text-xs p-6 text-gray-500"
    >
        <div class="flex flex-col py-8 space-y-3">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </div>
        <div class="flex flex-col space-y-3">
            <h1 class="text-sm">Resources Center</h1>
            <a href="#">FAQs</a>
            <a href="#">User Guidelines</a>
            <a href="#">Blog / News</a>
            <a href="#">Memberships</a>
            <a href="#">How to Get Started</a>
        </div>
        <div class="flex flex-col py-8 space-y-3">
            <a href="#">Fee and Charges</a>
            <a href="#">Dispute</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
        </div>
        <form
            @submit.prevent="toggleSubscription"
            class="flex flex-col space-y-3"
        >
            <h1 class="text-blue-800 text-sm">Newsletter Subscription</h1>
            <input
                class="border border-blue-800 py-2 px-5 rounded-full italic"
                type="email"
                placeholder="Email address"
                required
            />
            <div class="flex items-center">
                <input type="checkbox" required />
                <labelc class="text-[10px] pl-3">
                    I have read and agree to the
                    <a href="#"> Privacy Policy</a>.
                </labelc>
            </div>

            <btn class="h-8"> SIGN UP NOW !</btn>
        </form>
    </div>
    <div>
        <p class="text-center text-xs p-4 text-gray-500">
            Copyright 2021 &copy Wewe -All trademarks used are properties of
            their respective owners
        </p>
    </div>
</template>

<script>
import btn from '../assets/btnblue.vue';

export default {
    components: { btn },
    data() {
        return {};
    },
    methods: {
        toggleSubscription() {
            alert('You are subscripted to our Newsletter');
        },
    },
};
</script>

<style></style>
