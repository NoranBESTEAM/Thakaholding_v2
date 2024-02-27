<template>
    <!-- import navbar in main.js file -->
    <Navbar id="newsNavbar"/>

    <!-- Start OurNews -->
    <OurNews />
    <!-- End OurNews -->

    <!-- Start Footer -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import OurNews from '@/components/our_news/OurNews.vue';
export default {
    name: 'OurNewsView',
    components: {
        OurNews,
    }
}
</script>

<style lang="scss" scoped>
#newsNavbar{
    background-color: $Black !important;
}
</style>