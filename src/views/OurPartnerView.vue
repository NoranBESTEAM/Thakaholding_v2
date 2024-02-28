<template>

    <!-- import navbar in main.js file -->
    <NavbarGeneral />

    <!-- Start OurPartner -->
    <OurPartner />
    <!-- End OurPartner -->

    <!-- Start Kudratek -->
    <Kudratek />
    <!-- End Kudratek -->

    <!-- Start Robotera -->
    <Robotera />
    <!-- End Robotera -->

    <!-- Start InformationTechnology -->
    <InformationTechnology />
    <!-- End InformationTechnology -->

    <!-- Start BusinessIncubators -->
    <BusinessIncubators />
    <!-- End BusinessIncubators -->

    <!-- Start ThakaInternational -->
    <ThakaInternational />
    <!-- End ThakaInternational -->

    <!-- Start Footer -->
    <Footer />
    <!-- End Footer -->
    
</template>

<script>
import OurPartner from '@/components/our_partner/OurPartner.vue';
import Kudratek from '@/components/our_partner/Kudratek.vue';
import Robotera from '@/components/our_partner/Robotera.vue';
import InformationTechnology from '@/components/our_partner/InformationTechnology.vue';
import BusinessIncubators from '@/components/our_partner/BusinessIncubators.vue';
import ThakaInternational from '@/components/our_partner/ThakaInternational.vue';
export default {
    name: 'OurPartnerView',
    components: {
        OurPartner,
        Kudratek,
        Robotera,
        InformationTechnology,
        BusinessIncubators,
        ThakaInternational,
    }
}
</script>

<style lang="scss" scoped></style>