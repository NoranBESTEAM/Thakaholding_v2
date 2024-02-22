<template>
    <section id="our-partner">

        <div class="container">

            <div class="row">

                <div class="col-12 col-lg-8 my-auto">

                    <div id="content_wrapper"
                        class="wow animate__animated animate__slideInRight animate__slower pt-lg-3 pb-lg-3"
                        data-wow-offset="1" data-wow-delay="0.1s">

                        <h3>الشركات التابعة</h3>

                        <p>تمكنت شركة ذكاء القابضة أن تصبح واحدة من أبرز شركات التقنية والذكاء الاصطناعي والشريك الموثوق
                            لأكبر المستثمرين في المنطقة وقد تمكنا من الوصول لهذة المكانة المرموقة بفضل سعينا لتحقيق النجاح
                            المستدام ليس لأعمالنا فحسب، بل وللمنطقة قاطبة.</p>

                        <div id="partner_wrapper">

                            <div class="element">
                                <div class="img_wrapper">
                                    <img src="@/assets/images/partner/kudratekImg.webp" alt="">
                                </div>
                            </div>

                            <div class="element">
                                <div class="img_wrapper">
                                    <img src="@/assets/images/partner/roboteraImg.webp" alt="">
                                </div>
                            </div>

                            <div class="element">
                                <div class="img_wrapper">
                                    <img src="@/assets/images/partner/thakaImg_1.webp" alt="">
                                </div>
                            </div>

                            <div class="element">
                                <div class="img_wrapper">
                                    <img src="@/assets/images/partner/thakaImg_2.webp" alt="">
                                </div>
                            </div>

                            <div class="element">
                                <div class="img_wrapper">
                                    <img src="@/assets/images/partner/thakaImg_3.webp" alt="">
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div id="imgSec" class="col-12 col-lg-4 mt-5 mt-lg-0">

                    <div id="img_wrapper" class="wow animate__animated animate__fadeIn animate__slower" data-wow-offset="1"
                        data-wow-delay="0.3s">

                        <img src="@/assets/images/partner/ourPartnerImg.webp" alt="">

                        <div id="img_layer"></div>

                    </div>

                </div>

            </div>

        </div>

    </section>
</template>

<script>

import WOW from "wow.js";

export default {

    name: 'OurPartner',

    mounted() {
        new WOW().init();
    },

}

</script>

<style lang="scss" scoped>
#our-partner {

    padding-top: 112px;
    padding-bottom: 40px;

    background-color: $Light-Primary;

    .container {

        border-top: 4px solid $White;
        border-bottom: 4px solid $White;
        border-right: 4px solid $White;

        @include breakpoints(x-small) {
            border: none;
        }

        @include breakpoints(small) {
            border: none;
        }

        @include breakpoints(medium) {
            border: none;
        }

        #content_wrapper {

            padding-right: 40px;

            @include breakpoints(x-small) {
                padding-right: 0;
            }

            @include breakpoints(small) {
                padding-right: 0;
            }

            @include breakpoints(medium) {
                padding-right: 0;
            }

            h3 {
                font-family: 'FFShamelFamily-Bold';
                color: $Dark-Primary;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;

                @include breakpoints(x-small) {
                    text-align: center;
                }

                @include breakpoints(small) {
                    text-align: center;
                }

                @include breakpoints(medium) {
                    text-align: center;
                }
            }

            p {
                color: $Black;
                text-align: justify;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;
            }

            #partner_wrapper {

                display: flex;
                justify-content: center;
                align-items: center;

                .element {

                    text-align: center;

                    flex: 1;

                    @include breakpoints(x-small) {
                        margin-left: 2px;
                        margin-right: 2px;
                    }

                    @include breakpoints(small) {
                        margin-left: 4px;
                        margin-right: 4px;
                    }

                    @include breakpoints(medium) {
                        margin-left: 8px;
                        margin-right: 8px;
                    }

                    @include breakpoints(large) {
                        margin-left: 4px;
                        margin-right: 4px;
                    }

                    .img_wrapper {

                        height: 50px;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }

                    }

                }

            }

        }

        #imgSec {

            padding-left: 0;

            @include breakpoints(x-small) {
                padding: 0;
            }

            @include breakpoints(small) {
                padding: 0;
            }

            @include breakpoints(medium) {
                padding: 0;
            }

            #img_wrapper {

                width: 426px;
                height: 409px;

                position: relative;

                @include breakpoints(x-small) {
                    width: 350px;
                    height: 336px;
                    margin: auto;
                }

                @include breakpoints(small) {
                    margin: auto;
                }

                @include breakpoints(medium) {
                    width: 462px;
                    height: 444px;
                    margin: auto;
                }

                @include breakpoints(large) {
                    width: 307px;
                    height: 295px;
                }

                @include breakpoints(x-Large) {
                    width: 366px;
                    height: 352px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                #img_layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 40%;
                    height: 40%;
                    // https://stackoverflow.com/questions/12671898/outline-on-only-one-border
                    // box-shadow: 0 -16px 0 $Dark-Primary, -16px 0 0 $Dark-Primary;
                    box-shadow: 0 -16px 0 $Dark-Primary;
                    border-left: 16px solid $Dark-Primary;
                }

            }


        }

    }

}
</style>