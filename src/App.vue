<script setup>
import Navbar from "./components/Navbar.vue"
import {RouterView} from "vue-router"
</script>

<template>
  <div class="GeneralContainer">
    <Navbar></Navbar>
    <RouterView />
    <footer>fOOTER</footer>
  </div>
</template>


<style scoped>
.GeneralContainer {
  min-height: 100vh;
  width: 100vw;
}
</style>
