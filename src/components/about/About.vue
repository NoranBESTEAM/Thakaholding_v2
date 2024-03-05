<template>
    <section id="about">

        <div class="container">

            <div class="row">

                <div class="col-12 col-lg-8 my-auto">

                    <div id="content_wrapper"
                        class="wow animate__animated animate__slideInRight animate__slower pt-lg-3 pb-lg-3"
                        data-wow-offset="1" data-wow-delay="0.1s">

                        <h3>من نحن</h3>

                        <p>شركة ذكاء القابضة، منظومة متكاملة في التعليم والتطوير والتصنيع والاستثمار في المجالات التي
                            تواكب
                            الثورة الصناعية الرابعة والتقنيات المتقدمة. نؤمن بأهمية تمكين النشئ من مهارات القرن الحادي
                            والعشرين والتأهيل لوظائف المستقبل، وتنمية الابتكار ولذلك نستثمر دائمًا في فرص مجالات
                            المستقبل.
                        </p>

                        <div id="counter_wrapper">

                            <div class="element">
                                <span class="count" data-val="100">00</span>
                                <h6>مشروع</h6>
                            </div>

                            <div class="element">
                                <span class="count" data-val="150">00</span>
                                <h6>شريك</h6>
                            </div>

                            <div class="element">
                                <span class="count" data-val="500">00</span>
                                <h6>إستشارة</h6>
                            </div>

                            <div class="element">
                                <span class="count" data-val="100">00</span>
                                <h6>استثمار</h6>
                            </div>

                            <div class="element">
                                <span class="count" data-val="800">00</span>
                                <h6>مستفيد</h6>
                            </div>

                        </div>

                    </div>

                </div>

                <div id="imgSec" class="col-12 col-lg-4 mt-3 mt-lg-0">

                    <div id="img_wrapper" class="wow animate__animated animate__fadeIn animate__slower"
                        data-wow-offset="1" data-wow-delay="0.3s">

                        <img src="@/assets/images/about/about_img.webp" alt="">

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

    name: 'About',

    mounted() {

        new WOW().init();

        // https://www.youtube.com/watch?v=eMtebHRQaM4

        // https://www.youtube.com/watch?v=PLsUdgLnzgQ

        let counts = document.querySelectorAll(".count");

        function startCounterFnc(el) {

            let aboutGoal = el.dataset.val;

            let counter = setInterval(() => {

                el.textContent++;

                if (el.textContent == aboutGoal) {

                    clearInterval(counter);

                    // let countText = parseFloat(el.textContent);

                    // countText = countText + ' +';

                    // // console.log(countText);

                    // el.innerHTML = countText;

                }

            }, 3500 / aboutGoal);

        }

        counts.forEach((count) => {

            startCounterFnc(count);

        });

    },

}

</script>

<style lang="scss" scoped>
#about {

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

            #counter_wrapper {

                display: flex;
                justify-content: center;
                align-items: center;

                .element {

                    text-align: center;

                    // margin-left: 40px;
                    // margin-right: 40px;

                    flex: 1;

                    @include breakpoints(x-small) {
                        margin-left: 10px;
                        margin-right: 10px;
                    }

                    @include breakpoints(small) {
                        margin-left: 20px;
                        margin-right: 20px;
                    }

                    @include breakpoints(medium) {
                        margin-left: 20px;
                        margin-right: 20px;
                    }

                    span {
                        font-family: 'FFShamelFamily-Bold';
                        color: $Dark-Primary;
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 180%;

                        @include breakpoints(x-small) {
                            font-size: 16px;
                        }

                        @include breakpoints(small) {
                            font-size: 20px;
                        }

                        @include breakpoints(medium) {
                            font-size: 20px;
                        }

                        @include breakpoints(large) {
                            font-size: 20px;
                        }
                    }

                    h6 {
                        color: $Dark-Primary;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 180%;
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