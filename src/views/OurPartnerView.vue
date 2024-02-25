<template>

    <!-- import navbar in main.js file -->
    <Navbar />

    <!-- Start OurPartner -->
    <OurPartner />
    <!-- End OurPartner -->

    <!-- Start Kudratek -->
    <Kudratek />
    <!-- End Kudratek -->

    <!-- Start Robotera -->
    <Robotera />
    <!-- End Robotera -->

    <!-- Start Footer -->
    <Footer />
    <!-- End Footer -->
    
</template>

<script>
import OurPartner from '@/components/our_partner/OurPartner.vue';
import Kudratek from '@/components/our_partner/Kudratek.vue';
import Robotera from '@/components/our_partner/Robotera.vue';
export default {
    name: 'OurPartnerView',
    components: {
        OurPartner,
        Kudratek,
        Robotera,
    }
}
</script>

<style lang="scss" scoped></style>