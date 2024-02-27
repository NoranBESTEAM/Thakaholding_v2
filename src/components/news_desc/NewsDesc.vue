<template>
    <section id="news_desc">

        <div class="container">

            <div class="card">

                <div class="img_wrapper wow animate__animated animate__slideInDown animate__slower" data-wow-offset="1" data-wow-delay="0.1s">
                    <img src="@/assets/images/home/news_img_1.webp" class="card-img-top" alt="Card Image">
                    <div class="img_layer"></div>
                </div>

                <div class="card-body">

                    <h5 class="card-title wow animate__animated animate__slideInRight animate__slower" data-wow-offset="1" data-wow-delay="0.1s">اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعي</h5>

                    <p class="card-text wow animate__animated animate__slideInRight animate__slower" data-wow-offset="1" data-wow-delay="0.1s">اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعية ونصت مجالات الشراكة على
                        تنفيذ الهاكاثونات والبرامج والمسابقات النوعية والعلمية - تسويق البرامج والمشاريع المشتركة - إعداد
                        خطط استراتيجية واستشارات في مجال تطوير القدرات والابتكار وريادة الأعمال<br /><br />اتفاقية شراكة بين
                        ذكاء
                        القابضة و جمعية المسئوولية المجتمعية ونصت مجالات الشراكة على تنفيذ الهاكاثونات والبرامج والمسابقات
                        النوعية والعلمية - تسويق البرامج والمشاريع المشتركة - إعداد خطط استراتيجية واستشارات في مجال تطوير
                        القدرات والابتكار وريادة الأعمال<br /><br />اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية
                        المجتمعية
                        ونصت مجالات الشراكة على تنفيذ الهاكاثونات والبرامج والمسابقات النوعية والعلمية - تسويق البرامج
                        والمشاريع المشتركة - إعداد خطط استراتيجية واستشارات في مجال تطوير القدرات والابتكار وريادة الأعمال
                        اتفاقية شراكة بين ذكاء القابضة و جمعية المسئوولية المجتمعية ونصت مجالات الشراكة على تنفيذ
                        الهاكاثونات والبرامج والمسابقات النوعية والعلمية - تسويق البرامج والمشاريع المشتركة - إعداد خطط
                        استراتيجية واستشارات في مجال تطوير القدرات والابتكار وريادة الأعمال</p>

                </div>

            </div>

        </div>

    </section>
</template>

<script>

import WOW from "wow.js";

export default {

    name: 'NewsDesc',

    mounted() {
        new WOW().init();
    },

}

</script>

<style lang="scss" scoped>
#news_desc {

    padding-top: 112px;
    padding-bottom: 40px;

    background-color: $White;

    .container {

        .card {

            background-color: $White;
            // box-shadow: 0px 4px 4px 0px $Box-Shadow;
            // filter: brightness(110%);
            border: none;
            border-radius: 0;

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
                    left: 0;
                    width: 30%;
                    height: 45%;
                    // https://stackoverflow.com/questions/12671898/outline-on-only-one-border
                    // box-shadow: 0 -16px 0 $Dark-Primary, -16px 0 0 $Dark-Primary;
                    // box-shadow: 0 -16px 0 $Dark-Primary;
                    border-top: 16px solid $Dark-Primary;
                    border-left: 16px solid $Dark-Primary;
                }

            }

            .card-body {

                .card-title {
                    font-family: 'FFShamelFamily-Bold';
                    color: $Dark-Primary;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 156%;
                }

                .card-text {
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
</style>