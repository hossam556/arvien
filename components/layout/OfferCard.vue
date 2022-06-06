<template>
  <div class="relative w-full max-w-md transition-all duration-500 bg-white border-2 border-white shadow-md cursor-pointer hover:shadow-xl rounded-xl">
      <img
          class="h-[250px] object-fit w-full rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:opacity-90"
          alt
          :src="service.offer_image"
        />
        <div style="height:calc(100% - 250px)" class="flex flex-col justify-between p-3 text-right bg-red-200">
            <div class="text-right ">
              <p class="py-1 text-lg text-black">{{service.offer_title}}</p>
              <p class="py-1 text-sm text-slate-800">{{service.offer_sub_title}}</p>
            </div>
            <p class="flex items-center justify-end mt-4 text-sm text-black">
              ريال 
              <span class="text-lg">{{service.offer_new_price}}</span> 
              <Money class="w-4 h-4"/>
            </p>
            <button class="flex items-center justify-center w-full py-2 mt-2 text-white rounded-md bg-main-1">
               احجز الان
            </button>
        </div>
  </div>
</template>

<script>
import Money from '../icons/money.vue'
export default {
    props: {
        service: {
            type: Object,
            default: () => {
                return {};
            },
            required: true,
        }
    },
    components: { Money }
}
</script>

<style scoped>
img:hover {
  /* transform: scale(1.02); */
  /* overflow: hidden; */
}

</style>