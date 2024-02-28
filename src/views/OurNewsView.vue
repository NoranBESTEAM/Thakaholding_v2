<template>
    <!-- import navbar in main.js file -->
    <Navbar />

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
    },
    created() {
        this.$store.commit("setPage", "our-news");
    },
}
</script>

<style lang="scss" scoped></style>