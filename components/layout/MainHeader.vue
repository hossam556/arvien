<template>
  <section
    class="fixed parent top-0 left-0 z-[22] w-full transition-all duration-400 px-12"
    :class="[show === true ? 'headerScroll' : '']"
  >
    <div class="flex items-center justify-between py-5 mx-auto">
      <div class="items-center justify-end hidden md:flex">
        <button
          @click="$router.push('/login')"
          class="flex items-center justify-center px-7 py-2 mr-6 text-sm font-medium uppercase transition-all duration-300 ease-out bg-main-1 border-[1px] border-transparent rounded-full shadow-sm text-white hover:border-main-1 hover:bg-white hover:text-main-1"
        >دخول</button>
        <HeaderSections :show="true" />
      </div>

      <img src="../../assets/imgs/arv.png" class="w-36 object-fit " alt="Logo">
      <!-- burger menu -->
      <!-- <div
        @click="$store.commit('global/openNav')"
        class="z-10 block py-1 cursor-pointer md:hidden hover:opacity-60"
      >
        <div class="w-7 h-[2.5px] bg-black" :class="isOpen ? 'menuTop' : ''"></div>
        <div class="w-7 h-[2px] bg-black my-1" :class="isOpen ? 'hidden' : ''"></div>
        <div class="w-7 h-[2.5px] bg-black" :class="isOpen ? 'menuBottom' : ''"></div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      show: false,
      tab: "resale",
    };
  },
  computed: {
    isOpen() {
      return this.$store.state.global.navbar;
    },
  },
  methods: {
    gotValue() {},
    navShowHandler() {
      if (window.scrollY > 50) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.navShowHandler);
    if (window.scrollY > 50) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.navShowHandler);
  },
  components: { },
};
</script>

<style scoped>
.parent{
    --tw-bg-opacity: 1;
  background-color: rgb(247 248 250 / var(--tw-bg-opacity));
}
img{
  mix-blend-mode: multiply;
}
.tooltip:before {
  @apply bg-slate-800 text-slate-50;
}
.tooltip:after {
  @apply border-0;
}
.inputScroll {
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%) !important;
  border: 0.5px solid rgb(156, 154, 154, 0.2);
}
.headerScroll {
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%) !important;
}
.appearedInput {
  animation: appearedInput 0.3s forwards;
  opacity: 0;
  position: relative;
}
@keyframes appearedInput {
  0% {
    top: -50px;
    opacity: 0;
  }
  80% {
    top: 0px;
    opacity: 1;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
.titleBorder {
  height: 2px;
  width: 0px;
  transition-duration: 0.5s;
}
.title:hover ~ .titleBorder {
  background: #1d9db1;
  width: 100%;
}
.menuTop {
  transition: all 0.5s;
  transform: rotate(-50deg);
}
.menuBottom {
  transition: all 0.5s;
  transform: rotate(50deg);
}
</style>