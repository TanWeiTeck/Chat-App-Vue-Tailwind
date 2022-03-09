<template>
    <div class="border text-sm w-72 h-full overflow-auto">
        <!-- header -->
        <div
            class="flex bg-white shadow-lg justify-between items-center px-4 h-12 sticky top-0"
        >
            <h1 class="flex items-center">
                <select
                    class="select-none w-40 font-medium focus:outline-none"
                    style="
                        -webkit-appearance: none;
                        background-image: url(https://img.icons8.com/material-rounded/24/000000/sort-down.png);
                        background-repeat: no-repeat;
                        background-position-y: 70%;
                        background-position-x: 100%;
                    "
                >
                    <option value="">ALL CONVERSATON</option>
                    <option value="favorite">FAVORITE</option>
                    <option value="bookmark">BOOKMARK</option>
                </select>
            </h1>
            <img
                class="h-5 opacity-60 cursor-pointer hover:opacity-100"
                src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
            />
        </div>
        <!-- end header -->

        <!-- chat record -->
        <div class="bg-white">
            <div class="border" v-for="user in users" :key="user.id">
                <RouterLink :to="user.path">
                    <a
                        class="flex space-x-4 items-center p-4 hover:bg-gray-200 focus:bg-blue-100"
                        href="#"
                    >
                        <img
                            src="https://img.icons8.com/office/40/000000/test-account.png"
                        />
                        <div class="w-full">
                            <div
                                class="font-medium flex justify-between items-center"
                            >
                                <h3>{{ user.name }}</h3>
                                <div class="flex space-x-2">
                                    <img
                                        v-if="user.bookmark"
                                        class="h-4"
                                        src="https://img.icons8.com/external-inkubators-blue-inkubators/25/000000/external-tag-ecommerce-user-interface-inkubators-blue-inkubators.png"
                                    />
                                    <img
                                        @click="toggleFavorite"
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
                </RouterLink>
            </div>
        </div>
        <!-- end chats record -->
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    data() {
        return {
            // dummy data
            users: [
                {
                    id: 1,
                    path: '/user1',
                    name: 'USER-1',
                    lastMessage: 'last message...',
                    time: 'time',
                    favorite: true,
                    bookmark: false,
                },
                {
                    id: 2,
                    path: '/user2',
                    name: 'USER-2',
                    lastMessage: 'last message...',
                    time: 'time',
                    favorite: false,
                    bookmark: true,
                },
                {
                    id: 3,
                    path: '/user3',
                    name: 'USER-3',
                    lastMessage: 'last message...',
                    time: 'time',
                    favorite: true,
                    bookmark: false,
                },
                {
                    id: 4,
                    path: '/user4',
                    name: 'USER-4',
                    lastMessage: 'last message...',
                    time: 'time',
                    favorite: true,
                    bookmark: true,
                },
                {
                    id: 5,
                    path: '/user5',
                    name: 'USER-5',
                    lastMessage: 'last message...',
                    time: 'time',
                    favorite: false,
                    bookmark: false,
                },
                {
                    id: 6,
                    path: '/user6',
                    name: 'USER-6',
                    lastMessage: 'last message...',
                    time: 'time',
                    favorite: false,
                    bookmark: false,
                },
            ],
            // end dummy data
        };
    },
    methods: {},
};
</script>

<style></style>
