<template>
    <section id="story">

        <div class="container">

            <div class="row">

                <div class="col-12 col-lg-8 my-auto">

                    <div id="content_wrapper" class="wow animate__animated animate__slideInRight animate__slower" data-wow-offset="1" data-wow-delay="0.1s">

                        <h3>قصتنا</h3>

                        <p>بدأت رحلة ذكاء القابضة منذ عشرة أعوام في بناء منظومة متكاملة قائمة على التعليم والتصنيع
                            والاستثمار في
                            قطاعات متعددة منطلقين من أهداف الثورة الصناعة الرابعة لنكون دائمًا الشريك الأول في خدمات التقنية
                            والذكاء الاصطناعي والتعليم والاستثمار في المملكة العربية السعودية ثم ننطلق من المملكة نحو
                            العالم
                        </p>

                        <router-link :to="{ name: 'our-story' }" class="btn rounded border-0 mb-3 mb-lg-0">
                            قصة ذكاء
                        </router-link>

                    </div>

                </div>

                <div class="col-12 col-lg-4 mt-3 mt-lg-0">

                    <div id="img_wrapper" class="wow animate__animated animate__fadeIn animate__slower" data-wow-offset="1" data-wow-delay="0.3s">

                        <img src="@/assets/images/home/storyImg.webp" alt="">

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
    name: 'Story',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
#story {

    padding-top: 40px;
    padding-bottom: 40px;

    background-image: linear-gradient(to right, $White 20%, $Light-Primary 20%);

    @include breakpoints(x-small) {
        background: $Light-Primary;
    }

    @include breakpoints(small) {
        background: $Light-Primary;
    }

    @include breakpoints(medium) {
        background: $Light-Primary;
    }

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

            a {
                background-color: $Primary;
                padding: 3px 16px;
                color: $White;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;

                &:hover {
                    background: $Linear-Blue;
                    background-clip: padding-box;
                    -webkit-background-clip: padding-box;
                    -webkit-text-fill-color: $White;
                    transition: background 1s ease-in;
                }
            }

        }

        #img_wrapper {
            width: 414px;
            height: 396px;

            position: relative;

            @include breakpoints(x-small) {
                width: 350px;
                height: 335px;
                margin: auto;
            }

            @include breakpoints(small) {
                margin: auto;
            }

            @include breakpoints(medium) {
                width: 450px;
                height: 430px;
                margin: auto;
            }

            @include breakpoints(large) {
                width: 294px;
                height: 281px;
            }

            @include breakpoints(x-Large) {
                width: 354px;
                height: 338px;
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
</style>