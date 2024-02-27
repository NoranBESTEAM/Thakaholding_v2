<template>
    <!-- import navbar in main.js file -->
    <Navbar id="storyNavbar" />

    <!-- Start OurStory -->
    <OurStory />
    <!-- End OurStory -->

    <!-- Start Footer -->
    <Footer id="storyFooter" />
    <!-- End Footer -->
</template>

<script>
import OurStory from '@/components/our_story/OurStory.vue';
export default {
    name: 'OurStoryView',
    components: {
        OurStory,
    }
}
</script>

<style lang="scss" scoped>

#storyNavbar {

    background-color: $Black !important;

}

#storyFooter {

    @media only screen and (min-width: 992px){
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }

}

</style>