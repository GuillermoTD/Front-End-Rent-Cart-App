<script setup>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import { CarMakes } from "../assets/js/Data.js";
import { ref } from "vue";
import Card from '../components/Card.vue';
import { RouterLink } from 'vue-router';

const selectedBrandCard = ref();
const brands = ref(CarMakes);

</script>


<template>
    <div class="CarsPage Page">
        <div class="content">
            <div class="CarsPage_Title">
                <h2>Car Catalogue</h2>
                <p>Explore out cars you might like</p>
            </div>

            <div class="CarsPage_Filter">
                <div class="CarsPage_Filter_LeftSide">
                    <Select v-model="selectedBrandCard" :options="brands" optionLabel="name" placeholder="Brand"
                        class="w-[40%]" />

                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="City"
                        class="w-[40%]" />

                    <Button icon="pi pi-search" iconPos="center" class="outline-none" />
                </div>
                <div class="CarsPage_Filter_RightSide">
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="City"
                        class="w-[50%]" />

                    <Select v-model="selectedCity" :options="CarMakes" optionLabel="name" placeholder="City"
                        class="w-[50%]" />
                </div>
            </div>

            <div class="GridCards">

                <Card  v-for="item in CarMakes" :key="item.id"></Card>
            </div>
        </div>
    </div>
</template>



<style >
@reference "tailwindcss";

.CarsPage {

    @apply flex flex-col gap-y-[4rem] w-full pb-[3rem];

    .CarsPage_Title {
        @apply flex flex-col items-start mt-[3rem];

        h2 {
            @apply font-bold text-[2.7rem];
        }
    }

    .CarsPage_Filter {
        @apply flex justify-between items-center w-full h-[5rem] mt-[2rem];

        .CarsPage_Filter_LeftSide {
            @apply flex w-[70%] h-[2.4rem] gap-[2rem];

            select {
                @apply w-[40%] border-[1px] border-slate-300 outline-none rounded-[0.4rem];
            }

        }

        .CarsPage_Filter_RightSide {
            @apply flex w-[30%] h-[2.4rem] gap-[2rem];

        }
    }

    
}
</style>
