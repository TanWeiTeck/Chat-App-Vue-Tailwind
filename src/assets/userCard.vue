<template>
    <a
        class="flex space-x-4 items-center p-4 hover:bg-gray-200 focus:bg-blue-100"
        href="#"
    >
        <img src="https://img.icons8.com/office/40/000000/test-account.png" />
        <div class="w-full">
            <div class="font-medium flex justify-between items-center">
                <h3>{{ user.name }}</h3>
                <div class="flex space-x-2">
                    <img
                        v-if="user.bookmark"
                        class="h-4"
                        src="https://img.icons8.com/external-inkubators-blue-inkubators/25/000000/external-tag-ecommerce-user-interface-inkubators-blue-inkubators.png"
                    />
                    <img
                        v-if="user.favorite"
                        class="h-4 cursor-pointer"
                        src="https://img.icons8.com/office/16/000000/filled-star--v1.png"
                    />
                    <img
                        v-if="!user.favorite"
                        class="h-4"
                        src="https://img.icons8.com/office/16/000000/filled-star--v2.png"
                    />
                </div>
            </div>

            <div class="text-gray-400 flex justify-between">
                <p>{{ user.lastMessage }}</p>
                <p class="text-gray-400 italic">
                    {{ user.time }}
                </p>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'userCard',
    props: ['user'],
};
</script>

<style></style>
