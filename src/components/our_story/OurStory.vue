<template>
    <section id="our-story">

        <div class="container">

            <div class="row">

                <div class="col-12 col-lg-8 my-auto">

                    <div id="content_wrapper" class="wow animate__animated animate__slideInRight animate__slower pt-lg-3 pb-lg-3"
                        data-wow-offset="1" data-wow-delay="0.1s">

                        <h3>قصتنا</h3>

                        <p class="mb-lg-0">تنطلق رحلة ذكاء القابضة من خلال التطوير والاستثمار، مجتمعين في رؤية واحدة، نحو قطاعات المستقبل.
                            نقدم في شركة قدراتك خدمات التعليم والتدريب في مجالات التقنية والابتكار، لإعداد أجيال من المبدعين
                            والمبتكرين. ثم استعنا بخدمات شركة ذكاء لتقنية المعلومات، ومجموعتها الواسعة من الخدمات التقنية
                            وخدمات الذكاء الاصطناعي، لتوفير حلول تقنية مبتكرة تلبي احتياجات عملائنا. واكتملت رحلتنا بشركة
                            روبوتيرا، لنبدأ بها عصر الروبوتات، وتقديم حلول ذكية لمختلف المجالات. وأخيراً، قدمنا خبرات
                            السنوات الطويلة في المشاريع في ذكاء لحاضنات الأعمال، لندعم المشاريع الناشئة في مجال التقنية،
                            وخلق مستقبل أفضل للمملكة العربية السعودية والعالم.</p>

                    </div>

                </div>

                <div id="imgSec" class="col-12 col-lg-4 mt-3 mt-lg-0">

                    <div id="img_wrapper" class="wow animate__animated animate__fadeIn animate__slower" data-wow-offset="1"
                        data-wow-delay="0.3s">

                        <img src="@/assets/images/story/StoryImg.webp" alt="">

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

    name: 'OurStory',

    mounted() {

        new WOW().init();

    },

}
</script>

<style lang="scss" scoped>
#our-story {

    padding-top: 112px;
    padding-bottom: 40px;

    background-color: $Light-Primary;

    .container {

        border: 4px solid $White;

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

        }

        #imgSec {

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
                    left: -4px;
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