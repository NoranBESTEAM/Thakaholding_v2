<template>
    <!-- https://www.youtube.com/watch?v=IFai8qTKvEM -->

    <section id="valuable">

        <div class="container">

            <h3 class="text-center mb-3 wow animate__animated animate__slideInDown animate__slower" data-wow-offset="1"
                data-wow-delay="0.1s">قيمنا</h3>

            <!-- In Large Screen -->

            <div class="row g-3 d-none d-sm-flex">

                <div class="col-sm-6 col-xl-3 wow animate__animated animate__slideInUp animate__slower" data-wow-offset="50"
                    data-wow-delay="0.1s">

                    <div class="box overflow-hidden" @mouseover="firstImg = false; firstTitle = false;"
                        @mouseleave="firstImg = true; firstTitle = true;">

                        <div class="icon">
                            <div class="img_wrapper">
                                <img :src="firstImg ? firstDefaultImg : firstHoverImg" alt="">
                            </div>
                            <h3 v-if="firstTitle">الابتكار</h3>
                        </div>

                        <div class="content">
                            <h3>الابتكار</h3>
                            <p>ندعم الابتكار في جميع المجالات، ونسعى إلى تطوير حلول جديدة ومبتكرة لتحديات العالم</p>
                        </div>

                    </div>

                </div>

                <div class="col-sm-6 col-xl-3 wow animate__animated animate__slideInUp animate__slower" data-wow-offset="50"
                    data-wow-delay="0.3s">

                    <div class="box overflow-hidden" @mouseover="secondImg = false; secondTitle = false;"
                        @mouseleave="secondImg = true; secondTitle = true;">

                        <div class="icon">
                            <div class="img_wrapper">
                                <img :src="secondImg ? secondDefaultImg : secondHoverImg" alt="">
                            </div>
                            <h3 v-if="secondTitle">المسؤولية</h3>
                        </div>

                        <div class="content">
                            <h3>المسؤولية</h3>
                            <p>نراعي مسؤوليتنا في استثمارات الشركاء من أجل تحقيق أفضل عوائد لهم</p>
                        </div>

                    </div>

                </div>

                <div class="col-sm-6 col-xl-3 wow animate__animated animate__slideInUp animate__slower" data-wow-offset="50"
                    data-wow-delay="0.5s">

                    <div class="box overflow-hidden" @mouseover="thirdImg = false; thirdTitle = false;"
                        @mouseleave="thirdImg = true; thirdTitle = true;">

                        <div class="icon">
                            <div class="img_wrapper">
                                <img :src="thirdImg ? thirdDefaultImg : thirdHoverImg" alt="">
                            </div>
                            <h3 v-if="thirdTitle">الشراكة</h3>
                        </div>

                        <div class="content">
                            <h3>الشراكة</h3>
                            <p>نؤمن بأهمية الشراكة ، ونسعى إلى تحقيق المنفعة المشتركة</p>
                        </div>

                    </div>

                </div>

                <div class="col-sm-6 col-xl-3 wow animate__animated animate__slideInUp animate__slower" data-wow-offset="50"
                    data-wow-delay="0.7s">

                    <div class="box overflow-hidden" @mouseover="fourthImg = false; fourthTitle = false;"
                        @mouseleave="fourthImg = true; fourthTitle = true;">

                        <div class="icon">
                            <div class="img_wrapper">
                                <img :src="fourthImg ? fourthDefaultImg : fourthHoverImg" alt="">
                            </div>
                            <h3 v-if="fourthTitle">التأثير</h3>
                        </div>

                        <div class="content">
                            <h3>التأثير</h3>
                            <p>نلتزم بمسؤوليتنا الاجتماعية، ونسعى إلى المساهمة في بناء مجتمع أفضل</p>
                        </div>

                    </div>

                </div>

            </div>

            <!-- In Small Screen -->

            <div class="d-block d-sm-none">

                <div id="carouselValuableSlidesOnly"
                    class="carousel slide wow animate__animated animate__slideInUp animate__slower" data-wow-offset="1"
                    data-wow-delay="0.1s" data-bs-ride="carousel">

                    <div class="carousel-inner">

                        <div class="carousel-item active" data-bs-interval="10000">

                            <div class="box overflow-hidden" @mouseover="firstImg = false; firstTitle = false;"
                                @mouseleave="firstImg = true; firstTitle = true;">

                                <div class="icon">
                                    <div class="img_wrapper">
                                        <img :src="firstImg ? firstDefaultImg : firstHoverImg" alt="">
                                    </div>
                                    <h3 v-if="firstTitle">الابتكار</h3>
                                </div>

                                <div class="content">
                                    <h3>الابتكار</h3>
                                    <p>ندعم الابتكار في جميع المجالات، ونسعى إلى تطوير حلول جديدة ومبتكرة لتحديات العالم</p>
                                </div>

                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="box overflow-hidden" @mouseover="secondImg = false; secondTitle = false;"
                                @mouseleave="secondImg = true; secondTitle = true;">

                                <div class="icon">
                                    <div class="img_wrapper">
                                        <img :src="secondImg ? secondDefaultImg : secondHoverImg" alt="">
                                    </div>
                                    <h3 v-if="secondTitle">المسؤولية</h3>
                                </div>

                                <div class="content">
                                    <h3>المسؤولية</h3>
                                    <p>نراعي مسؤوليتنا في استثمارات الشركاء من أجل تحقيق أفضل عوائد لهم</p>
                                </div>

                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="box overflow-hidden" @mouseover="thirdImg = false; thirdTitle = false;"
                                @mouseleave="thirdImg = true; thirdTitle = true;">

                                <div class="icon">
                                    <div class="img_wrapper">
                                        <img :src="thirdImg ? thirdDefaultImg : thirdHoverImg" alt="">
                                    </div>
                                    <h3 v-if="thirdTitle">الشراكة</h3>
                                </div>

                                <div class="content">
                                    <h3>الشراكة</h3>
                                    <p>نؤمن بأهمية الشراكة ، ونسعى إلى تحقيق المنفعة المشتركة</p>
                                </div>

                            </div>

                        </div>

                        <div class="carousel-item" data-bs-interval="10000">

                            <div class="box overflow-hidden" @mouseover="fourthImg = false; fourthTitle = false;"
                                @mouseleave="fourthImg = true; fourthTitle = true;">

                                <div class="icon">
                                    <div class="img_wrapper">
                                        <img :src="fourthImg ? fourthDefaultImg : fourthHoverImg" alt="">
                                    </div>
                                    <h3 v-if="fourthTitle">التأثير</h3>
                                </div>

                                <div class="content">
                                    <h3>التأثير</h3>
                                    <p>نلتزم بمسؤوليتنا الاجتماعية، ونسعى إلى المساهمة في بناء مجتمع أفضل</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    <!-- https://www.youtube.com/watch?v=BrCz-FlPGgk -->

                    <!-- Carousel controls -->
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselValuableSlidesOnly"
                        data-bs-slide="next">
                        <font-awesome-icon :icon="['fas', 'fa-chevron-right']" />
                    </button>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselValuableSlidesOnly"
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
    name: 'Valuable',
    mounted() {
        new WOW().init();
    },
    data() {
        return {
            firstImg: true,
            firstTitle: true,
            firstDefaultImg: require('../../assets/images/about/innovation.webp'),
            firstHoverImg: require('../../assets/images/about/innovation_small.webp'),
            secondImg: true,
            secondTitle: true,
            secondDefaultImg: require('../../assets/images/about/responsibility.webp'),
            secondHoverImg: require('../../assets/images/about/responsibility_small.webp'),
            thirdImg: true,
            thirdTitle: true,
            thirdDefaultImg: require('../../assets/images/about/partnership.webp'),
            thirdHoverImg: require('../../assets/images/about/partnership_small.webp'),
            fourthImg: true,
            fourthTitle: true,
            fourthDefaultImg: require('../../assets/images/about/influence.webp'),
            fourthHoverImg: require('../../assets/images/about/influence_small.webp'),
        };
    },
}
</script>

<style lang="scss" scoped>
#valuable {

    padding-top: 40px;
    padding-bottom: 40px;

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

        // In Large Screen

        .box {
            height: 250px;
            background-color: transparent;
            box-shadow: 0px 4px 4px 0px $Box-Shadow;
            position: relative;

            @include breakpoints(small) {
                height: 280px;
            }

            .icon {

                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: transparent;
                transition: 0.5s;
                z-index: 1;

                .img_wrapper {

                    position: absolute;
                    top: 42%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80px;
                    height: 80px;
                    transition: 0.5s;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                }

                h3 {
                    font-family: 'FFShamelFamily-Bold';
                    color: $Dark-Primary;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 128%;

                    position: absolute;
                    top: 65%;
                    left: 50%;
                    transform: translate(-50%, 0);
                    transition: 0.5s;
                }

            }

            .content {
                position: absolute;
                top: 100%;
                height: calc(100% - 100px);
                text-align: center;
                padding: 16px;
                transition: 0.5s;
                opacity: 0;

                h3 {
                    font-family: 'FFShamelFamily-Bold';
                    color: $Light-Primary;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 128%;
                }

                p {
                    color: $White;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 180%;
                }
            }

            &:hover {

                background: $Linear-Blue;

                .icon {
                    top: 20px;
                    right: calc(50% - 40px);
                    width: 80px;
                    height: 80px;

                    .img_wrapper {
                        width: 40px;
                        height: 40px;
                    }
                }

                .content {
                    top: 100px;
                    opacity: 1;
                }
            }
        }

        // In Small Screen

        #carouselValuableSlidesOnly {

            .carousel-inner {

                .carousel-item {

                    .box {

                        width: 80%;
                        margin: auto;
                        box-shadow: none;

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

}</style>