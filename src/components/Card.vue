<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <RouterLink to="/cars/5" class="Card">
        <div class="Card_Title">
            <p>Hyundai Tucson Fwd</p>
            <i class="pi pi-heart"></i>
        </div>

        <div class="Card_Image">
            <img src="../assets/img/Hero2.png" alt="card-image">
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
        <div class="Card_Price">
            <span>
                <span class="text-[1.2rem] ">$53/</span>
                <span class="text-slate-400 text-[0.8rem]">day</span>
            </span>

            <div class="Card_Price_Btn">Rent Now</div>

        </div>
    </RouterLink>
</template>

<style scoped>
@reference "tailwindcss";

.Card {
    @apply p-[1rem] h-[18rem] w-[22rem] bg-[var(--cardColor)] rounded-[0.4rem] flex flex-col items-center gap-[1.2rem] text-black transform duration-500 hover:scale-110;


    .Card_Title {
        @apply text-wrap text-[1.125rem] w-full flex justify-evenly items-center;
    }

    .Card_Price {
        @apply text-wrap font-bold text-[1.04rem] w-full flex justify-center gap-[1rem];

        .Card_Price_Btn{
            @apply font-normal bg-[var(--color1)] text-white text-[1.14rem] px-[1rem] rounded-[0.2rem] cursor-pointer;
        }
    }

    .Card_Image {
        @apply w-[72%] h-[50%] flex items-center;
    }

    .Card_Icons {
        @apply flex w-full justify-evenly mt-[1rem];

        .Card_Icons_Item {
            @apply flex items-center gap-[0.3rem];

            img {
                @apply w-[1.015rem] h-[1.015rem];
            }

            p {
                @apply text-slate-500 text-[0.8rem];
            }
        }

    }

}
</style>