<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import Ripple from 'primevue/ripple'
import {RouterLink} from "vue-router"

defineProps({
    msg: String,
})


// Menú de navegación
const items = ref([
    {
        label: 'Home',
        url:"/",
        icon: 'pi pi-home',
        command: () => { console.log('Inicio') }
    },
    {
        label: 'Cars',
        url:"/cars",
        icon: 'pi pi-book',
        items: [
            {
                label: 'My Rents',
                icon: 'pi pi-folder'
            },
           
        ]
    },
    {
        label: 'profile',
        url:"/profile",
        icon: 'pi pi-user',
        badge: 3,
        shortcut: 'Ctrl+P'
    }
])
</script>

<template>
    <div class="w-full fixed Navbar">
        <Menubar :model="items" class="rounded-none">
            <!-- Logo -->
            <template #start>   
                <RouterLink class="text-muted-color Logo">
                    <img src="../assets/img/roadster-fill.svg" alt="car-icon">
                    <h2>RentCard</h2>
                </RouterLink>
            </template>
            <!-- Link Menu -->
            <template #item="{ item, props, hasSubmenu, root }">
                <RouterLink :to="item.url" v-ripple class="flex items-center" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                        item.shortcut }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                </RouterLink>
            </template>
            <!-- Profile bubble -->
            <template #end>
                <div class="flex items-center gap-2">
                    <Avatar image="src\assets\profile.jpg" shape="circle" />
                </div>
            </template>
        </Menubar>
    </div>
</template> 

<style scoped>
@reference "tailwindcss";

.p-menubar{
    @apply flex gap-[1rem] justify-around;
}


.Navbar {
    margin-bottom: 40rem;
    border:none;
    z-index: 100;

    
}

.p-menubar{
    border-radius:0%;
}


</style>
