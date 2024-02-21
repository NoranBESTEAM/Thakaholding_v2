<template>
    <section id="associate">

        <div id="layer">

            <div class="container">

                <h3 class="text-center wow animate__animated animate__slideInDown animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">شركاء النجاح</h3>

                <p class="text-center wow animate__animated animate__slideInRight animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">ذكاء القابضة شريك موثوق واستراتيجي للمؤسسات الحكومية والخاصة
                    معًا نستطيع أن نكون القوة الدافعة وراء مستقبل التقنية والابتكار في المنطقة </p>

                <div id="content_wrapper" class="mt-4 p-3 wow animate__animated animate__slideInUp animate__slower"
                    data-wow-offset="1" data-wow-delay="0.1s">

                    <div class="row row-cols-3 row-cols-lg-5 g-3 d-flex justify-content-center">

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_1.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_2.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_3.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_4.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_5.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_6.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_7.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_8.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_9.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_10.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_11.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_12.webp" alt="">
                            </div>
                        </div>

                        <div class="col">
                            <div class="logo_wrapper">
                                <img src="@/assets/images/home/logo_associate_13.webp" alt="">
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'Associate',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#associate {

    height: 490px;

    @include breakpoints(x-small) {
        height: 700px;
    }

    @include breakpoints(small) {
        height: 675px;
    }

    @include breakpoints(medium) {
        height: 675px;
    }

    @include breakpoints(large) {
        height: 530px;
    }

    @include breakpoints(x-Large) {
        height: 530px;
    }

    // https://www.w3schools.com/cssref/pr_background-image.php

    /* The image used */

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

        .container {

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

            #content_wrapper {

                height: 234px;

                @include breakpoints(x-small) {
                    height: 380px;
                }

                @include breakpoints(small) {
                    height: 380px;
                }

                @include breakpoints(medium) {
                    height: 380px;
                }

                border-radius: 8px;
                border: 1px solid $White;

                // margin-bottom: 80px;

                .row {

                    .col {

                        .logo_wrapper {

                            height: 56px;

                            img {

                                width: 100%;
                                height: 100%;
                                object-fit: contain;

                            }

                        }

                    }

                }

            }

        }

    }

}
</style>