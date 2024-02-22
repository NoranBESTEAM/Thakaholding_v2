<template>
    <!-- import navbar in main.js file -->
    <Navbar />

    <!-- Start OurStory -->
    <OurStory />
    <!-- End OurStory -->

    <!-- Start Footer -->
    <Footer />
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

<style lang="scss" scoped></style>