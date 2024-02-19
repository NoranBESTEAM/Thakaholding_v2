<template>
    <section id="vision">

        <div id="layer">

            <!-- In Large Screen -->

            <div class="container d-none d-md-block">

                <!-- https://getbootstrap.com/docs/5.3/components/scrollspy/ -->

                <nav class="navbar px-3 mb-3 wow animate__animated animate__backInDown animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">

                    <ul class="nav nav-pills p-0">

                        <li class="nav-item">
                            <!-- class="nav-link"  -->
                            <a id="first_link" @click="showFirstDesc">رؤيتنا</a>
                        </li>

                        <li class="nav-item">
                            <!-- class="nav-link"  -->
                            <a id="second_link" class="disappearBorder" @click="showSecondDesc">رسالتنا</a>
                        </li>

                    </ul>

                </nav>

                <div id="nav-desc" class="p-3 wow animate__animated animate__backInUp animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">

                    <p id="firstDesc" class="visible">أن نكون الخيار والشريك الأول في مجال الخدمات التقنية والذكاء الاصطناعي
                        والاستشارات والتعليم والتطوير والتصنيع في المملكة العربية السعودية والعالم.</p>

                    <p id="secondDesc" class="invisible">الاستثمار في فرص المستقبل وبناء علاقات طويلة الأمد مع الجهات القوية
                        والمؤثرة
                        داخل وخارج المملكة العربية السعودية.</p>

                </div>

            </div>

            <!-- In Small Screen -->

            <div class="container d-block d-md-none">

                <!-- wow animate__animated animate__backInUp animate__slower  data-wow-offset="100" data-wow-delay="0.1s" -->
                <div id="carouselVisionSlidesOnly" class="carousel slide" data-bs-ride="carousel">

                    <div class="carousel-inner">

                        <div class="carousel-item active" data-bs-interval="10000">

                            <div class="card">

                                <div class="card-body">

                                    <h5 class="card-title wow animate__animated animate__backInDown animate__slow"
                                        data-wow-offset="1" data-wow-delay="0.1s">رؤيتنا</h5>

                                    <p class="card-text mt-3 wow animate__animated animate__backInUp animate__slow"
                                        data-wow-offset="1" data-wow-delay="0.1s">أن نكون الخيار والشريك الأول في مجال
                                        الخدمات التقنية والذكاء
                                        الاصطناعي والاستشارات والتعليم والتطوير والتصنيع في المملكة العربية السعودية
                                        والعالم.</p>

                                </div>

                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="card">

                                <div class="card-body">

                                    <h5 class="card-title">رسالتنا</h5>

                                    <p class="card-text mt-3">الاستثمار في فرص المستقبل وبناء علاقات طويلة الأمد مع الجهات
                                        القوية
                                        والمؤثرة داخل وخارج المملكة العربية السعودية.</p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <!-- https://www.youtube.com/watch?v=BrCz-FlPGgk -->

                    <!-- Carousel controls -->
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselVisionSlidesOnly"
                        data-bs-slide="next">
                        <font-awesome-icon :icon="['fas', 'fa-chevron-right']" />
                    </button>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselVisionSlidesOnly"
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

    name: 'Vision',

    mounted() {
        new WOW().init();
    },

    methods: {

        showFirstDesc: function () {

            var firstDescSec = document.getElementById("firstDesc");
            var secondDescSec = document.getElementById("secondDesc");

            firstDescSec.className = "";
            secondDescSec.className = "";

            firstDescSec.classList.add("visible");
            secondDescSec.classList.add("invisible");

            var firstLink = document.getElementById("first_link");
            var secondLink = document.getElementById("second_link");

            firstLink.className = "";
            secondLink.className = "";

            secondLink.classList.add("disappearBorder");

        },

        showSecondDesc: function () {

            var firstDescSec = document.getElementById("firstDesc");
            var secondDescSec = document.getElementById("secondDesc");

            firstDescSec.className = "";
            secondDescSec.className = "";

            firstDescSec.classList.add("invisible");
            secondDescSec.classList.add("visible");

            var firstLink = document.getElementById("first_link");
            var secondLink = document.getElementById("second_link");

            firstLink.className = "";
            secondLink.className = "";

            firstLink.classList.add("disappearBorder");

        },

    },

}

</script>

<style lang="scss" scoped>
#vision {

    height: 296px;

    // https://www.w3schools.com/cssref/pr_background-image.php

    /* The image used */

    background-image: url("@/assets/images/home/partner_bg.webp");

    /* Used if the image is unavailable */
    // background-color: $Header-BG;

    /* Center the image */
    // background-position: center;
    background-position: top;

    /* Do not repeat the image */
    background-repeat: no-repeat;

    /* Resize the background image to cover the entire container */
    background-size: cover;

    position: relative;

    @include breakpoints(x-small) {
        background-image: url("@/assets/images/home/partner_bg_mobile.webp");
        background-position: left top;
        // height: 275px;
        height: 350px;
    }

    @include breakpoints(small) {
        height: 290px;
    }

    @include breakpoints(medium) {
        height: 340px;
    }

    #layer {

        background-image: $Header-BG;
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // filter: brightness(0.9);

        .container {

            nav {

                margin-top: 40px;

                display: flex;

                border-bottom: 16px solid $Light-Primary;

                ul {

                    width: 100%;

                    li {

                        width: 50%;

                        text-align: center;

                        a {

                            font-family: 'FFShamelFamily-Bold';
                            color: $White;
                            font-size: 18px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 180%;

                            cursor: pointer;

                        }

                        #first_link::after {
                            content: '';
                            position: absolute;
                            width: 25%;
                            right: 12.5%;
                            bottom: -16px;
                            border-bottom: 16px solid $Primary;
                        }

                        #second_link::after {
                            content: '';
                            position: absolute;
                            width: 25%;
                            left: 12.5%;
                            bottom: -16px;
                            border-bottom: 16px solid $Primary;
                        }

                        // https://teamtreehouse.com/community/hide-after-element-of-anchorlink-if-next-element-is-an-ulelement

                        #first_link.disappearBorder::after {
                            display: none;
                        }

                        #second_link.disappearBorder::after {
                            display: none;
                        }

                    }

                }

            }

            #nav-desc {

                display: flex;

                p {

                    color: $White;
                    text-align: center;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 180%;

                    width: 50%;
                    padding-left: 16px;
                    padding-right: 16px;

                }

            }

        }

        // In Small Screen

        #carouselVisionSlidesOnly {

            .carousel-inner {

                .carousel-item {

                    .card {

                        background-color: transparent;
                        border: none;
                        border-radius: 0;

                        padding-top: 40px;

                        width: 80%;
                        margin: auto;

                        .card-body {

                            h5 {
                                font-family: 'FFShamelFamily-Bold';
                                color: $White;
                                text-align: center;
                                font-size: 18px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 180%;
                            }

                            h5::after {
                                content: '';
                                display: block;
                                width: 50%;
                                border-bottom: 16px solid $Primary;
                                margin: auto;
                            }

                            p {
                                color: $White;
                                text-align: center;
                                font-size: 18px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: 180%;

                                @include breakpoints(x-small) {
                                    height: 226.8px;
                                }

                                @include breakpoints(small) {
                                    height: 130px;
                                }
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
}</style>