<script setup>
import Navbar from "./components/Navbar.vue"
import { RouterView } from "vue-router"
</script>

<template>
  <div class="GeneralContainer">
    <Navbar></Navbar>
    <div class="mb-[40rem] min-h-[100vh]">
      <RouterView />
    </div>
    <footer class="h-[6rem] bg-slate-950 text-white">fOOTER</footer>
  </div>
</template>

<style scoped>
.GeneralContainer {
  min-height: 100vh;
  width: 100vw;
}
</style>
