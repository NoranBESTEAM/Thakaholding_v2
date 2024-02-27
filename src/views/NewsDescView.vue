<template>

<!-- import navbar in main.js file -->
<Navbar id="newsNavbar"/>

<!-- Start NewsDesc -->
<NewsDesc />
    <!-- End NewsDesc -->

<!-- Start Footer -->
<Footer />
<!-- End Footer -->

</template>

<script>
import NewsDesc from '@/components/news_desc/NewsDesc.vue';
export default {
    name: 'NewsDescView',
    components: {
        NewsDesc,
    },
    created() {
        this.$store.commit("setPage", "news-desc");
    },
}
</script>

<style lang="scss" scoped>
#newsNavbar{
    background-color: $Black !important;
}
</style>