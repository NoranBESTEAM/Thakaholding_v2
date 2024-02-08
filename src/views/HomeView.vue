<template>
  <!-- Start Header -->
  <Header />
  <!-- End Header -->
  <!-- Start Story -->
  <Story />
  <!-- End Story -->
  <!-- Start Partner -->
  <Partner />
  <!-- End Partner -->
  <!-- Start Overview -->
  <Overview />
  <!-- End Overview -->
  <!-- Start Associate -->
  <Associate />
  <!-- End Associate -->
  <!-- Start Footer -->
  <Footer />
  <!-- End Footer -->
</template>

<script>
import Header from '@/components/home/Header.vue';
import Story from '@/components/home/Story.vue';
import Partner from '@/components/home/Partner.vue';
import Overview from '@/components/home/Overview.vue';
import Associate from '@/components/home/Associate.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
    Story,
    Partner,
    Overview,
    Associate,
  }
}
</script>

<style lang="scss" scoped></style>
