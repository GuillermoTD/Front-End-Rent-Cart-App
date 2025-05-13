<script setup>
import Hero from '../components/Hero.vue';
import { Category } from "../assets/js/Data.js"

console.log(Category.map(item => console.log(item.name)));


</script>


<template>
    <div class="HomePage">
        <Hero></Hero>
        <h2>Browse By Type</h2>
        <div class="HomePage_CarTypeFilter">
            <div class="HomePage_CarTypeFilter_Item basic-border " v-for="item in Category" :key="item.id">
                <img :src="item.icon" alt="">
                <strong>{{ item.name }}</strong>
                
            </div>

        </div>
    </div>
</template>



<style scoped>
@reference "tailwindcss";

.HomePage {
    @apply w-full min-h-[100vh] overflow-x-hidden;
}

.HomePage_CarTypeFilter {
    /* @apply w-full min-h-[12rem] grid place-items-center gap-[1.5rem] border border-red-500;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr)); */
    /* CSS nativo */
    @apply w-full min-h-[12rem] flex gap-[1rem] justify-center items-center flex-wrap;
}

.HomePage_CarTypeFilter_Item {
    @apply w-[10rem] max-w-[12rem] h-[6rem] rounded-[0.3rem] flex items-center justify-center flex-col mt-[2rem] mb-[2rem];

    img {
        @apply w-[2.7rem] h-[2.7rem];
    }

    &:hover {
        background:var(--color1);
        transition: .4s ease-in-out;
        transform: scale(1.07, 1.07);
        cursor: pointer;
    }
}
</style>