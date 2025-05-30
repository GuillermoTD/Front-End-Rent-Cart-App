<script setup>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import { RouterView } from "vue-router"
import 'remixicon/fonts/remixicon.css';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';

import './style.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
</script>

<template>
  <div class="GeneralContainer">
    <Navbar></Navbar>
    <div class="mb-[40rem] min-h-[100vh]">
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.GeneralContainer {
  min-height: 100vh;
  width: 100vw;
}
</style>
