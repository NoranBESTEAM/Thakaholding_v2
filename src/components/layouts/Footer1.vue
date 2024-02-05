<template>
    <!-- https://mdbootstrap.com/docs/standard/navigation/footer/ -->

    <!-- Footer -->

    <footer>

        <div class="container">

            <!-- Grid row -->

            <div class="row">

                <!-- Grid column -->
                <div class="col-12 col-lg-3 mx-auto wow animate__animated animate__bounceInRight animate__slower"
                    data-wow-offset="1" id="about-us" data-wow-delay="0.1s">
                    <img src="@/assets/images/navbar/logo_white.webp" alt="footer_logo">
                    <p class="mt-3">
                        <img src="@/assets/images/footer/phone.webp" alt="Contact" class="contactImg ms-2">
                        <a href="tel:+966555177306">9-6655-5177-306+</a>
                    </p>
                    <p>
                        <img src="@/assets/images/footer/mail.webp" alt="Mail" class="contactImg ms-2">
                        <a href="mailto:info@Steamademy.com" class="text-reset">info@thaka.sa</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mx-auto wow animate__animated animate__bounceInLeft animate__slower"
                    data-wow-offset="1" data-wow-delay="0.3s">
                    <!-- Links -->
                    <h6 class="fw-bold mb-3">
                        روابط هامة
                    </h6>
                    <p>
                        <a href="/#/about" class="text-reset">من نحن</a>
                    </p>
                    <p>
                        <a href="/#/commercial_concession" class="text-reset">امتياز STEAM التجاري</a>
                    </p>
                    <p>
                        <a href="/#/steam_fields" class="text-reset">مجالات STEAM</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mx-auto wow animate__animated animate__bounceInLeft animate__slower"
                    data-wow-offset="1" data-wow-delay="0.5s">
                    <!-- Links -->
                    <h6 class="fw-bold mb-3">
                        تواصل معنا
                    </h6>
                    <p>
                        <img src="@/assets/images/footer/location.webp" alt="Location" class="contactImg ms-2">
                        السعودية - الإمارات - مصر
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mx-auto wow animate__animated animate__bounceInLeft animate__slower"
                    data-wow-offset="1" data-wow-delay="0.7s">
                    <!-- Links -->
                    <h6 class="fw-bold mb-3">آخر الأخبار</h6>
                    <p>ادخل بريدك الإلكتروني ليصلك كل جديد</p>
                    <!-- Email input -->
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="البريد الإلكتروني" aria-label="Email"
                            aria-describedby="basic-addon1" />
                        <span class="input-group-text" id="basic-addon1">
                            <!-- <i class="fa-solid fa-paper-plane fa-rotate-270"></i> -->
                            <!-- <font-awesome-icon icon="fa-paper-plane" /> -->
                            <font-awesome-icon :icon="['fas', 'fa-paper-plane']" class="inputIco" />
                        </span>
                    </div>
                    <!-- Social Links -->
                    <div id="social">
                        <a href="https://www.facebook.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-facebook-f"></i> -->
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>
                        <a href="https://twitter.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-x-twitter"></i> -->
                            <font-awesome-icon :icon="['fab', 'x-twitter']" />
                        </a>
                        <a href="https://www.instagram.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-instagram"></i> -->
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <a href="https://www.linkedin.com/" class="me-4 text-reset">
                            <!-- <i class="fa-brands fa-linkedin-in"></i> -->
                            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                        </a>
                    </div>
                </div>
                <!-- Grid column -->

            </div>

            <!-- Grid row -->

        </div>

        <!-- Copyright -->
        <div class="text-center pt-2 pb-2 wow animate__animated animate__bounceInLeft animate__slower" data-wow-delay="0.3s"
            id="copyright">
            &copy; {{ new Date().getFullYear() }}
            جميع الحقوق محفوظة لدى شركة
            <a class="text-reset fw-bold" href="https://thaka.net/#/">ذكاء انترناشيونال</a>
        </div>
        <!-- Copyright -->

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

    .row {

        padding-top: 40px;

        padding-bottom: 8px;

        border-bottom: 1px solid $White;

        h6 {
            @include breakpoints(x-small) {
                margin-top: 16px;
            }

            @include breakpoints(small) {
                margin-top: 16px;
            }

            @include breakpoints(medium) {
                margin-top: 16px;
            }
        }

        p {
            font-size: 14px;
            // font-size: 16px;
            font-weight: 400;
        }

        // In Grid One

        #about-us {

            img {

                width: 110.741px;
                height: 56px;

                @include breakpoints(x-small) {
                    margin-bottom: 8px;
                }

            }

            p {
                // font-size: 18px;
                font-size: 16px;
            }

        }

        // In Grid Two

        // In Grid Three
        .contactImg {
            width: 24px;
            height: 24px;
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
                // caret-color: $Gry;
            }

            input:focus,
            input:focus+span {
                border: none;
                box-shadow: none;
            }

            input::placeholder {
                // color: $Gry;
                font-size: 12px;
                // font-size: 14px;
                font-weight: 400;
            }

            input:focus::placeholder {
                color: transparent;
            }

            span {
                border: none;
                border-radius: 4px 0 0 4px !important;
                // background: $Orange;
                color: $White;
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
                    // color: $Orange;
                }

                svg:hover {
                    color: $White;
                }
            }
        }

    }

    #copyright {
        font-size: 12px;
        // font-size: 16px; 
        font-weight: 400;

        @include breakpoints(x-small) {
            font-size: 10px;
        }

        a {
            // color: $Orange !important;
        }
    }

}
</style>
