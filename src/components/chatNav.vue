<template>
    <div
        class="border text-sm min-w-[18rem] bg-red-300 h-full md:h-full overflow-auto"
    >
        <!-- header -->
        <div
            class="flex bg-white shadow-lg justify-between items-center px-4 h-12 sticky top-0"
        >
            <h1 class="flex items-center">
                <select
                    v-model="groupName"
                    class="select-none w-40 font-medium focus:outline-none"
                    style="
                        -webkit-appearance: none;
                        background-image: url(https://img.icons8.com/material-rounded/24/000000/sort-down.png);
                        background-repeat: no-repeat;
                        background-position-y: 70%;
                        background-position-x: 100%;
                    "
                >
                    <option value="">ALL CONVERSATION</option>
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
            <div v-if="!groupName">
                <div class="border" v-for="user in users" :key="user.id">
                    <RouterLink :to="user.path">
                        <userCard :user="user" />
                    </RouterLink>
                </div>
            </div>
            <div v-if="groupName">
                <div
                    class="border"
                    v-for="user in filteredUsers"
                    :key="user.id"
                >
                    <RouterLink :to="user.path">
                        <userCard :user="user" />
                    </RouterLink>
                </div>
            </div>
        </div>
        <!-- end chats record -->
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { RouterLink, RouterView } from 'vue-router';
import userCard from '../assets/userCard.vue';

export default {
    components: { userCard },
    data() {
        return {
            groupName: '',
            filteredUsers: [],
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

    computed: {
        filteredGroup() {
            if (this.groupName === 'favorite') {
                this.filteredUsers = this.users.filter((condition) => {
                    return condition.favorite;
                });
            } else if (this.groupName === 'bookmark') {
                this.filteredUsers = this.users.filter((condition) => {
                    return condition.bookmark;
                });
            }
        },
    },

    watch: {
        groupName: {
            handler() {
                this.filteredGroup;
            },
        },
    },
};
</script>
