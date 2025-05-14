<script setup>
import { PrimeIcons } from '@primevue/core/api';
import { ref } from 'vue';
import { AnnotationIcon } from "@vue-hero-icons/outline"
import { RouterLink } from 'vue-router';
const icons = ref([
    { icon: PrimeIcons.FACEBOOK },
    { icon: PrimeIcons.FACEBOOK },
    { icon: PrimeIcons.FACEBOOK }
]);
</script>

<template>
    <div class="Footer ">
        <RouterLink class="Logo ">
            <img src="../assets/img/roadster-fill.svg" alt="car-icon">
            <h2>RentCard</h2>
        </RouterLink>
        <p class="w-[30rem] min-w-[25rem] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis illum nisi ab eligendi labore, incidunt
            facere perspiciatis unde. Esse, corporis.
        </p>
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
            <a href="" target="_blank">
                <i class="ri-facebook-box-fill"></i>
            </a>
            <a href="" target="_blank">
                <i class="ri-instagram-line"></i>
            </a>
            <a href="" target="_blank">
                <i class="ri-twitter-x-line"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

.Footer {
    @apply bg-slate-100 w-full h-[20rem] flex flex-col gap-[1.4rem] justify-center items-center;

    .Footer_Links {
        @apply flex gap-[1.2rem];

        a {
            @apply text-black font-normal;
        }
    }

    .Footer_Icons {
        @apply flex gap-[1rem];

        a {
            @apply text-black text-[1.8rem] duration-200 hover:text-[var(--color1)] hover:scale-90;
        }
    }
}
</style>