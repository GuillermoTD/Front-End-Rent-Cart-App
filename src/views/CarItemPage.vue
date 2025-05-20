<script setup></script>


<template>
    <div class="CarItemPage Page">
        <div class="content">
            <div class="CarItemPage_Hero">
                <div class="CarItemPage_Hero_LeftSide">
                    <img src="../assets/img/Hero2.png" alt="CarItem-Image">
                </div>
                <div class="CarItemPage_Hero_RightSide ">
                    <div class="CarItemPage_Hero_RightSide_Title">
                        <h3>Rolls - Royce</h3>
                        <p>stars 410+Reviews</p>
                    </div>

                    <p class="CarItemPage_Hero_RightSide_Description">Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit.
                        Mollitia velit alias obcaecati?
                    </p>

                    <div class="CarItemPage_Hero_RightSide_Details">
                        <p>
                            <span>Type Car Sedan</span>
                            <span>Steering Manual</span>
                        </p>

                        <p>
                            <span>Capacity 4 People</span>
                            <span>Gasoline 70L</span>
                        </p>
                    </div>

                    <div class="CarItemPage_Hero_RightSide_Price">
                        <p>$96.00/ days</p>
                        <a href="#">Rent Now</a>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>



<style scoped>
@reference "tailwindcss";

.CarItemPage {
    @apply flex flex-col gap-y-[4rem] w-full pb-[3rem] pt-[4rem];
}

.CarItemPage_Hero {
    @apply flex items-center;

    .CarItemPage_Hero_LeftSide {
        @apply w-[50%];

        img {
            @apply w-[25rem] h-[10rem];
        }
    }

    .CarItemPage_Hero_RightSide {
        @apply w-[50%] bg-white p-[2rem];

        .CarItemPage_Hero_RightSide_Title{
            @apply text-[1.2rem] font-bold flex
        }

        .CarItemPage_Hero_RightSide_Description{
            @apply text-left ;
        }
    }
}
</style>