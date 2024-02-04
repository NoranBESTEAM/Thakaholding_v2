<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/story">Story</router-link> |
    <router-link to="/partner">Partner</router-link> |
    <router-link to="/news">News</router-link> |
    <router-link to="/contact-us">Contact Us</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'FFShamelFamily-Normal', 'FFShamelFamily-Bold', Arial , sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: rtl;
}

#app a{
  text-decoration: none;
}
</style>
