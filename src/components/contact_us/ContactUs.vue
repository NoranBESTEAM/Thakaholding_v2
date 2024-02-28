<template>
    <section id="contact_us">

        <div class="container">

            <div class="row">

                <div class="col-12 col-lg-7 order-2 order-lg-1 wow animate__animated animate__slideInRight animate__slower" data-wow-offset="1" data-wow-delay="0.1s">

                    <h3 class="mt-3 me-3">تواصل معنا</h3>

                    <form class="p-3 border-none">

                        <input type="text" class="form-control shadow-none mb-3" placeholder="الاسم">

                        <input type="tel" class="form-control shadow-none mb-3" placeholder="رقم الهاتف">

                        <input type="text" class="form-control shadow-none mb-3" placeholder="عنوان الرسالة">

                        <textarea class="form-control shadow-none mb-3" rows="6">الرسالة</textarea>

                        <button type="submit" class="btn border-none">ارسال</button>

                    </form>

                    <div id="text_wrapper" class="me-3">

                        <p class="contactText mb-3">
                            <img src="@/assets/images/contact_us/location.webp" alt="Location" class="contactIcon ms-2">
                            المملكة العربية السعودية - الإمارات العربية المتحدة - مصر
                        </p>

                        <p class="contactText mb-3">
                            <img src="@/assets/images/contact_us/phone.webp" alt="Contact" class="contactIcon ms-2">
                            <a href="tel:+966555177306" class="text-reset">9-6655-5177-306+</a>
                        </p>
                        <p class="contactText">
                            <img src="@/assets/images/contact_us/mail.webp" alt="Mail" class="contactIcon ms-2">
                            <a href="mailto:info@Steamademy.com" class="text-reset">INFO@THAKA.SA</a>
                        </p>

                    </div>


                </div>

                <div class="col-12 col-lg-5 p-0 order-1 order-lg-2">

                    <div id="img_wrapper" class="mb-3 wow animate__animated animate__fadeIn animate__slower" data-wow-offset="1" data-wow-delay="0.3s">

                        <img src="@/assets/images/contact_us/contact_img.webp" alt="">

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

    name: 'ContactUs',

    mounted() {

        new WOW().init();

    },

}

</script>

<style lang="scss" scoped>
#contact_us {

    padding-top: 112px;
    padding-bottom: 40px;

    background-color: $Light-Primary;

    .container {

        .row {

            border: 4px solid $White;

            @include breakpoints(x-small) {
                border: 0;
            }

            @include breakpoints(small) {
                border: 0;
            }

            @include breakpoints(medium) {
                border: 0;
            }

            h3 {
                font-family: 'FFShamelFamily-Bold';
                color: $Dark-Primary;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;
            }

            form {

                input {
                    caret-color: $Primary;
                }

                input::placeholder,
                textarea {
                    color: $Primary;
                    text-align: right;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 180%;
                }

                input:focus::placeholder {
                    color: transparent;
                }

                button {
                    background-color: $Primary;
                    padding: 3px 16px;
                    font-family: 'FFShamelFamily-Bold';
                    color: $White;
                    font-size: 16px;
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

            #text_wrapper {

                .contactText {
                    color: $Black;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 180%;

                    .contactIcon {
                        height: 24px;
                    }
                }

            }

            #img_wrapper {

                width: 100%;
                height: auto;

                @include breakpoints(x-small) {
                    width: 90%;
                    margin: auto;
                }

                position: relative;

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
                    border-top: 16px solid $Dark-Primary;
                    border-left: 16px solid $Dark-Primary;
                }

            }

        }

    }

}
</style>