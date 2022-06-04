<template>
  <main class="">
    <div class="h-24">
      <MainHeader />
    </div>
    <!-- <MobileNav /> -->
    <div class="min-h-[73.1vh]">
      <nuxt />
    </div>
    <MainFooter />
    <!-- <ScrollTopButton @scrollTop="scrolTopHandler" :show="show" /> -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed:{
    // succeed(){
    //     return this.$store.state.global.succeed
    // },
  },
  methods: {
    // scrolTopHandler() {
    //   window.scroll({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // },
    // topShowHandler() {
    //   if (window.scrollY > 300) {
    //     this.show = true;
    //   } else {
    //     this.show = false;
    //   }
    // },
  },
//   mounted() {
//     window.addEventListener("scroll", this.topShowHandler);
//   },
//   beforeDestroy() {
//     window.removeEventListener("scroll", this.topShowHandler);
   
//   },
};
</script>

<style>
</style>