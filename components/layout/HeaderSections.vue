<template>
        <nav class="z-50 hidden space-x-10 md:flex">
          <div 
            class="relative flex flex-row-reverse items-center"
            :class="show === true  ? 'text-gray-500' :'text-white' "
            >

            <div 
              class="mx-3"
             >
              <NuxtLink
                exact
                to='/'
                class="text-base font-medium capitalize title "
              >الرئيسية</NuxtLink>
                <div class="titleBorder relative top-[-26px]"></div>
            </div>
            

            <div class="mx-3">
              <NuxtLink
                exact
                to='/services'
                class="text-base font-medium capitalize title "
              >العروض</NuxtLink>
                <div class="titleBorder relative top-[-26px]"></div>
            </div>

            <div class="mx-3">
              <NuxtLink
              exact
               to='/b'
                class="text-base font-medium capitalize title "
              >
              الاطباء</NuxtLink>
              <div class="titleBorder relative top-[-26px]"></div>
            </div>

            <div class="mx-3">
              <NuxtLink
                to='/c'
                class="text-base font-medium capitalize title "
              >العيادات</NuxtLink>
              <div class="titleBorder relative top-[-26px]"></div>
            </div>

            <div class="mx-3">
              <NuxtLink
                to='/d'
                class="text-base font-medium capitalize title "
              >المستشفيات الجامعية</NuxtLink>
                <div class="titleBorder relative top-[-26px]"></div>
            </div>

            <div class="mx-3">
              <NuxtLink
               to='/f'
                class="text-base font-medium capitalize title "
              >نبذة عنا</NuxtLink>
                <div class="titleBorder relative top-[-26px]"></div>
            </div>

            <div class="mx-3">
              <NuxtLink
               to='/g'
                class="text-base font-medium capitalize title "
              >اتصل بنا</NuxtLink>
                <div class="titleBorder relative top-[-26px]"></div>
            </div>

          </div>
        </nav>
</template>

<script>
export default {
    name: "HeaderSections",
    props:{
      show : Boolean
    }
}
</script>

<style scoped>
/* .nuxt-link-exact-active {
    @apply text-main-3
} */
.nuxt-link-active {
   @apply text-main-2
}
.nuxt-link-exact-active{
 @apply text-main-2
}
.titleBorder{
  height: 2px;
  width: 0px;
  transition-duration: 0.3s;
}
.title:hover ~ .titleBorder{
  @apply bg-main-1 w-full
} 
.nuxt-link-exact-active ~ .titleBorder{
  @apply bg-main-1 w-full
} 
</style>