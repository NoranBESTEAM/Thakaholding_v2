<template>
    <!-- import navbar in main.js file -->
    <Navbar id="contactNavbar" />

    <!-- Start ContactUs -->
    <ContactUs />
    <!-- End ContactUs -->

    <!-- Start Footer -->
    <Footer />
    <!-- End Footer -->
</template>

<script>
import ContactUs from '@/components/contact_us/ContactUs.vue';
export default {
    name: 'ContactUsView',
    components: {
        ContactUs,
    }
}
</script>

<style scoped lang="scss">
#contactNavbar {

    background-color: $Black !important;

}
</style>