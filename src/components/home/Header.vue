<template>
    <header class="w-100">

        <div id="img_wrapper">
            <img src="@/assets/images/home/shape.webp" alt="">
        </div>

        <div id="layer">
            <!-- https://mdbootstrap.com/docs/standard/navigation/headers/ -->
            <div class="d-flex justify-content-center align-items-center h-100">
                <div id="content_wrapper">
                    <h1 class="text-center m-sm-0">شغفنا التقنية</h1>
                    <h1 class="text-center m-sm-0">استثمارنا المستقبل</h1>
                    <div class="text-center mt-4">
                        <router-link :to="{ name: 'about' }" class="btn rounded border-0">
                            من نحن
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
header {

    // height: 700px;
    height: 100vh;

    // https://www.w3schools.com/cssref/pr_background-image.php
    // https://www.w3schools.com/css/css3_backgrounds.asp

    /* The image used */
    background-image: url("@/assets/images/home/headerBG.webp");
    /* Used if the image is unavailable */
    // background-color: $Gry;
    /* Center the image */
    background-position: center;
    /* Do not repeat the image */
    background-repeat: no-repeat;
    /* Resize the background image to cover the entire container */
    background-size: cover;
    position: relative;

    #img_wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 500px;
        height: 382px;
        z-index: 1;
        opacity: 0.2;

        @include breakpoints(x-small) {
            /* width: 300px;
            height: 229px; */
            display: none;
        }

        @include breakpoints(small) {
            width: 400px;
            height: 306px;
        }

        @include breakpoints(medium) {
            width: 400px;
            height: 306px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    // https://stackoverflow.com/questions/9182978/semi-transparent-color-layer-over-background-image
    #layer {
        background-image: $Header-BG;
        opacity: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        #content_wrapper {

            display: grid;

            h1 {
                font-family: 'FFShamelFamily-Bold';
                color: $Light-Primary;
                font-size: 40px;
                font-style: normal;
                font-weight: 400;
                line-height: 100px;

                @include breakpoints(x-small) {
                    font-size: 32px;
                    line-height: 180%;
                    margin-bottom: 0;
                }

            }

            a {
                background-color: $White;
                padding: 3px 16px;
                font-family: 'FFShamelFamily-Bold';
                color: $Primary;
                font-size: 18px;
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
    }
}
</style>