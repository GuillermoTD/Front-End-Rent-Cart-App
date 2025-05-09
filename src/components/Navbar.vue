<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import Ripple from 'primevue/ripple'
defineProps({
    msg: String,
})


// Menú de navegación
const items = ref([
    {
        label: 'Inicio',
        icon: 'pi pi-home',
        command: () => { console.log('Inicio') }
    },
    {
        label: 'Cursos',
        icon: 'pi pi-book',
        items: [
            {
                label: 'Mis Cursos',
                icon: 'pi pi-folder'
            },
            {
                label: 'Explorar',
                icon: 'pi pi-search'
            }
        ]
    },
    {
        label: 'Perfil',
        icon: 'pi pi-user',
        badge: 3,
        shortcut: 'Ctrl+P'
    }
])
</script>

<template>
    <div class="w-full bg-slate-100">
        <Menubar :model="items">
            <template #start>
                <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="h-8">
                    <path d="..." fill="var(--p-primary-color)" />
                    <path d="..." fill="var(--p-text-color)" />
                </svg>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span>{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                        item.shortcut }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
                    <Avatar image="src\assets\profile.jpg" shape="circle" />
                </div>
            </template>
        </Menubar>
    </div>

</template>

<style scoped>
@reference "tailwindcss";

.Prueba {
    @apply bg-emerald-500;
}
</style>
