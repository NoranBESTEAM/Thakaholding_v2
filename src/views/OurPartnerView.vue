<template>

    <!-- import navbar in main.js file -->
    <Navbar />

    <!-- Start OurPartner -->
    <OurPartner />
    <!-- End OurPartner -->

    <!-- Start Kudratek -->
    <Kudratek />
    <!-- End Kudratek -->

    <!-- Start Footer -->
    <Footer />
    <!-- End Footer -->
    
</template>

<script>
import OurPartner from '@/components/our_partner/OurPartner.vue';
import Kudratek from '@/components/our_partner/Kudratek.vue';
export default {
    name: 'OurPartnerView',
    components: {
        OurPartner,
        Kudratek,
    }
}
</script>

<style lang="scss" scoped></style>