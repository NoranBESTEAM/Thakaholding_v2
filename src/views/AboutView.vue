<template>

  <!-- import navbar in main.js file -->
  <NavbarGeneral />

  <!-- Start About -->
  <About />
  <!-- End About -->

  <!-- Start Vision -->
  <Vision />
  <!-- End Vision -->

  <!-- Start Valuable -->
  <Valuable />
  <!-- End Valuable -->

  <!-- Start Footer -->
  <Footer />
  <!-- End Footer -->
  
</template>

<script>
import About from '@/components/about/About.vue';
import Vision from '@/components/about/Vision.vue';
import Valuable from '@/components/about/Valuable.vue';
export default {
  name: 'AboutView',
  components: {
    About,
    Vision,
    Valuable,
  }
}
</script>

<style lang="scss" scoped></style>