<template>
    <div id="our_news">

        <div class="container">

            <div v-for="(section, index) in sections" :key="index" v-show="section.visible" class="card-section">

                <div class="cards">

                    <div v-for="card in section.cards" :key="card.id" class="card">

                        <img :src="card.imageUrl" class="card-img-top" alt="Card Image">

                        <div class="card-body">
                            <h5 class="card-title">{{ card.titleContent }}</h5>
                        </div>

                    </div>

                </div>

            </div>

            <div class="btnContainer mt-4">
                <button @click="showMore">عرض المزيد</button>
            </div>

        </div>

    </div>
</template>

<script>

export default {

    name: 'OurNews',

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
                        }
                    ]
                },
                {
                    visible: false,
                    cards: [
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
                        }
                    ]
                },
                {
                    visible: false,
                    cards: [
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

    background-color: $Light-Primary;

    .container {

        .card-section {

            margin-bottom: 16px;

            .cards {

                display: flex;
                flex-wrap: wrap;

                .card {

                    background-color: $Light-Primary;
                    box-shadow: 0px 4px 4px 0px $Box-Shadow;
                    filter: brightness(110%);

                    width: calc(25% - 16px);
                    margin-left: 8px;
                    margin-right: 8px;

                    border: none;
                    border-radius: 0;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 0;
                    }

                    .card-body {
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
                border: none;
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

}
</style>