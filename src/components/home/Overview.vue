<template>
    <section id="overview">

        <div id="layer">

            <div class="container">

                <h3 class="text-center wow animate__animated animate__slideInDown animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">لمحة سريعة</h3>

                <!-- In Large Screen -->

                <div id="content_wrapper"
                    class="d-none d-md-block mt-4 wow animate__animated animate__slideInUp animate__slower"
                    data-wow-offset="1" data-wow-delay="0.1s">

                    <div class="element">

                        <!-- https://getbootstrap.com/docs/5.3/components/card/ -->

                        <div class="card bg-transparent border-0">
                            <div class="row">
                                <div class="col-6 p-md-0">
                                    <div class="image_wrapper">
                                        <img src="@/assets/images/home/project.webp" alt="">
                                    </div>
                                </div>
                                <div class="col-6 p-md-0">
                                    <div class="card-body p-0">
                                        <span class="num" data-val="100">00</span>
                                        <h6 class="mb-0">مشروع</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="element">

                        <div class="card bg-transparent border-0">
                            <div class="row">
                                <div class="col-6 p-md-0">
                                    <div class="image_wrapper">
                                        <img src="@/assets/images/home/partners.webp" alt="">
                                    </div>
                                </div>
                                <div class="col-6 p-md-0">
                                    <div class="card-body p-0">
                                        <span class="num" data-val="40">00</span>
                                        <h6 class="mb-0">شريك</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="element">

                        <div class="card bg-transparent border-0">
                            <div class="row">
                                <div class="col-6 p-md-0">
                                    <div class="image_wrapper">
                                        <img src="@/assets/images/home/consultation.webp" alt="">
                                    </div>
                                </div>
                                <div class="col-6 p-md-0">
                                    <div class="card-body p-0">
                                        <span class="num" data-val="100">00</span>
                                        <h6 class="mb-0">إستشارة</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="element">

                        <div class="card bg-transparent border-0">
                            <div class="row">
                                <div class="col-6 p-md-0">
                                    <div class="image_wrapper">
                                        <img src="@/assets/images/home/investment.webp" alt="">
                                    </div>
                                </div>
                                <div class="col-6 p-md-0">
                                    <div class="card-body p-0">
                                        <span class="num" data-val="25">00</span>
                                        <h6 class="mb-0">استثمار</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="element">

                        <div class="card bg-transparent border-0">
                            <div class="row">
                                <div class="col-6 p-md-0">
                                    <div class="image_wrapper">
                                        <img src="@/assets/images/home/users.webp" alt="">
                                    </div>
                                </div>
                                <div class="col-6 p-md-0">
                                    <div class="card-body p-0">
                                        <span class="num" data-val="200">00</span>
                                        <h6 class="mb-0">مستفيد</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <!-- In Small Screen -->

                <div id="carouselOverviewSlidesOnly"
                    class="carousel slide d-block d-md-none mt-4 wow animate__animated animate__slideInUp animate__slower"
                    data-wow-offset="1" data-wow-delay="0.1s" data-bs-ride="carousel">

                    <div class="carousel-inner">

                        <div class="carousel-item active" data-bs-interval="10000">

                            <div class="element">

                                <!-- https://getbootstrap.com/docs/5.3/components/card/ -->

                                <div class="card bg-transparent border-0">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="image_wrapper">
                                                <img src="@/assets/images/home/project.webp" alt="">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="card-body p-0">
                                                <span class="num" data-val="100">00</span>
                                                <h6 class="mb-0">مشروع</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="element">

                                <div class="card bg-transparent border-0">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="image_wrapper">
                                                <img src="@/assets/images/home/partners.webp" alt="">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="card-body p-0">
                                                <span class="num" data-val="40">00</span>
                                                <h6 class="mb-0">شريك</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="element">

                                <div class="card bg-transparent border-0">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="image_wrapper">
                                                <img src="@/assets/images/home/consultation.webp" alt="">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="card-body p-0">
                                                <span class="num" data-val="100">00</span>
                                                <h6 class="mb-0">إستشارة</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="element">

                                <div class="card bg-transparent border-0">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="image_wrapper">
                                                <img src="@/assets/images/home/investment.webp" alt="">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="card-body p-0">
                                                <span class="num" data-val="25">00</span>
                                                <h6 class="mb-0">استثمار</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="element">

                                <div class="card bg-transparent border-0">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="image_wrapper">
                                                <img src="@/assets/images/home/users.webp" alt="">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="card-body p-0">
                                                <span class="num" data-val="200">00</span>
                                                <h6 class="mb-0">مستفيد</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <!-- https://www.youtube.com/watch?v=BrCz-FlPGgk -->

                    <!-- Carousel controls -->
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselOverviewSlidesOnly"
                        data-bs-slide="next">
                        <font-awesome-icon :icon="['fas', 'fa-chevron-right']" />
                    </button>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselOverviewSlidesOnly"
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

    name: 'Overview',

    mounted() {

        new WOW().init();

        // https://www.youtube.com/watch?v=eMtebHRQaM4

        var mainDiv = document.getElementById("overview");

        var count = document.getElementsByClassName("num");

        var inc = [];

        window.onscroll = function () {

            var counter = setInterval(() => {

                var topElem = mainDiv.offsetTop;

                var btmElem = mainDiv.offsetTop + mainDiv.clientHeight;

                var topScreen = window.scrollY;

                var btmScreen = window.scrollY + window.innerHeight;

                if (btmScreen > topElem || topScreen < btmElem) {

                    for (let i = 0; i < count.length; i++) {
                        inc.push(1);
                        if (inc[i] != count[i].getAttribute("data-val")) {
                            inc[i]++;
                        }
                        count[i].innerHTML = inc[i];
                    }

                } else {

                    clearInterval(counter);

                    for (let i = 0; i < count.length; i++) {

                        count[i].innerHTML = '00';

                        inc = [];

                    }

                }

            }, 3000);

        }


        // https://www.youtube.com/watch?v=FaMW-CtExrs 

        /* 

            let valueDisplays = document.querySelectorAll(".num");

            let interval = 5000;

            // console.log(valueDisplays);

            valueDisplays.forEach(valueDisplay => {

                let startValue = 0;

                let endValue = parseInt(valueDisplay.getAttribute("data-val"));

                // console.log(endValue);

                let duration = Math.floor(interval / endValue);

                let counter = setInterval(function () {

                    startValue += 1;

                    valueDisplay.textContent = startValue;

                    if (startValue == endValue) {
                        clearInterval(counter);
                    }

                }, duration);

            });

        */

    }

}

</script>

<style lang="scss" scoped>
#overview {

    height: 300px;

    // https://www.w3schools.com/cssref/pr_background-image.php

    /* The image used */

    background-image: url("@/assets/images/home/overview_bg.webp");

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
        background-image: url("@/assets/images/home/overview_bg_mobile.webp");
    }

    @include breakpoints(small) {
        background-image: url("@/assets/images/home/overview_bg_mobile.webp");

    }

    #layer {

        background-color: $Light-Primary;
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
                color: $Dark-Primary;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;
            }

            // In Large Screen

            #content_wrapper {

                margin-bottom: 80px;

                .element {

                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;

                    width: calc(100% / 5 - 16px);
                    margin-left: 8px;
                    margin-right: 8px;

                    .card {

                        .image_wrapper {

                            height: 80px;

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: contain;
                            }

                        }

                        .card-body {

                            text-align: center;

                            height: 80px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;

                            .num {
                                font-family: 'FFShamelFamily-Bold';
                                color: $Dark-Primary;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 156%;
                            }

                            h6 {
                                color: $Black;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 180%;
                            }

                        }

                    }

                }

            }

            // In Small Screen

            #carouselOverviewSlidesOnly {

                margin-bottom: 80px;

                .carousel-inner {

                    .carousel-item {

                        .element {

                            width: 50%;
                            margin: auto;

                            .card {

                                .image_wrapper {

                                    height: 80px;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                        object-fit: contain;
                                    }

                                }

                                .card-body {

                                    text-align: center;

                                    height: 80px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;

                                    .num {
                                        font-family: 'FFShamelFamily-Bold';
                                        color: $Dark-Primary;
                                        font-size: 16px;
                                        font-style: normal;
                                        font-weight: 400;
                                        line-height: 156%;
                                    }

                                    h6 {
                                        color: $Black;
                                        font-size: 16px;
                                        font-style: normal;
                                        font-weight: 400;
                                        line-height: 180%;
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
                        color: $Dark-Primary;
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