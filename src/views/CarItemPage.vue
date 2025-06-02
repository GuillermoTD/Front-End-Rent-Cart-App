<script setup>
import { Bookmark } from 'lucide-vue-next';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import ReviewItem from '../components/ReviewItem.vue';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation'; // si usas navegación
import 'swiper/css/pagination'; // si usas paginación


const onSwiper = (swiper) => {
    console.log(swiper);
};

const onSlideChange = () => {
    console.log('slide change');
};
</script>


<template>
    <div class="CarItemPage Page">
        <div class="content flex flex-col gap-[5rem]">
            <div class="CarItemPage_Hero">
                <div class="CarItemPage_Hero_LeftSide">
                    <img src="../assets/img/Hero2.png" alt="CarItem-Image">
                </div>
                <div class="CarItemPage_Hero_RightSide ">
                    <div class="CarItemPage_Hero_RightSide_Title">
                        <span>
                            <h3>Rolls - Royce</h3>
                            <p>stars 410+Reviews</p>
                        </span>

                        <div class="CarItemPage_Hero_RightSide_Title_Save">
                            <Bookmark color="" />
                        </div>

                    </div>

                    <p class="CarItemPage_Hero_RightSide_Description">Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit.
                        Mollitia velit alias obcaecati?
                    </p>

                    <div class="CarItemPage_Hero_RightSide_Details">
                        <p>
                            <span>Type Car <strong>Sedan</strong></span>
                            <span>Steering <strong>Manual</strong></span>
                        </p>

                        <p>
                            <span>Capacity <strong>4 People</strong></span>
                            <span>Gasoline <strong>70L</strong></span>
                        </p>
                    </div>

                    <div class="CarItemPage_Hero_RightSide_Price">
                        <p>$96.00/ days</p>
                        <a href="#">Rent Now</a>
                    </div>

                </div>
            </div>

            <div class="CarItemPage_CarDetailImages">
                <div class="CarItemPage_CarImages_Items">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>

            <div class="CarItemPage_Reviews">
                <Swiper :modules="[EffectCards]" effect="cards" grab-cursor="true" :slides-per-view="1"
                    class="mySwiper w-[80%] h-[20rem] sm:w-[80%] sm:h-[20rem] md:w-[40%] md:h-[20rem]">
                    <SwiperSlide class="bg-slate-50">
                        <ReviewItem/>
                    </SwiperSlide>
                    <SwiperSlide class="bg-white">
                        <ReviewItem>Slide 2</ReviewItem>
                    </SwiperSlide>
                    <SwiperSlide class="bg-white">
                        <ReviewItem>Slide 3</ReviewItem>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>

    </div>
</template>

<style>
@reference "tailwindcss";

.CarItemPage {
    @apply flex flex-col gap-y-[4rem] w-full pb-[3rem] pt-[4rem];
}

.CarItemPage_Hero {
    @apply flex gap-[1.5rem] items-center min-h-[25rem] gap-[4rem];
    @apply md:flex-row flex-col;

    .CarItemPage_Hero_LeftSide {
        @apply w-[50%] h-full flex items-center justify-center;

        img {
            @apply lg:w-[35rem] lg:h-[15rem];
        }
    }

    .CarItemPage_Hero_RightSide {
        @apply lg:w-[60%] p-[2rem] flex flex-col items-center bg-white gap-[1.6rem];

        .CarItemPage_Hero_RightSide_Title {
            @apply text-[1.2rem] font-bold flex w-[90%] justify-between;

            span {
                @apply flex flex-col items-start;

                h3 {
                    @apply text-[1.5rem];
                }
            }



            .CarItemPage_Hero_RightSide_Title_Save {
                @apply cursor-pointer;
            }
        }

        .CarItemPage_Hero_RightSide_Description {
            @apply text-left w-[90%];

        }

        .CarItemPage_Hero_RightSide_Details {
            @apply flex flex-col items-start w-[90%] gap-[.4rem] text-[1.08rem];

            p {
                @apply flex gap-[1.2rem];
            }
        }

        .CarItemPage_Hero_RightSide_Price {
            @apply font-bold text-[1.24rem] flex justify-between w-[90%];

            a {
                @apply text-white bg-[var(--color1)] w-[8rem] h-[2.2rem] text-center rounded-[.2rem];
            }
        }
    }
}

.CarItemPage_CarDetailImages {
    @apply border border-slate-200 w-full h-[6rem];
}
</style>