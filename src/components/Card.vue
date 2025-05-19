<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <RouterLink :to="`/cars:id`" class="Card">
        <div class="Card_Title">Hyundai Tucson Fwd</div>
        <div class="Card_Price"><span>$53</span><span>/day</span></div>
        <div class="Card_Image">
            <img src="../assets/img/Hero1.png" alt="card-image">
        </div>
        <div class="Card_Icons">
            <div class="Card_Icons_Item">
                <img src="../assets/img/alloy-wheel.svg" alt="">
                <p>AWC</p>
            </div>

            <div class="Card_Icons_Item">
                <img src="../assets/img/steering-wheel.svg" alt="">
                <p>Automatico</p>
            </div>

            <div class="Card_Icons_Item">
                <img src="../assets/img/fuel-tank.svg" alt="">
                <p>37MPG</p>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
@reference "tailwindcss";

.Card {
    @apply p-[0.4rem] h-[23rem] w-[22rem] bg-[var(--cardColor)] rounded-[0.4rem] flex flex-col items-center gap-[1.4rem] text-black transform duration-500 hover:scale-110;


    .Card_Title {
        @apply text-wrap font-bold text-[1.8rem] w-full;
    }

    .Card_Price {
        @apply text-wrap font-bold text-[1.4rem] w-full;
    }

    .Card_Image {
        @apply w-[90%] h-[90];
    }

    .Card_Icons {
        @apply flex w-full justify-evenly mt-[1rem];

        .Card_Icons_Item {
            @apply flex flex-col items-center;

            img {
                @apply w-[1.4rem] h-[1.4rem];
            }
        }

    }

}
</style>