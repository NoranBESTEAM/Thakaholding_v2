<template>
    <section id="partner">

        <div id="layer">

            <div class="container">

                <h3 class="text-center wow animate__animated animate__slideInDown animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">الشركات التابعة</h3>

                <p class="text-center wow animate__animated animate__slideInRight animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">تمكنت شركة ذكاء القابضة أن تصبح واحدة من أبرز شركات التقنية والذكاء الاصطناعي
                    والشريك
                    الموثوق لأكبر المستثمرين في المنطقة وقد تمكنا من الوصول لهذة المكانة المرموقة بفضل سعينا لتحقيق النجاح
                    المستدام ليس لأعمالنا فحسب، بل وللمنطقة قاطبة.</p>

                <!-- In Large Screen -->

                <div id="content_wrapper"
                    class="d-none d-md-block mt-4 wow animate__animated animate__slideInUp animate__slower"
                    data-wow-offset="1" data-wow-delay="0.1s">

                    <div class="partner_ele" @mouseover="isDefaultImageOne = false" @mouseleave="isDefaultImageOne = true">
                        <div class="image_wrapper">
                            <img :src="isDefaultImageOne ? defaultImgOne : alternativeImgOne" alt="">
                        </div>
                    </div>

                    <div class="partner_ele" @mouseover="isDefaultImageTwo = false" @mouseleave="isDefaultImageTwo = true">
                        <div class="image_wrapper">
                            <img :src="isDefaultImageTwo ? defaultImgTwo : alternativeImgTwo" alt="">
                        </div>
                    </div>

                    <div class="partner_ele" @mouseover="isDefaultImageThree = false"
                        @mouseleave="isDefaultImageThree = true">
                        <div class="image_wrapper">
                            <img :src="isDefaultImageThree ? defaultImgThree : alternativeImgThree" alt="">
                        </div>
                    </div>

                    <div class="partner_ele" @mouseover="isDefaultImageFour = false"
                        @mouseleave="isDefaultImageFour = true">
                        <div class="image_wrapper">
                            <img :src="isDefaultImageFour ? defaultImgFour : alternativeImgFour" alt="">
                        </div>
                    </div>

                    <div class="partner_ele" @mouseover="isDefaultImageFive = false"
                        @mouseleave="isDefaultImageFive = true">
                        <div class="image_wrapper">
                            <img :src="isDefaultImageFive ? defaultImgFive : alternativeImgFive" alt="">
                        </div>
                    </div>

                </div>

                <!-- In Small Screen -->

                <div id="carouselExampleSlidesOnly"
                    class="carousel slide d-block d-md-none mt-4 wow animate__animated animate__slideInUp animate__slower"
                    data-wow-offset="1" data-wow-delay="0.1s" data-bs-ride="carousel">

                    <div class="carousel-inner">

                        <div class="carousel-item active" data-bs-interval="2000">
                            <div class="partner_ele">
                                <div class="image_wrapper">
                                    <img src="@/assets/images/home/international.webp" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <div class="partner_ele">
                                <div class="image_wrapper">
                                    <img src="@/assets/images/home/Kudratk.webp" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <div class="partner_ele">
                                <div class="image_wrapper">
                                    <img src="@/assets/images/home/robotera.webp" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <div class="partner_ele">
                                <div class="image_wrapper">
                                    <img src="@/assets/images/home/information_technology.webp" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item" data-bs-interval="2000">
                            <div class="partner_ele">
                                <div class="image_wrapper">
                                    <img src="@/assets/images/home/business_incubator.webp" alt="">
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- https://www.youtube.com/watch?v=BrCz-FlPGgk -->

                    <!-- Carousel controls -->


                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly"
                        data-bs-slide="next">
                        <font-awesome-icon :icon="['fas', 'fa-chevron-right']" />
                    </button>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly"
                        data-bs-slide="prev">
                        <font-awesome-icon :icon="['fas', 'fa-chevron-left']" />
                    </button>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'Partner',
    mounted() {
        new WOW().init();
    },
    data() {
        return {
            isDefaultImageOne: true,
            defaultImgOne: require('../../assets/images/home/international.webp'),
            alternativeImgOne: require('../../assets/images/home/international_white.webp'),
            isDefaultImageTwo: true,
            defaultImgTwo: require('../../assets/images/home/Kudratk.webp'),
            alternativeImgTwo: require('../../assets/images/home/kudratk_white.webp'),
            isDefaultImageThree: true,
            defaultImgThree: require('../../assets/images/home/robotera.webp'),
            alternativeImgThree: require('../../assets/images/home/robotera_white.webp'),
            isDefaultImageFour: true,
            defaultImgFour: require('../../assets/images/home/information_technology.webp'),
            alternativeImgFour: require('../../assets/images/home/information_technology_white.webp'),
            isDefaultImageFive: true,
            defaultImgFive: require('../../assets/images/home/business_incubator.webp'),
            alternativeImgFive: require('../../assets/images/home/business_incubator_white.webp'),
        };
    },
}
</script>

<style lang="scss" scoped>
#partner {
    height: 432px;

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

    @include breakpoints(x-small) {
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
    }

    #layer {

        background-image: $Header-BG;
        opacity: 0.8;
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

            // In Large Screen

            #content_wrapper {

                margin-bottom: 80px;

                .partner_ele {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;

                    width: calc(100% / 5 - 16px);
                    margin-left: 8px;
                    margin-right: 8px;

                    padding: 28px 32px;

                    @include breakpoints(medium) {
                        padding: 12px 16px;
                    }

                    @include breakpoints(large) {
                        padding: 12px 16px;
                    }

                    background-color: $Light-Primary;
                    transition: background 0.5s linear;
                    box-shadow: 0px 4px 4px 0px $Box-Shadow;

                    .image_wrapper {

                        height: 88px;

                        @include breakpoints(medium) {
                            height: 80px;
                        }

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }
                    }

                    &:hover {
                        background: $Linear-Blue;
                        filter: drop-shadow(0px 4px 4px $Box-Shadow);
                    }

                }

            }

            // In Small Screen

            #carouselExampleSlidesOnly {

                margin-bottom: 80px;

                .carousel-inner {

                    .carousel-item {

                        .partner_ele {

                            background-color: $Light-Primary;
                            transition: background 0.5s linear;
                            box-shadow: 0px 4px 4px 0px $Box-Shadow;

                            padding: 28px 32px;

                            width: 70%;
                            margin: auto;

                            .image_wrapper {

                                height: 80px;

                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: contain;
                                }

                            }

                        }

                    }

                }

                .carousel-control-next,
                .carousel-control-prev {
                    svg {
                        font-size: 24px;
                        color: $White;
                    }
                }

                .carousel-control-next {
                    svg {
                        margin-right: -50px;
                    }
                }

                .carousel-control-prev {
                    svg {
                        margin-left: -50px;
                    }
                }

            }

        }

    }
}
</style>