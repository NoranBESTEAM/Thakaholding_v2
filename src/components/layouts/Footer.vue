<template>
    <!-- https://mdbootstrap.com/docs/standard/navigation/footer/ -->

    <!-- Footer -->

    <footer>

        <div class="container">

            <!-- Start Grid row -->

            <div class="row">

                <!-- Start Grid column One -->

                <div class="col-12 col-lg-3 mx-auto wow animate__animated animate__bounceInRight animate__slower" data-wow-offset="1" data-wow-delay="0.1s">
                    <img id="footer_logo" src="@/assets/images/navbar/logo_white.webp" alt="footer_logo">
                    <p class="mt-3 mb-2 d-none d-lg-block">
                        <img src="@/assets/images/footer/phone.webp" alt="Contact" class="contactImg ms-2">
                        <a href="tel:+966555177306" class="text-reset">9-6655-5177-306+</a>
                    </p>
                    <p class="mb-0 d-none d-lg-block">
                        <img src="@/assets/images/footer/mail.webp" alt="Mail" class="contactImg ms-2">
                        <a href="mailto:info@Steamademy.com" class="text-reset">INFO@THAKA.SA</a>
                    </p>
                </div>

                <!-- End Grid column One -->

                <!-- Start Grid column Two -->

                <div class="col-6 col-lg-2 mx-auto mt-3 mt-lg-0 wow animate__animated animate__bounceInLeft animate__slower" data-wow-offset="1" data-wow-delay="0.3s">
                    <!-- Links -->
                    <p class="mb-2">
                        <router-link :to="{ name: 'home' }" class="text-reset">الرئيسية</router-link>
                    </p>
                    <p class="mb-2">
                        <router-link :to="{ name: 'about' }" class="text-reset">من نحن</router-link>
                    </p>
                    <p class="mb-2">
                        <router-link :to="{ name: 'story' }" class="text-reset">قصتنا</router-link>
                    </p>
                    <p class="mb-2">
                        <router-link :to="{ name: 'partner' }" class="text-reset">الشركات التابعة</router-link>
                    </p>
                    <p class="mb-0">
                        <router-link :to="{ name: 'news' }" class="text-reset">الأخبار</router-link>
                    </p>
                </div>

                <!-- End Grid column Two -->

                <!-- In Small Screen -->

                <div class="col-6 d-block d-lg-none mx-auto mt-3 mt-lg-0 wow animate__animated animate__bounceInLeft animate__slower" data-wow-offset="1" data-wow-delay="0.3s">
                    <p class="mb-2">
                        <img src="@/assets/images/footer/phone.webp" alt="Contact" class="contactImg ms-2">
                        <a href="tel:+966555177306" class="text-reset">9-6655-5177-306+</a>
                    </p>
                    <p class="mb-0">
                        <img src="@/assets/images/footer/mail.webp" alt="Mail" class="contactImg ms-2">
                        <a href="mailto:info@Steamademy.com" class="text-reset">INFO@THAKA.SA</a>
                    </p>
                </div>

                <!-- Start Grid column Three -->

                <div class="col-12 col-lg-4 mx-auto mt-3 mt-lg-0 wow animate__animated animate__bounceInLeft animate__slower" data-wow-offset="1" data-wow-delay="0.5s">
                    <p class="mb-3">
                        <img src="@/assets/images/footer/location.webp" alt="Location" class="locImg ms-2">
                        المملكة العربية السعودية - الإمارات العربية المتحدة - مصر
                    </p>
                    <p class="mb-0">
                        <img src="@/assets/images/footer/map.webp" alt="Location" class="locImg ms-2">
                        المملكة العربية السعودية - الرياض - طريق عثمان ابن عفان - حي الإزدهار, 7375
                    </p>
                </div>

                <!-- End Grid column Three -->

                <!-- Start Grid column Four -->

                <div class="col-12 col-lg-3 mx-auto mt-3 mt-lg-0 wow animate__animated animate__bounceInLeft animate__slower" data-wow-offset="1" data-wow-delay="0.7s">
                    <h6 class="fw-bold mb-2">آخر الأخبار</h6>
                    <p class="mb-2">ادخل بريدك الإلكتروني ليصلك كل جديد</p>
                    <!-- Email input -->
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="البريد الإلكتروني" aria-label="Email"
                            aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1">
                            <font-awesome-icon :icon="['fas', 'fa-paper-plane']" class="inputIco" />
                        </span>
                    </div>
                    <!-- Social Links -->
                    <div id="social">
                        <a href="https://www.facebook.com/" class="me-3 text-reset">
                            <!-- <i class="fa-brands fa-facebook-f"></i> -->
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>
                        <a href="https://twitter.com/" class="me-3 text-reset">
                            <!-- <i class="fa-brands fa-x-twitter"></i> -->
                            <font-awesome-icon :icon="['fab', 'x-twitter']" />
                        </a>
                        <a href="https://www.instagram.com/" class="me-3 text-reset">
                            <!-- <i class="fa-brands fa-instagram"></i> -->
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <a href="https://www.linkedin.com/" class="me-3 text-reset">
                            <!-- <i class="fa-brands fa-linkedin-in"></i> -->
                            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                        </a>
                    </div>
                </div>

                <!-- End Grid column Four -->

            </div>

            <!-- End Grid row -->

            <!-- Copyright -->
            <div id="copyright" class="text-center pt-2 pb-2 wow animate__animated animate__bounceInLeft animate__slower">
                &copy; {{ new Date().getFullYear() }}
                جميع الحقوق محفوظة
            </div>
            <!-- Copyright -->

        </div>

    </footer>

    <!-- Footer -->
</template>

<script>
import WOW from "wow.js";
export default {
    name: 'Footer',
    mounted() {
        new WOW().init();
    },
}
</script>

<style lang="scss" scoped>
footer {

    background: $Black;
    color: $White;

    a {
        &:hover {
            color: $Primary !important;
        }
    }

    .container {

        .row {

            padding-top: 40px;

            padding-bottom: 8px;

            border-bottom: 1px solid $White;

            #footer_logo {
                width: 153.121px;
                height: 80px;
            }

            p,
            a,
            h6 {
                color: $White;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 180%;
            }

            p {
                text-align: justify;
            }

            .contactImg {
                width: 20px;
                height: 20px;
            }

            .locImg {
                width: 29.489px;
                height: 24.001px;
            }

            // In Grid Four
            .input-group {

                @include breakpoints(x-small) {
                    width: 80%;
                }

                @include breakpoints(small) {
                    width: 80%;
                }

                @include breakpoints(medium) {
                    width: 80%;
                }

                input {
                    border: none;
                    border-radius: 0 4px 4px 0 !important;
                    caret-color: $Gry;
                }

                input:focus,
                input:focus+span {
                    border: none;
                    box-shadow: none;
                }

                input::placeholder {
                    color: $Gry;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 180%;
                }

                input:focus::placeholder {
                    color: transparent;
                }

                span {
                    border: none;
                    border-radius: 4px 0 0 4px !important;
                    background: $Primary;
                    color: $White;
                }

                span:hover {
                    background: $Linear-Blue;
                    background-clip: padding-box;
                    -webkit-background-clip: padding-box;
                    -webkit-text-fill-color: $White;
                    transition: background 1s ease-in;
                }

                .inputIco {
                    // CSS Vendor Prefixes
                    -webkit-transform: rotate(270deg);
                    -moz-transform: rotate(270deg);
                    -o-transform: rotate(270deg);
                    -ms-transform: rotate(270deg);
                    transform: rotate(270deg);
                }

            }

            #social {
                a {
                    svg {
                        color: $White;
                        font-size: 16px;
                    }

                    svg:hover {
                        color: $Primary;
                    }
                }
            }

        }

        #copyright {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 180%;

            @include breakpoints(x-small) {
                font-size: 10px;
            }
        }

    }

}
</style>
