<template>
    <div id="our_news">

        <div class="container">

            <div v-for="(section, index) in sections" :key="index" v-show="section.visible" class="card-section">

                <div class="cards">

                    <div v-for="card in section.cards" :key="card.id"
                        class="card h-100 border-0 wow animate__animated animate__slideInRight animate__slower"
                        data-wow-offset="1" data-wow-delay="0.1s">

                        <div class="img_wrapper">
                            <img :src="card.imageUrl" class="card-img-top" alt="Card Image">
                            <div class="img_layer"></div>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">{{ card.titleContent }}</h5>
                        </div>

                    </div>

                </div>

            </div>

            <div class="btnContainer mt-4">
                <button @click="showMore" class="border-0 wow animate__animated animate__heartBeat animate__slower"
                    data-wow-offset="1" data-wow-delay="0.1s">عرض المزيد</button>
            </div>

        </div>

    </div>
</template>

<script>

import WOW from "wow.js";

export default {

    name: 'OurNews',

    mounted() {
        new WOW().init();
    },

    data() {

        return {

            sections: [
                {
                    visible: true,
                    cards: [
                        {
                            id: 1,
                            imageUrl: require('../../assets/images/home/news_img_2.webp'),
                            titleContent: "توقيع مذكرة تفاهم بين Area9 Lyceum & Thaka Holding ",
                        },
                        {
                            id: 2,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 3,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 4,
                            imageUrl: require('../../assets/images/home/news_img_3.webp'),
                            titleContent: "دورة تحكيم وزارة النقل",
                        },
                        {
                            id: 5,
                            imageUrl: require('../../assets/images/home/news_img_2.webp'),
                            titleContent: "توقيع مذكرة تفاهم بين Area9 Lyceum & Thaka Holding ",
                        },
                        {
                            id: 6,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 7,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 8,
                            imageUrl: require('../../assets/images/home/news_img_3.webp'),
                            titleContent: "دورة تحكيم وزارة النقل",
                        },
                        {
                            id: 9,
                            imageUrl: require('../../assets/images/home/news_img_2.webp'),
                            titleContent: "توقيع مذكرة تفاهم بين Area9 Lyceum & Thaka Holding ",
                        },
                        {
                            id: 10,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 11,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 12,
                            imageUrl: require('../../assets/images/home/news_img_3.webp'),
                            titleContent: "دورة تحكيم وزارة النقل",
                        },
                    ]
                },
                {
                    visible: false,
                    cards: [
                        {
                            id: 13,
                            imageUrl: require('../../assets/images/home/news_img_2.webp'),
                            titleContent: "توقيع مذكرة تفاهم بين Area9 Lyceum & Thaka Holding ",
                        },
                        {
                            id: 14,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 15,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 16,
                            imageUrl: require('../../assets/images/home/news_img_3.webp'),
                            titleContent: "دورة تحكيم وزارة النقل",
                        },
                    ]
                },
                {
                    visible: false,
                    cards: [
                        {
                            id: 17,
                            imageUrl: require('../../assets/images/home/news_img_2.webp'),
                            titleContent: "توقيع مذكرة تفاهم بين Area9 Lyceum & Thaka Holding ",
                        },
                        {
                            id: 18,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 19,
                            imageUrl: require('../../assets/images/home/news_img_1.webp'),
                            titleContent: "اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي",
                        },
                        {
                            id: 20,
                            imageUrl: require('../../assets/images/home/news_img_3.webp'),
                            titleContent: "دورة تحكيم وزارة النقل",
                        }
                    ]
                },
                // More sections here...
            ],

            // Initialize to the index of the next section to show

            nextSectionIndexToShow: 1,

        };

    },

    methods: {
        showMore() {
            if (this.nextSectionIndexToShow < this.sections.length) {
                this.sections[this.nextSectionIndexToShow].visible = true;
                this.nextSectionIndexToShow++;
            }
        }
    }

};

</script>

<style lang="scss" scoped>
#our_news {

    padding-top: 112px;
    padding-bottom: 40px;

    background-color: $White;

    .container {

        .card-section {

            .cards {

                display: flex;
                flex-wrap: wrap;

                .card {

                    background-color: $Light-Primary;
                    box-shadow: 0px 4px 4px 0px $Box-Shadow;
                    // filter: brightness(110%);

                    width: calc(25% - 16px);
                    margin-left: 8px;
                    margin-right: 8px;
                    margin-bottom: 16px;

                    // border: none;
                    border-radius: 0;

                    @include breakpoints(x-small) {
                        width: calc(100% - 16px);
                    }

                    @include breakpoints(small) {
                        width: calc(50% - 16px);
                    }

                    @include breakpoints(medium) {
                        width: calc(50% - 16px);
                    }

                    .img_wrapper {

                        position: relative;

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

                        height: 90px;

                        @include breakpoints(small) {
                            height: 116px;
                        }

                        @include breakpoints(large) {
                            height: 116px;
                        }

                        @include breakpoints(x-Large) {
                            height: 116px;
                        }

                        .card-title {
                            font-family: 'FFShamelFamily-Bold';
                            color: $Dark-Primary;
                            // text-align: justify;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 156%;
                        }
                    }

                }

            }

        }

        .btnContainer {

            display: flex;
            justify-content: center;
            align-items: center;

            button {
                background: $Primary;
                padding: 5px 16px;
                border-radius: 8px;
                color: $White;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;
                cursor: pointer;
                transition: background 1s ease-in-out;
                // transition: 0.5s linear;

                &:hover {
                    background: $Linear-Blue;
                    background-clip: padding-box;
                    -webkit-background-clip: padding-box;
                    -webkit-text-fill-color: $White;
                }

            }
        }

    }

}</style>