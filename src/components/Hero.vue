<script setup>
import Divider from 'primevue/divider';
import Select from 'primevue/select';
</script>

<template>
    <div class="Hero Page">
        <div class="Hero_Content">
            <h2 class="Hero_Content_Title">Find you Dream Car</h2>
            <div class="Hero_Content_Input">
                <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City"
                    class="w-full md:w-56" />
                <Divider layout="vertical" />
                <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City"
                    class="w-full md:w-56" />
                <Divider layout="vertical" />
                <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City"
                    class="w-full md:w-56" />
                <Divider layout="vertical" />
                <div class="Hero_Content_Input_Btn">Search</div>
            </div>
            <div class="Hero_Content_Image">
                <img src="../assets/img/tesla.png" alt="Hero_Image">
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "tailwindcss";

.Hero {
    @apply bg-slate-100 w-full overflow-x-hidden min-h-[100vh] flex justify-center gap-[2rem] scroll-smooth ;

    .Hero_Content {
        @apply flex flex-col justify-center items-center gap-[2.1rem];

        .Hero_Content_Title {
            @apply text-[3rem] uppercase font-bold;
        }

        .Hero_Content_Image {
            @apply w-[90%] h-[23rem] overflow-hidden flex items-center justify-center;

            img {
                @apply w-full h-full object-contain;
            }

        }

        .Hero_Content_Input {
            @apply bg-white w-[80%] min-h-[4rem] rounded-[4rem] flex justify-center items-center p-[1.5rem] flex-wrap gap-[1.2rem];

            .Hero_Content_Input_Btn {
                @apply bg-emerald-400 rounded-[0.3rem] w-[10rem] h-[2.7rem] text-center flex justify-center items-center cursor-pointer;
            }

            .p-select {
                @apply w-[10rem];
            }
        }
    }
}
</style>