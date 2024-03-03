<template>

    <section id="associate">

        <div id="layer">

            <div class="container">

                <h3 class="text-center wow animate__animated animate__slideInDown animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">شركاء النجاح</h3>

                <p class="text-center wow animate__animated animate__slideInRight animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">ذكاء القابضة شريك موثوق واستراتيجي للمؤسسات الحكومية والخاصة
                    معًا نستطيع أن نكون القوة الدافعة وراء مستقبل التقنية والابتكار في المنطقة </p>

                <!-- https://www.youtube.com/watch?v=EcVDSExAnHM -->
                <!-- https://github.com/surmon-china/vue-awesome-swiper -->
                <!-- https://github.surmon.me/vue-awesome-swiper -->

                <swiper dir="rtl" class="swiper mt-4" :modules="modules" :slides-per-view="5" :space-between="16"
                    :loop="true" :pagination="{ clickable: true, dynamicBullets: true }" :grab-cursor="true"
                    :keyboard="{ enabled: true }" :mousewheel="true"
                    :autoplay="{ delay: 2500, disableOnInteraction: false }" :breakpoints="{
                    '375': {
                        slidesPerView: 1,
                        spaceBetween: 8
                    },
                    '576': {
                        slidesPerView: 2,
                        spaceBetween: 8
                    },
                    '768': {
                        slidesPerView: 3,
                        spaceBetween: 8
                    },
                    '992': {
                        slidesPerView: 4,
                        spaceBetween: 8
                    },
                    '1200': {
                        slidesPerView: 4,
                        spaceBetween: 16
                    },
                    '1400': {
                        slidesPerView: 5,
                        spaceBetween: 16
                    }
                }">

                    <swiper-slide class="slide">
                        <div class="image_wrapper mb-5">
                            <img src="@/assets/images/home/logo_associate_1.webp" alt="">
                        </div>
                    </swiper-slide>

                    <swiper-slide class="slide">
                        <div class="image_wrapper mb-5">
                            <img src="@/assets/images/home/logo_associate_2.webp" alt="">
                        </div>
                    </swiper-slide>

                    <swiper-slide class="slide">
                        <div class="image_wrapper mb-5">
                            <img src="@/assets/images/home/logo_associate_3.webp" alt="">
                        </div>
                    </swiper-slide>

                    <swiper-slide class="slide">
                        <div class="image_wrapper mb-5">
                            <img src="@/assets/images/home/logo_associate_4.webp" alt="">
                        </div>
                    </swiper-slide>

                    <swiper-slide class="slide">
                        <div class="image_wrapper mb-5">
                            <img src="@/assets/images/home/logo_associate_5.webp" alt="">
                        </div>
                    </swiper-slide>

                    <swiper-slide class="slide">
                        <div class="image_wrapper mb-5">
                            <img src="@/assets/images/home/logo_associate_6.webp" alt="">
                        </div>
                    </swiper-slide>

                    <swiper-slide class="slide">
                        <div class="image_wrapper mb-5">
                            <img src="@/assets/images/home/logo_associate_7.webp" alt="">
                        </div>
                    </swiper-slide>

                    <swiper-slide class="slide">
                        <div class="image_wrapper mb-5">
                            <img src="@/assets/images/home/logo_associate_8.webp" alt="">
                        </div>
                    </swiper-slide>

                    <swiper-slide class="slide">
                        <div class="image_wrapper mb-5">
                            <img src="@/assets/images/home/logo_associate_9.webp" alt="">
                        </div>
                    </swiper-slide>

                </swiper>

            </div>

        </div>

    </section>
</template>

<script>

import WOW from "wow.js";

import { Pagination, Keyboard, Mousewheel, Autoplay } from 'swiper'

export default {

    name: 'Associate',

    mounted() {
        new WOW().init();
    },

    setup() {
        return {
            modules: [Pagination, Keyboard, Mousewheel, Autoplay],
        }
    },

};
</script>

<style lang="scss" scoped>
#associate {

    height: 360px;

    @include breakpoints(x-small) {
        height: 450px;
    }

    @include breakpoints(small) {
        height: 420px;
    }

    @include breakpoints(medium) {
        height: 395px;
    }

    @include breakpoints(large) {
        height: 395px;
    }

    @include breakpoints(x-Large) {
        height: 395px;
    }

    background-image: url("@/assets/images/home/associate_bg.webp");

    /* Used if the image is unavailable */
    // background-color: $Header-BG;

    /* Center the image */
    background-position: center;

    /* Do not repeat the image */
    background-repeat: no-repeat;

    /* Resize the background image to cover the entire container */
    background-size: cover;

    position: relative;

    #layer {

        background: $Black;
        opacity: 0.75;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        h3 {
            margin-top: 80px;
            font-family: 'FFShamelFamily-Bold';
            color: $Light-Primary;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 180%;
        }

        p {
            color: $White;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 180%;
        }

        .swiper {

            .slide {

                .image_wrapper {

                    height: 56px;
                    text-align: center;

                    img {

                        width: auto;
                        height: 100%;

                    }

                }

            }

        }

        .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color: #fff;
            opacity: 1;
        }

        .swiper-pagination-bullet-active {
            background-color: aqua !important;
        }

    }

}
</style>