<template>

  <!-- import navbar in main.js file -->
  <Navbar />

  <!-- Start About -->
  <About />
  <!-- End About -->

  <!-- Start Footer -->
  <Footer />
  <!-- End Footer -->
  
</template>

<script>
import About from '@/components/about/About.vue';
export default {
  name: 'AboutView',
  components: {
    About,
  }
}
</script>

<style lang="scss" scoped></style>