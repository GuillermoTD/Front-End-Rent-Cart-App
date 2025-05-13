<script setup>
import { PrimeIcons } from '@primevue/core/api';
import { ref } from 'vue';
import { AnnotationIcon } from "@vue-hero-icons/outline"
const icons = ref([
    { icon: PrimeIcons.FACEBOOK },
    { icon: PrimeIcons.FACEBOOK },
    { icon: PrimeIcons.FACEBOOK }
]);
</script>

<template>
    <div class="Footer">
        <p>Logo</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, accusantium. Sint, assumenda nisi!</p>
        <div class="Footer_Links">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">History</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Blogs</a>
        </div>

        <div class="Footer_Icons">
            <div class="Footer_Icons_Networks">
                <!-- <i :class="[item.icon]" v-for="(item, index) in icons" :key="index"></i> -->
            </div>
            <i class="ri-facebook-box-fill"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-twitter-x-line"></i>

        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

.Footer {}
</style>