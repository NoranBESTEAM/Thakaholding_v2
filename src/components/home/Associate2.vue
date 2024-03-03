<template>
    <section id="associate">

        <div id="layer">

            <div class="container">

                <h3 class="text-center wow animate__animated animate__slideInDown animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">شركاء النجاح</h3>

                <p class="text-center wow animate__animated animate__slideInRight animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s">ذكاء القابضة شريك موثوق واستراتيجي للمؤسسات الحكومية والخاصة
                    معًا نستطيع أن نكون القوة الدافعة وراء مستقبل التقنية والابتكار في المنطقة </p>

                <!-- https://www.youtube.com/watch?v=3AWNCldVaH0 -->
                <!-- https://picsum.photos/ -->

                <div id="carouselAssociateSlidesOnly" class="carousel slide carousel-fade wow animate__animated animate__slideInUp animate__slower" data-bs-ride="carousel" data-wow-offset="1" data-wow-delay="0.1s">

                    <div class="carousel-inner">

                        <div class="carousel-item associate-item active">
                            <div class="col col-md-4 col-lg-3 col-xxl-2">
                                <div class="card">
                                    <div class="card-body px-0">
                                        <div class="logo_wrapper">
                                            <img src="@/assets/images/home/logo_associate_1.webp" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item associate-item">
                            <div class="col col-md-4 col-lg-3 col-xxl-2">
                                <div class="card">
                                    <div class="card-body px-0">
                                        <div class="logo_wrapper">
                                            <img src="@/assets/images/home/logo_associate_2.webp" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item associate-item">
                            <div class="col col-md-4 col-lg-3 col-xxl-2">
                                <div class="card">
                                    <div class="card-body px-0">
                                        <div class="logo_wrapper">
                                            <img src="@/assets/images/home/logo_associate_3.webp" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item associate-item">
                            <div class="col col-md-4 col-lg-3 col-xxl-2">
                                <div class="card">
                                    <div class="card-body px-0">
                                        <div class="logo_wrapper">
                                            <img src="@/assets/images/home/logo_associate_4.webp" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item associate-item">
                            <div class="col col-md-4 col-lg-3 col-xxl-2">
                                <div class="card">
                                    <div class="card-body px-0">
                                        <div class="logo_wrapper">
                                            <img src="@/assets/images/home/logo_associate_5.webp" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item associate-item">
                            <div class="col col-md-4 col-lg-3 col-xxl-2">
                                <div class="card">
                                    <div class="card-body px-0">
                                        <div class="logo_wrapper">
                                            <img src="@/assets/images/home/logo_associate_6.webp" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item associate-item">
                            <div class="col col-md-4 col-lg-3 col-xxl-2">
                                <div class="card">
                                    <div class="card-body px-0">
                                        <div class="logo_wrapper">
                                            <img src="@/assets/images/home/logo_associate_7.webp" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item associate-item">
                            <div class="col col-md-4 col-lg-3 col-xxl-2">
                                <div class="card">
                                    <div class="card-body px-0">
                                        <div class="logo_wrapper">
                                            <img src="@/assets/images/home/logo_associate_8.webp" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item associate-item">
                            <div class="col col-md-4 col-lg-3 col-xxl-2">
                                <div class="card">
                                    <div class="card-body px-0">
                                        <div class="logo_wrapper">
                                            <img src="@/assets/images/home/logo_associate_9.webp" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <!-- Create next or prev button -->

                    <!-- https://www.youtube.com/watch?v=BrCz-FlPGgk -->

                    <!-- Carousel controls -->
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselAssociateSlidesOnly"
                        data-bs-slide="next">
                        <font-awesome-icon :icon="['fas', 'fa-chevron-right']" />
                    </button>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselAssociateSlidesOnly"
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

    name: 'Associate',

    data() {
        return {
            windowWidth: window.innerWidth,
        }
    },

    mounted() {

        new WOW().init();

        // For Carousel

        

        var items = document.querySelectorAll('.carousel .associate-item');

        // show 6 image at a one time in Extra extra large screen

        if (this.windowWidth >= 1400) {

            const slide = 6;

            items.forEach((e) => {

                let next = e.nextElementSibling;

                for (var i = 0; i < slide; i++) {

                    if (!next) {
                        next = items[0];
                    }

                    let cloneChild = next.cloneNode(true);

                    e.appendChild(cloneChild.children[0]);

                    next = next.nextElementSibling;

                }

            });

        }

        // show 4 image at a one time in Extra large screen and large screen

        if (this.windowWidth >= 992) {

            const slide = 4;

            items.forEach((e) => {

                let next = e.nextElementSibling;

                for (var i = 0; i < slide; i++) {

                    if (!next) {
                        next = items[0];
                    }

                    let cloneChild = next.cloneNode(true);

                    e.appendChild(cloneChild.children[0]);

                    next = next.nextElementSibling;

                }

            });

        }

        // show 3 image at a one time in Medium screen

        if (this.windowWidth >= 768) {

            const slide = 3;

            items.forEach((e) => {

                let next = e.nextElementSibling;

                for (var i = 0; i < slide; i++) {

                    if (!next) {
                        next = items[0];
                    }

                    let cloneChild = next.cloneNode(true);

                    e.appendChild(cloneChild.children[0]);

                    next = next.nextElementSibling;

                }

            });

        }

        // show 1 image at a one time in Small and Extra Small screen

        if (this.windowWidth >= 375) {

            const slide = 1;

            items.forEach((e) => {

                let next = e.nextElementSibling;

                for (var i = 0; i < slide; i++) {

                    if (!next) {
                        next = items[0];
                    }

                    let cloneChild = next.cloneNode(true);

                    e.appendChild(cloneChild.children[0]);

                    next = next.nextElementSibling;

                }

            });

        }

    },

}
</script>

<style lang="scss" scoped>
#associate {

    height: 430px;

    @include breakpoints(x-small) {
        height: 530px;
    }

    @include breakpoints(small) {
        height: 500px;
    }

    @include breakpoints(medium) {
        height: 465px;
    }

    @include breakpoints(large) {
        height: 465px;
    }

    @include breakpoints(x-Large) {
        height: 465px;
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

            #carouselAssociateSlidesOnly {

                .carousel-inner {

                    width: 80%;
                    margin: auto;

                    .carousel-item {

                        .card {

                            background-color: $Black;

                            border: 0;
                            border-radius: 0;

                            .card-body {

                                margin: auto;

                                .logo_wrapper {

                                    // width: 150px;
                                    height: 150px;
                                    text-align: center;

                                    img {
                                        width: 90%;
                                        height: 90%;
                                        object-fit: contain;
                                    }

                                }

                            }

                        }

                    }

                    .carousel-item.active,
                    .carousel-item-next,
                    .carousel-item-prev {
                        display: flex;
                    }

                    .carousel-item-end,
                    .carousel-item-start {
                        transform: translateX(0);
                    }

                }

                // Control Buttons

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

                // In Large Screen

                @media(min-width:768px) {
                    .carousel-inner {

                        .carousel-item-start.active,
                        .carousel-item-prev {
                            transform: translateX(25%);
                        }

                        .carousel-item-end.active,
                        .carousel-item-next {
                            transform: translateX(-25%);
                        }
                    }
                }

                // Mobile Screen

                @media(max-width:768px) {

                    .carousel-inner {

                        .carousel-item>div {
                            display: none;
                        }

                        .carousel-item>div:first-child {
                            display: block;
                        }

                    }

                }

            }

        }

    }

}
</style>