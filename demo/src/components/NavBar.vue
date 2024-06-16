<template>
    <nav class="sticky top-0 left-0 right-0 z-50 bg-white shadow-custom">
        <!-- your other nav content here -->
        <div class="container flex justify-around items-center mx-auto p-4">
            <router-link to="/" class="flex-shrink-0">
                <img src="../assets/img/allo.png" alt="" class="w-2/5">
            </router-link>

            <div class="hidden lg:flex lg:flex-grow lg:justify-center">
                <ul class="flex space-x-4">
                    <li class="nav-item">
                        <router-link to="/RulesAndDuties" class="nav-link text-blue-500 py-2 px-4 font-bold transition-colors duration-200 hover:text-green-500">Rules and Duties</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/WhyWeExist" class="nav-link text-blue-500 py-2 px-4 font-bold transition-colors duration-200 hover:text-green-500">Why We Exist</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/OurService" class="nav-link text-blue-500 py-2 px-4 font-bold transition-colors duration-200 hover:text-green-500">Service</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="" class="nav-link text-blue-500 py-2 px-4 font-bold transition-colors duration-200 hover:text-green-500" @click="toggleModal">Join our witless</router-link>
                    </li>
                </ul>
            </div>

            <div class="hidden lg:block">
                <router-link to="" class="nav-btn text-secondary text-lg py-2 px-8 cursor-pointer rounded-custom ml-9 border-3 border-secondary  text-custom-gray  transition-colors duration-800 hover:bg-secondary hover:text-primary font-bold">Soon</router-link>
            </div>

            <!-- Mobile menu button -->
            <div class="lg:hidden text-secondary">
                <button @click="toggleMobileMenu" class="text-gray-700 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile menu -->
        <div :class="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}" class="lg:hidden">
            <ul class="flex flex-col space-y-4 p-4">
                <li class="nav-item">
                    <router-link to="/RulesAndDuties" class="nav-link text-primary py-2 px-4 font-bold transition-colors duration-200 hover:text-secondary" @click="toggleMobileMenu">Rules and Duties</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/WhyWeExist" class="nav-link text-primary py-2 px-4 font-bold transition-colors duration-200 hover:text-secondary" @click="toggleMobileMenu">Why We Exist</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/OurService" class="nav-link text-primary py-2 px-4 font-bold transition-colors duration-200 hover:text-secondary" @click="toggleMobileMenu">Service</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="" class="nav-link text-primary py-2 px-4 font-bold transition-colors duration-200 hover:text-secondary" @click="() => { toggleModal(); toggleMobileMenu(); }">Join our witless</router-link>
                </li>
            </ul>

            <div class="p-4">
                <router-link to="" class="nav-btn text-lg py-2 px-8 cursor-pointer rounded-lg border-3 border-green-500 text-gray-800 transition-colors duration-200 hover:bg-green-500 hover:text-blue-500 font-bold">Soon</router-link>
            </div>
        </div>

        <JoinOurWit :modelActive="modelActive" @close-modal="toggleModal"/>
    </nav>
</template>

<script setup>
import JoinOurWit from './JoinOurWit.vue';
import { ref } from 'vue';

const modelActive = ref(null);
const toggleModal = () => {
    modelActive.value = !modelActive.value;
};

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
