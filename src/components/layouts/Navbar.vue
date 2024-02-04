<template>
    <!-- https://www.youtube.com/watch?v=zOtxP7ahi4M -->

    <!-- Navbar -->

    <nav class="navbar navbar-expand-lg fixed-top w-100 pt-2 pb-2">

        <div class="container">

            <!-- Logo -->
            <!-- https://stackoverflow.com/questions/64959956/vue-js-how-to-change-image-src-on-scroll -->
            <!-- https://laracasts.com/discuss/channels/javascript/bootstrap-navbar-changing-logo-on-scroll -->
            <!-- https://www.youtube.com/watch?v=hSbLKHjZrYU -->
            <router-link to="/" class="navbar-brand p-0">
                <img :src="isDefaultImage ? defaultImg : alternativeImg" alt="ThakaaHoldingLogo"/>
            </router-link>

            <!-- Toggle Button -->
            <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <font-awesome-icon :icon="['fas', 'fa-bars']" />
            </button>

            <!-- Sidebar -->
            <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">

                <!-- Sidebar Header -->
                <div class="offcanvas-header border-bottom">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                        <img src="@/assets/images/navbar/logo_white.webp" alt="ThakaaHoldingLogo" />
                    </h5>
                    <!-- btn-close -->
                    <button type="button" class="shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close">
                        <font-awesome-icon :icon="['fas', 'fa-xmark']" />
                    </button>
                </div>

                <!-- Sidebar Body -->
                <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">

                    <ul class="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">

                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page"
                                exact>الرئيسية</router-link>
                        </li>

                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'about' }" class="nav-link">من نحن</router-link>
                        </li>

                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'story' }" class="nav-link">قصتنا</router-link>
                        </li>

                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'partner' }" class="nav-link">الشركات التابعة</router-link>
                        </li>

                        <li class="nav-item mx-2">
                            <router-link :to="{ name: 'news' }" class="nav-link">الأخبار</router-link>
                        </li>

                    </ul>

                    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                        <router-link :to="{ name: '' }" class="btn rounded border-0 ms-0 ms-lg-4 mb-4 mb-lg-0">
                            <span>EN</span>
                            <font-awesome-icon :icon="['fas', 'fa-earth-europe']" class="me-2" />
                        </router-link>
                        <!-- mt-2 mt-lg-0 -->
                        <router-link :to="{ name: 'contact-us' }" class="btn rounded border-0">
                            <span>اتصل بنا</span>
                            <font-awesome-icon :icon="['fas', 'fa-phone']" class="me-2" />
                        </router-link>
                    </div>

                </div>

            </div>

            <!-- End Sidebar -->

        </div>

        <!-- End Container wrapper -->

    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isDefaultImage: true,
            defaultImg: require('../../assets/images/navbar/logo_white.webp'),
            alternativeImg: require('../../assets/images/navbar/logo_dark.webp'),
        };
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            // Any code to be executed when the window is scrolled
            // console.log(window.scrollY);
            if (window.scrollY > 100) {
                document.querySelector('nav').style.backgroundColor = "#071E2B";
                return (this.isDefaultImage = false);
            }
            if (window.scrollY <= 100) {
                if (!this.defaultImage) {
                    document.querySelector('nav').style.backgroundColor = "transparent";
                    return (this.isDefaultImage = true);
                }
            }
        },
    },
}
</script>

<style scoped lang="scss">
nav {

    background: transparent;
    height: 72px;

    .container {

        .navbar-brand {
            img {
                width: 110.741px;
                height: 56px;
            }
        }

        .navbar-toggler {
            svg {
                color: $Primary;
                width: 24px;
                height: 24px;
            }
        }

        .offcanvas {

            @include breakpoints(x-small) {
                background-color: $Black;
                // backdrop-filter: blur(10px);
            }

            @include breakpoints(small) {
                background-color: $Black;
                // backdrop-filter: blur(10px);
            }

            @include breakpoints(medium) {
                background-color: $Black;
                // backdrop-filter: blur(10px);
            }

            .offcanvas-header {

                h5 {
                    img {
                        width: 110.741px;
                        height: 56px;
                    }
                }

                button {
                    background: none;
                    color: $Primary;
                    font-size: 24px;
                }

            }

            .offcanvas-body {

                ul {

                    li {

                        @include breakpoints(x-small) {
                            width: 100%;
                            // border-bottom: 1px solid $Gry;
                        }

                        @include breakpoints(small) {
                            width: 100%;
                            // border-bottom: 1px solid $Gry;
                        }

                        @include breakpoints(medium) {
                            width: 100%;
                            // border-bottom: 1px solid $Gry;
                        }

                        a {
                            color: $White;
                            // font-family:'FFShamelFamily-Bold';
                            font-size: 18px;
                            font-style: normal;
                            font-weight: 400;
                            // text-align: right;
                            line-height: 156%;

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

                        a:hover,
                        a.router-link-exact-active {
                            color: $Primary;
                        }

                    }

                }

                div {

                    a {
                        padding: 6px 8px;
                        background-color: $Primary;
                        // box-shadow: 0px 4px 4px 0px $Box-Shadow;
                        box-shadow: 0px 2px 2px 0px $Box-Shadow;
                        color: $White;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 180%;

                        svg {
                            font-size: 24px;
                            vertical-align: middle;
                        }
                    }

                    a:hover,
                    a.router-link-exact-active {
                        background: $Linear-Blue;
                        background-clip: padding-box;
                        -webkit-background-clip: padding-box;
                        -webkit-text-fill-color: $White;
                        transition: background 1s ease-in;
                    }

                }

            }

        }

    }

}
</style>