<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <RouterLink :to="`/cars:id`" class="Card">
        <div class="Card_Title">Hyundai Tucson Fwd</div>
        <div class="Card_Price">$53/day</div>
        <div class="Card_Image">
            <img src="../assets/img/Hero1.png" alt="card-image">
        </div>
        <div class="Card_Icons">
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
        </div>
    </RouterLink>
</template>

<style scoped>
@reference "tailwindcss";

.Card {
    @apply p-[1rem] h-[25rem] w-[20rem] bg-[var(--cardColor)] rounded-[0.4rem] flex flex-col 
            items-center gap-[1.4rem] text-black transform duration-500 hover:scale-110;
    


    .Card_Title{
        @apply text-wrap font-bold text-[1.8rem];
    }

    .Card_Price{
        @apply text-wrap font-bold text-[1.8rem] text-left w-full;
    }

    .Card_Image{
        @apply w-[90%] h-[90];
    }

}
</style>