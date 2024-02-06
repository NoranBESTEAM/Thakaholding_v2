<template>
  <!-- Start Header -->
  <Header />
  <!-- End Header -->
  <!-- Start Story -->
  <Story />
  <!-- End Story -->
  <!-- Start Footer -->
  <Footer />
  <!-- End Footer -->
</template>

<script>
import Header from '@/components/home/Header.vue';
import Story from '@/components/home/Story.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
    Story,
  }
}
</script>

<style lang="scss" scoped></style>
