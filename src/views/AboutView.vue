<template>

  <!-- import navbar in main.js file -->
  <Navbar />

  <!-- Start About -->
  <About />
  <!-- End About -->

  <!-- Start Vision -->
  <Vision />
  <!-- End Vision -->

  <!-- Start Footer -->
  <Footer />
  <!-- End Footer -->
  
</template>

<script>
import About from '@/components/about/About.vue';
import Vision from '@/components/about/Vision.vue';
export default {
  name: 'AboutView',
  components: {
    About,
    Vision,
  }
}
</script>

<style lang="scss" scoped></style>