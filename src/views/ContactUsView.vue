<template>
    <!-- import navbar in main.js file -->
    <NavbarGeneral />

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
    },
    created() {
        this.$store.commit("setPage", "contact-us");
    },
}
</script>

<style scoped lang="scss"></style>