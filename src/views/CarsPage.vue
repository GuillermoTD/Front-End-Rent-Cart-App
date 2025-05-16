<script setup>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';

</script>


<template>
    <div class="CarsPage Page">
        <div class="CarsPage_Title">
            <h2>Car Catalogue</h2>
            <p>Explore out cars you might like</p>
        </div>

        <div class="CarsPage_Filter">
            <div class="CarsPage_Filter_OneSide">
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-map"></i>
                    </InputGroupAddon>
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="City" />
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-map"></i>
                    </InputGroupAddon>
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="City" />
                </InputGroup>
            </div>
            <div class="CarsPage_Filter_SecondSide">
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-map"></i>
                    </InputGroupAddon>
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="City" />
                </InputGroup>

                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-map"></i>
                    </InputGroupAddon>
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="City" />
                </InputGroup>
            </div>
        </div>
    </div>
</template>



<style scoped>
@reference "tailwindcss";

.CarsPage{

@apply flex flex-col gap-[2rem];

    .CarsPage_Title{
        @apply flex flex-col items-start;
        h2{
            @apply font-bold text-[2.7rem];
        }
    }
}


</style>