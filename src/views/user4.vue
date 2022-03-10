<template>
    <div class="text-sm h-full overflow-y-auto relative min-w-[320px]">
        <!-- header -->
        <header
            class="flex bg-white justify-between items-center px-4 h-12 sticky top-0 shadow-lg"
        >
            <div>
                <div class="flex space-x-4 items-center" href="#">
                    <img
                        src="https://img.icons8.com/office/40/000000/test-account.png"
                    />

                    <div class="flex flex-col">
                        <h3 class="font-medium">{{ name }}</h3>
                        <p class="text-xs text-gray-400">last seen</p>
                    </div>
                </div>
            </div>

            <div class="flex items-center">
                <btn class="" @click="toggleOffer"> Custom Offer</btn>

                <div class="flex h-6 sm:pl-5 space-x-1 md:space-x-3">
                    <img
                        class="opacity-40 hover:opacity-100 cursor-pointer hidden sm:block"
                        src="https://img.icons8.com/ios/50/000000/mail.png"
                    />
                    <img
                        class="rotate-90 opacity-40 hover:opacity-100 cursor-pointer hidden sm:block"
                        src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-tag-interface-kiranshastry-lineal-kiranshastry.png"
                    />
                    <img
                        class="opacity-40 hover:opacity-100 cursor-pointer hidden sm:block"
                        src="https://img.icons8.com/ios/52/000000/star--v1.png"
                    />

                    <img
                        class="sm:rotate-90 opacity-40 hover:opacity-100"
                        src="https://img.icons8.com/fluency-systems-filled/48/000000/menu-2--v1.png"
                    />
                </div>
            </div>
        </header>
        <!-- end header -->
        <!-- chats -->

        <div class="flex flex-col space-y-5 bg-gray-200 p-3 min-h-full">
            <div
                v-for="(message, index) in messages"
                :key="index"
                class="flex pr-5"
                :class="{
                    'justify-end': message.user,
                    'pl-5': message.user,
                    'pr-0': message.user,
                }"
            >
                <div
                    v-if="message.offer"
                    class="bg-white max-w-2xl rounded-2xl"
                    :class="{ 'bg-blue-200': message.user }"
                >
                    <offerCard :offer="message" />
                </div>

                <div
                    v-if="message.text"
                    class="bg-white max-w-2xl p-3 rounded-2xl"
                    :class="{ 'bg-blue-200': message.user }"
                >
                    {{ message.text }}
                    <br />
                    <span class="float-right text-gray-500 italic text-xs">
                        {{ message.time }}
                    </span>
                </div>
            </div>
        </div>

        <!-- end chats -->
        <!-- message input -->
        <div class="flex p-3 bg-white justify-between w-auto sticky bottom-0">
            <div
                class="flex bg-gray-200 h-12 rounded-full w-full justify-between"
            >
                <input
                    @keyup.enter="addMessage"
                    v-model="tempMessage"
                    class="bg-gray-200 rounded-full px-6 focus:outline-none w-full"
                    type="text"
                    placeholder="message here..."
                />
                <div class="flex px-2 bg-opacity-20 items-center space-x-2">
                    <label>
                        <img
                            class="opacity-30 w-10 hover:opacity-100"
                            src="https://img.icons8.com/ios-glyphs/60/000000/attach.png"
                        />
                        <input class="hidden" type="file" />
                    </label>
                    <div>
                        <img
                            class="opacity-30 w-9 hover:opacity-100"
                            src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neu-emoji-neu-royyan-wijaya-4.png"
                        />
                    </div>
                </div>
            </div>
            <button
                @keyup.enter="addMessage"
                @click="addMessage"
                class="flex px-0 md:px-4 items-center m-auto text-xl text-blue-800 space-x-2"
            >
                <span class="hidden md:block">SEND</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 172 172"
                    style="fill: #4a90e2"
                >
                    <g
                        fill="none"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        style="mix-blend-mode: normal"
                    >
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#1e40af">
                            <path
                                d="M21.5,21.5c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667v40.10254c0,3.68367 2.79063,6.75918 6.4528,7.12468l101.0472,10.10612l-101.0472,10.10612c-3.66217,0.3655 -6.4528,3.44101 -6.4528,7.12468v40.10254c0,3.95804 3.20863,7.16667 7.16667,7.16667c1.36825,0.00318 2.70882,-0.38539 3.86328,-1.11979c0.00467,-0.00466 0.00934,-0.00932 0.014,-0.014l127.55827,-56.60547l-0.014,-0.02799c2.84223,-1.02037 4.73988,-3.71291 4.74511,-6.73275c-0.00523,-3.01984 -1.90288,-5.71237 -4.74511,-6.73275l0.014,-0.02799l-127.65625,-56.64746c-1.13327,-0.70932 -2.44235,-1.08751 -3.7793,-1.0918z"
                            ></path>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <!-- end message input -->
    </div>
</template>

<script>
import { TransitionGroup } from '@vue/runtime-dom';
import btn from '../assets/btnwhite.vue';
import offerCard from '../assets/offerCard.vue';

export default {
    name: 'chatbox',
    components: {
        btn,
        offerCard,
    },

    data() {
        return {
            name: 'USER-4',
            tempMessage: '',
            // dummy data
            messages: [
                {
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicingniti nulla, nobis dignissimos a omnis architecto repellat aperiam. Consequuntur architecto autem assumenda culpa voluptatibus vero, sit aut.',
                    time: '16/01/2022 12:13pm',
                    user: false,
                },
                {
                    offer: true,
                    label: "Talent's package name",
                    description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repellendus aspernatur ea autem labore corporis vel accusantium, assumenda vero architecto.',
                    time: 'dd/mm/yy',
                    budget: '$100 (fixed amount)',
                    accepted: false,
                    user: true,
                },
                {
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus ducimus itaque iusto molestias animi repelusto nemo totam. Expedita deleniti nulla, nobis dignissimos a omnis architecto repellat aperiam. Consequuntur architecto autem assumenda culpa voluptatibus vero, sit aut.',
                    time: 'message time',
                    user: true,
                },
                {
                    text: 'Lorem, ipsum dolor chitecto repellat aperiam. Consequuntur architecto autem assumenda culpa voluptatibus vero, sit aut.',
                    time: 'message time',
                    user: true,
                },
                {
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus ducimus itaque iusto molestias animi repellendus ad modi incidunt aut? Soluta autem magni corrupti commodi! Possimus perferendis repudiandae iusto nemo totam. Expedita deleniti nulla, nobis dignissimos a omnis architecto repellat aperiam. Consequuntur architecto autem assumenda culpa voluptatibus vero, sit aut.',
                    time: 'message time',
                    user: false,
                },
                {
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus ducimus itaque iusto molestias animi repellendus ad modi incidunt aut? Soluta autemtecto repellat aperiam. Consequuntur architecto autem assumenda culpa voluptatibus vero, sit aut.',
                    time: 'message time',
                    user: true,
                },
                {
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In s vero, sit aut.',
                    time: 'message time',
                    user: false,
                },
            ],
            // end dummy data
        };
    },
    methods: {
        toggleOffer() {
            const labelInput = prompt('please enter project name');
            if (labelInput) {
                const descriptionInput = prompt(
                    'please enter project descriptions'
                );
                const timeInput = prompt(
                    'please enter expected delivery time (dd/mm/yy)',
                    'dd/mm/yy'
                );
                const budgetInput = prompt(
                    'please enter your budget (USD)',
                    '$'
                );
                this.messages.push({
                    offer: true,
                    label: labelInput,
                    description: descriptionInput,
                    time: timeInput,
                    budget: budgetInput,
                    accepted: false,
                    user: true,
                });
                alert('Offer Added!!');
            } else {
                alert('No Offer Added, Please specify Project Name!');
            }
        },

        twoDigits(num) {
            return num.toString().padStart(2, '0');
        },

        formatHour(num) {
            let time = num.toString();
            if (time == 0) {
                return (time = 12);
            } else if (time > 12) {
                return (time -= 12);
            } else {
                return time;
            }
        },

        checkAMPM(num) {
            if (num >= 12) {
                return 'pm';
            } else {
                return 'am';
            }
        },

        addMessage(e) {
            if (this.tempMessage) {
                this.messages.push({
                    text: this.tempMessage,
                    time:
                        this.twoDigits(new Date().getDate()) +
                        '/' +
                        this.twoDigits(new Date().getMonth() + 1) +
                        '/' +
                        new Date().getFullYear() +
                        ' ' +
                        this.formatHour(new Date().getHours()) +
                        ':' +
                        this.twoDigits(new Date().getMinutes()) +
                        this.checkAMPM(new Date().getHours()),

                    user: true,
                });
                this.tempMessage = '';
            }
        },
    },
};
</script>

<style></style>
