<template>
    <section id="kudratek">

        <div id="layer">

            <div class="container">

                <div id="partner_img_wrapper">
                    <img src="@/assets/images/partner/kudratekWhiteImg.webp" alt="">
                </div>

                <p class="mt-4">قدراتك هي شركة تعليمية تقنية تهدف إلى تنمية القدرات البشرية وتطوير المهارات بأساليب تعليمية
                    حديثة، نقدم
                    خدمات الإستشارات والتدريب كما نعمل على زيادة كفاءة مخرجات التعليم وتوفير الأدوات الفنية والعلمية
                    والتشغيل بناء على سياسات وأدلة تشغيلية واضحة.</p>

                <h3 class="mt-5">خدمات قدراتك</h3>

                <a href="https://quduratech.com/#/" class="btn rounded border-0">الذهاب إلى الموقع</a>

                <!-- <div class="clear"></div> -->

                <div id="content_wrapper" class="mt-4">

                    <div class="service_ele">
                        <div class="image_wrapper">
                            <img src="@/assets/images/partner/kudratekTraining.webp" alt="">
                        </div>
                    </div>

                    <div class="service_ele">
                        <div class="image_wrapper">
                            <img src="@/assets/images/partner/kudratekConsult.webp" alt="">
                        </div>
                    </div>

                    <div class="service_ele">
                        <div class="image_wrapper">
                            <img src="@/assets/images/partner/kudratekCredits.webp" alt="">
                        </div>
                    </div>

                    <div class="service_ele">
                        <div class="image_wrapper">
                            <img src="@/assets/images/partner/kudratekEquipment.webp" alt="">
                        </div>
                    </div>

                    <div class="service_ele">
                        <div class="image_wrapper">
                            <img src="@/assets/images/partner/kudratekEmployment.webp" alt="">
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
    name: 'Kudratek',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#kudratek {

    height: 520px;

    // https://www.w3schools.com/cssref/pr_background-image.php

    /* The image used */

    background-image: url("@/assets/images/home/partner_bg.webp");

    /* Used if the image is unavailable */
    // background-color: $Header-BG;

    /* Center the image */
    background-position: center;

    /* Do not repeat the image */
    background-repeat: no-repeat;

    /* Resize the background image to cover the entire container */
    background-size: cover;

    position: relative;

    /* @include breakpoints(x-small) {
        height: 550px;
        background-image: url("@/assets/images/home/partner_bg_mobile.webp");
        background-position: left top;
    }

    @include breakpoints(small) {
        height: 525px;
        background-image: url("@/assets/images/home/partner_bg_mobile.webp");
        background-position: left top;
    }

    @include breakpoints(medium) {
        height: 460px;
    } */

    #layer {

        background-color: $Black;
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .container {

            margin-top: 40px;

            #partner_img_wrapper {

                width: 108px;
                height: 56px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

            }

            p {
                color: $Light-Primary;
                text-align: justify;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;
            }

            h3 {
                font-family: 'FFShamelFamily-Bold';
                color: $White;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;
            }

            a {
                background-color: $White;
                padding: 3px 16px;
                color: $Primary;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;

                // float: left;

                &:hover {
                    background: $Linear-Blue;
                    background-clip: padding-box;
                    -webkit-background-clip: padding-box;
                    -webkit-text-fill-color: $White;
                    transition: background 1s ease-in;
                }
            }

            #content_wrapper {

                margin-bottom: 40px;

                .service_ele {

                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;

                    width: calc(100% / 5 - 16px);
                    margin-left: 8px;
                    margin-right: 8px;

                    padding: 24px 32px;

                    /* @include breakpoints(medium) {
                        padding: 12px 16px;
                    }

                    @include breakpoints(large) {
                        padding: 12px 16px;
                    } */

                    background-color: $Light-Primary;
                    box-shadow: 0px 4px 4px 0px $Box-Shadow;

                    .image_wrapper {

                        height: 80px;

                        /* @include breakpoints(medium) {
                            height: 80px;
                        } */

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
</style>