<template>
    <section id="news">

        <div class="container">

            <h3 class="text-center wow animate__animated animate__slideInDown animate__slower" data-wow-offset="1"
                data-wow-delay="0.1s">الأخبار</h3>

            <div id="show_more" class="wow animate__animated animate__slideInLeft animate__slower" data-wow-offset="1"
                data-wow-delay="0.1s">
                <router-link :to="{ name: 'news' }" class="btn border-0">عرض المزيد</router-link>
            </div>

            <div class="clear"></div>

            <!-- In Large Screen -->

            <div id="content_wrapper" class="d-none d-xl-flex row wow animate__animated animate__slideInUp animate__slower"
                data-wow-offset="1" data-wow-delay="0.1s">

                <div class="col-3" v-if="vertical_card_one">
                    <div class="vertical_card card h-100 border-0">
                        <div class="img_wrapper">
                            <img src="@/assets/images/home/news_img_1.webp" class="card-img-top" alt="...">
                            <div class="img_layer"></div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"
                                @click="horizontal_card_one = true; horizontal_card_two = false; horizontal_card_three = false; vertical_card_one = false; vertical_card_two = true; vertical_card_three = true;">
                                اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعية</h5>
                        </div>
                    </div>
                </div>

                <div class="col-6" v-if="horizontal_card_one">
                    <div class="horizontal_card card h-100 border-0">
                        <div class="row g-0 h-100">
                            <div class="col-6">
                                <div class="img_wrapper img-fluid">
                                    <img src="@/assets/images/home/news_img_1.webp" alt="...">
                                    <div class="img_layer"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card-body h-100">
                                    <h5 class="card-title">اتفاقية شراكة</h5>
                                    <p class="card-text">اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعية ونصت
                                        مجالات الشراكة على تنفيذ الهاكاثونات والبرامج والمسابقات النوعية والعلمية - تسويق
                                        البرامج والمشاريع المشتركة - إعداد خطط استراتيجية واستشارات في مجال ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-3" v-if="vertical_card_two">
                    <div class="vertical_card card h-100 border-0">
                        <div class="img_wrapper">
                            <img src="@/assets/images/home/news_img_2.webp" class="card-img-top" alt="...">
                            <div class="img_layer"></div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"
                                @click="horizontal_card_one = false; horizontal_card_two = true; horizontal_card_three = false; vertical_card_one = true; vertical_card_two = false; vertical_card_three = true;">
                                توقيع مذكرة تفاهم بين Area9 Lyceum & Thaka Holding </h5>
                        </div>
                    </div>
                </div>

                <div class="col-6" v-if="horizontal_card_two">
                    <div class="horizontal_card card h-100 border-0">
                        <div class="row g-0 h-100">
                            <div class="col-6">
                                <div class="img_wrapper img-fluid">
                                    <img src="@/assets/images/home/news_img_2.webp" alt="...">
                                    <div class="img_layer"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card-body h-100">
                                    <h5 class="card-title">مذكرة تفاهم</h5>
                                    <p class="card-text">توقيع مذكرة تفاهم للتعاون في تطوير تقنيات التعليم! سيشهد هذا
                                        التعاون توحيد الخبرات الرائدة في مجالات الاستثمار والابتكار لخلق حلول تعليمية ثورية
                                        تعزز التعليم في المنطقة. هدفنا هو بناء مستقبل مليء بالفرص والإمكانيات.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-3" v-if="vertical_card_three">
                    <div class="vertical_card card h-100 border-0">
                        <div class="img_wrapper">
                            <img src="@/assets/images/home/news_img_3.webp" class="card-img-top" alt="...">
                            <div class="img_layer"></div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"
                                @click="horizontal_card_one = false; horizontal_card_two = false; horizontal_card_three = true; vertical_card_one = true; vertical_card_two = true; vertical_card_three = false;">
                                دورة تحكيم وزارة النقل</h5>
                        </div>
                    </div>
                </div>

                <div class="col-6" v-if="horizontal_card_three">
                    <div class="horizontal_card card h-100 border-0">
                        <div class="row g-0 h-100">
                            <div class="col-6">
                                <div class="img_wrapper img-fluid">
                                    <img src="@/assets/images/home/news_img_3.webp" alt="...">
                                    <div class="img_layer"></div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card-body h-100">
                                    <h5 class="card-title">دورة تحكيم وزارة النقل</h5>
                                    <p class="card-text">في خطوة هامة نحو تعزيز مهارات التحكيم وإعداد المشاركين في مسابقات
                                        الروبوتات العالمية، نظمت ذكاء القابضة ورش تدريبية مكثفة للحكام والمدربين. استضافت
                                        الورشة مجموعة من الخبراء في مجال الروبوتات والمسابقات التعليمية.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- In Small Screen -->

            <div id="carouselNewsSlidesOnly"
                class="carousel slide d-block d-xl-none wow animate__animated animate__slideInUp animate__slower"
                data-wow-offset="1" data-wow-delay="0.1s" data-bs-ride="carousel">

                <div class="carousel-inner">

                    <div class="carousel-item active" data-bs-interval="10000">

                        <div class="vertical_card card h-100 border-0">
                            <div class="img_wrapper">
                                <img src="@/assets/images/home/news_img_1.webp" class="card-img-top" alt="...">
                                <div class="img_layer"></div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعية</h5>
                                <p class="card-text">اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعية ونصت
                                    مجالات الشراكة على تنفيذ الهاكاثونات والبرامج والمسابقات النوعية والعلمية - تسويق
                                    البرامج والمشاريع المشتركة - إعداد خطط استراتيجية واستشارات في مجال ...</p>
                            </div>
                        </div>

                    </div>

                    <div class="carousel-item" data-bs-interval="10000">

                        <div class="vertical_card card h-100 border-0">
                            <div class="img_wrapper">
                                <img src="@/assets/images/home/news_img_2.webp" class="card-img-top" alt="...">
                                <div class="img_layer"></div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">توقيع مذكرة تفاهم بين Area9 Lyceum & Thaka Holding </h5>
                                <p class="card-text">توقيع مذكرة تفاهم للتعاون في تطوير تقنيات التعليم! سيشهد هذا
                                    التعاون توحيد الخبرات الرائدة في مجالات الاستثمار والابتكار لخلق حلول تعليمية ثورية
                                    تعزز التعليم في المنطقة. هدفنا هو بناء مستقبل مليء بالفرص والإمكانيات.</p>
                            </div>
                        </div>

                    </div>

                    <div class="carousel-item" data-bs-interval="10000">

                        <div class="vertical_card card h-100 border-0">
                            <div class="img_wrapper">
                                <img src="@/assets/images/home/news_img_3.webp" class="card-img-top" alt="...">
                                <div class="img_layer"></div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">دورة تحكيم وزارة النقل</h5>
                                <p class="card-text">في خطوة هامة نحو تعزيز مهارات التحكيم وإعداد المشاركين في مسابقات
                                    الروبوتات العالمية، نظمت ذكاء القابضة ورش تدريبية مكثفة للحكام والمدربين. استضافت
                                    الورشة مجموعة من الخبراء في مجال الروبوتات والمسابقات التعليمية.</p>
                            </div>
                        </div>

                    </div>

                </div>

                <!-- https://www.youtube.com/watch?v=BrCz-FlPGgk -->

                <!-- Carousel controls -->
                <button class="carousel-control-next" type="button" data-bs-target="#carouselNewsSlidesOnly"
                    data-bs-slide="next">
                    <font-awesome-icon :icon="['fas', 'fa-chevron-right']" />
                </button>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselNewsSlidesOnly"
                    data-bs-slide="prev">
                    <font-awesome-icon :icon="['fas', 'fa-chevron-left']" />
                </button>

            </div>

        </div>

    </section>
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'News',
    mounted() {
        new WOW().init();
    },
    data() {
        return {
            horizontal_card_one: true,
            horizontal_card_two: false,
            horizontal_card_three: false,
            vertical_card_one: false,
            vertical_card_two: true,
            vertical_card_three: true,
        }
    },
}
</script>

<style lang="scss" scoped>
#news {

    padding-top: 80px;
    padding-bottom: 80px;

    background-color: $Light-Primary;

    .container {

        h3 {
            font-family: 'FFShamelFamily-Bold';
            color: $Dark-Primary;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 180%;
        }

        #show_more {

            float: left;

            a {
                color: $Primary;
                transition: color 0.5s ease-in-out;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;
                &:hover{
                    color: $Dark-Primary;
                }
            }

        }

        .clear {
            clear: both;
        }

        // In Large Screen

        #content_wrapper {

            .card {
                border-radius: 0;
                box-shadow: 0px 4px 4px 0px $Box-Shadow;
            }

            .horizontal_card {

                .img_wrapper {

                    position: relative;

                    width: 318px;
                    height: 287.4px;

                    @include breakpoints(x-Large) {
                        width: 273px;
                        height: 295.367px;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .img_layer {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 55%;
                        height: 70%;
                        // https://stackoverflow.com/questions/12671898/outline-on-only-one-border
                        // box-shadow: 0 -16px 0 $Dark-Primary, -16px 0 0 $Dark-Primary;
                        // box-shadow: 0 -16px 0 $Dark-Primary;
                        border-top: 16px solid $White;
                        ;
                        border-right: 16px solid $White;
                    }
                }

                .card-body {

                    background: $Dark-Primary;

                    .card-title {
                        font-family: 'FFShamelFamily-Bold';
                        color: $White;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 156%;
                    }

                    .card-text {
                        color: $White;
                        text-align: justify;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 180%;
                    }

                }

            }

            .vertical_card {

                .img_wrapper {

                    position: relative;

                    width: 306px;
                    height: 191px;

                    @include breakpoints(x-Large) {
                        width: 261px;
                        height: 163px;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 0;
                    }

                    .img_layer {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 30%;
                        height: 45%;
                        // https://stackoverflow.com/questions/12671898/outline-on-only-one-border
                        // box-shadow: 0 -16px 0 $Dark-Primary, -16px 0 0 $Dark-Primary;
                        // box-shadow: 0 -16px 0 $Dark-Primary;
                        border-top: 16px solid $Dark-Primary;
                        border-right: 16px solid $Dark-Primary;
                    }
                }

                .card-body {

                    background: $Light-Primary;

                    .card-title {
                        font-family: 'FFShamelFamily-Bold';
                        color: $Dark-Primary;
                        // text-align: justify;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 156%;
                        cursor: pointer;
                    }
                }

            }

        }

        // In Small Screen

        #carouselNewsSlidesOnly {

            .carousel-inner {

                .carousel-item {

                    .vertical_card {

                        width: 80%;
                        margin: auto;

                        border-radius: 0;
                        box-shadow: 0px 4px 4px 0px $Box-Shadow;

                        .img_wrapper {

                            position: relative;

                            @include breakpoints(x-small) {
                                height: 236px;
                            }

                            @include breakpoints(small) {
                                width: 413px;
                                height: 260px;
                            }

                            @include breakpoints(medium) {
                                width:557px;
                                height: 350px;
                            }

                            @include breakpoints(large) {
                                width:749px;
                                height: 471px;
                            }

                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                border-radius: 0;
                            }

                            .img_layer {
                                position: absolute;
                                top: 0;
                                right: 0;
                                width: 30%;
                                height: 45%;
                                // https://stackoverflow.com/questions/12671898/outline-on-only-one-border
                                // box-shadow: 0 -16px 0 $Dark-Primary, -16px 0 0 $Dark-Primary;
                                // box-shadow: 0 -16px 0 $Dark-Primary;
                                border-top: 16px solid $Dark-Primary;
                                border-right: 16px solid $Dark-Primary;
                            }

                        }

                        .card-body {

                            background: $Dark-Primary;

                            @include breakpoints(x-small) {
                                // height: 275px;
                                height: 315px;
                            }

                            @include breakpoints(small) {
                                // height: 210px;
                                height: 230px;
                            }

                            @include breakpoints(medium) {
                                // height: 165px;
                                height: 175px;
                            }

                            @include breakpoints(large) {
                                // height: 140px;
                                height:150px
                            }

                            .card-title {
                                font-family: 'FFShamelFamily-Bold';
                                color: $White;
                                // text-align: justify;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 156%;
                            }

                            .card-text {
                                color: $White;
                                text-align: justify;
                                font-size: 16px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 180%;
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
</style>