<template>

    <!-- import navbar in main.js file -->
    <Navbar />

    <!-- Start OurPartner -->
    <OurPartner />
    <!-- End OurPartner -->

    <!-- Start Footer -->
    <Footer />
    <!-- End Footer -->
    
</template>

<script>
import OurPartner from '@/components/our_partner/OurPartner.vue';
export default {
    name: 'OurPartnerView',
    components: {
        OurPartner,
    }
}
</script>

<style lang="scss" scoped></style>