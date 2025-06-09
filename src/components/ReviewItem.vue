<script setup>
import { toRefs } from 'vue';
import Rating from 'primevue/rating';

const { profileImg, data } = defineProps(['profileImg', 'data'])
const num_stars = 4

console.log(data);

</script>

<template>
    <div class="ReviewItem">
        <!-- <slot /> Para mostrar contenido como "Slide 2", "Slide 3" -->
        <div class="ReviewItem_Header">
            <div class="ReviewItem_Header_UserProfile">
                <div class="ReviewItem_Header_UserProfile_Image">
                    <img src="../assets/img/profile.jpg" alt="review-profile-movile">
                </div>
                <span>
                    <strong>Alex Stanton</strong>
                    <p class="text-slate-500">CEO at Bukalapak</p>
                </span>
            </div>
            <div class="ReviewItem_Header_Ratings">
                <p>21 Julio 2022</p>
                <Rating v-model="num_stars" />
            </div>
        </div>
        <div class="ReviewItem_Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, omnis quisquam! Perspiciatis maiores qui
            aspernatur error itaque fugit eveniet quaerat.
        </div>
    </div>
</template>

<style>
@reference "tailwindcss";

.ReviewItem {
    @apply flex flex-col gap-[2.3rem] px-[1.2rem];

    .ReviewItem_Header {
        @apply flex justify-between items-center w-full h-[4rem];

        .ReviewItem_Header_UserProfile {
            @apply flex gap-[0.7rem] items-center;
        }

        .ReviewItem_Header_UserProfile_Image {
            @apply bg-red-500 w-[4rem] h-[4rem] rounded-full flex overflow-hidden;

            img {
                @apply object-cover;
            }
        }
    }
}
</style>