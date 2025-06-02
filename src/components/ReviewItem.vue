<script setup></script>

<template>
    <div class="ReviewItem">
        <!-- <slot /> Para mostrar contenido como "Slide 2", "Slide 3" -->
        <div class="ReviewItem_Header">
            <div class="ReviewItem_Header_UserProfile">
                <img src="" alt="">
                <span>
                    <p>Alex Stanton</p>
                    <p>CEO at Bukalapak</p>
                </span>
            </div>
            <div class="ReviewItem_Header_Ratings">
                <p>21 Julio 2022</p>
                <p>stars</p>
            </div>
        </div>
        <div class="ReviewItem_Description">
            We are very happy with the service from the MORENT App. Morent has a low
            price and also a large variety of cars with good and comfortable facilities. In addition, the service
            provided by the officers is also very friendly and very polite.
        </div>
    </div>
</template>

<style>
@reference "tailwindcss";

.ReviewItem {
    .ReviewItem_Header {
        @apply flex justify-between items-center w-full h-[4rem] px-[1.2rem];

        .ReviewItem_Header_UserProfile {
            @apply flex;
        }
    }
}
</style>