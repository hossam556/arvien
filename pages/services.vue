<template>
  <div class="px-12 py-8">
    <div class=" border-[2px] bg-white rounded-md shadow-lg border-slate-100 mt-2">
      <h1 class="p-4 text-lg font-semibold text-right text-slate-700 border-b-[2px] border-slate-100">تصنيفات العروض</h1>
      <div class="flex flex-row-reverse flex-wrap items-center justify-start w-full gap-2 px-4 py-6">
          <button 
            v-for="offer in OffersFilters"
            :key="offer.label"
            @click="offersTabHandler(offer.label)"
            class="flex items-center  justify-center px-4 py-3  text-sm font-medium uppercase transition-all duration-300 ease-out  border-[3px] rounded-full shadow-sm  hover:border-white hover:bg-main-1 hover:text-white"
            :class="offersTab === offer.label ? 'bg-main-1 text-white border-white' : 'bg-white text-main-1 border-main-1'">
            {{offer.name}}
          </button>
      </div>
      <div class="flex flex-row-reverse border-t-[2px] border-slate-300 flex-wrap items-center justify-start w-full gap-2 p-4 absolute right-[110%]" :class="offersTab ? 'subOffers':'' ">
        <button 
            @click="offersTabHandler('الكل')"
            class="flex items-center  justify-center px-4 py-3  text-sm font-medium uppercase transition-all duration-300 ease-out  border-[3px] rounded-full shadow-sm  hover:border-white hover:bg-main-1 hover:text-white"
            :class="offersTab === 'الكل' ? 'bg-main-1 text-white border-white' : 'bg-white text-main-1 border-main-1'">
            الكل
        </button>
      </div>
    </div>

    <!-- search section -->
    <section class="flex flex-row-reverse items-center justify-between gap-3 mt-8 overflow-hidden text-right rounded-xl">
        <div class="relative flex flex-row-reverse justify-between bg-white border-[1px] border-slate-100 shadow-xl overflow-hidden rounded-xl w-[30%]">
            <div class="flex flex-col justify-between px-4 py-2">

             <p class="text-xs text-gray-400 uppercase">العروض</p>
             <input 
              dir="rtl"
              @input="handleInput"
              class="text-sm bg-transparent focus:outline-none" 
              type="text" 
              placeholder="ابحث عن عروض"
              :autocomplete="false"
              />
            </div>
            <div class="flex items-center justify-center min-h-full px-4 bg-main-1">

              <SearchIcon class="w-6 h-6 text-white"/>
            </div>
        </div>
        <!-- <div class="relative flex justify-between flex-[0.15] p-4 bg-white rounded-xl">
            <p class="text-xs text-gray-400 uppercase">تصفية بالمدينة</p>
        </div>
         <div class="relative flex flex-col justify-between flex-[0.15] p-4 bg-white rounded-xl">
            <p class="text-xs text-gray-400 uppercase">العروض</p>
            <p class="text-xs text-gray-400 uppercase">بحث عن العرو</p>
        </div>
         <div class="relative flex flex-col justify-between flex-[0.15] p-4 bg-white rounded-xl">
            <p class="text-xs text-gray-400 uppercase">العروض</p>
            <p class="text-xs text-gray-400 uppercase">بحث عن العرو</p>
        </div> -->
        <DropDownSearch
          class="rounded-md bg-main-1 min-w-[200px]"
          @handleVal="handleTypeInput"
          @getValue="getTypeValue"
          :items="OffersFilters"
          @getMore="getMoreTypeItems"
          @selectHandler="selectInputhandler"
          :meta="{}"
          title="تصفية بالمدينة"
          placeholder="اختار المدينة"
        />
        <DropDownSearch
          class="rounded-md bg-main-1 min-w-[200px]"
          @handleVal="handleTypeInput"
          @getValue="getTypeValue"
          :items="OffersFilters"
          @getMore="getMoreTypeItems"
          @selectHandler="selectInputhandler"
          :meta="{}"
          title="تصفية بالتأمين"
          placeholder="اختار التأمين"
        />
        <DropDownSearch
          class="rounded-md bg-main-1 min-w-[200px]"
          @handleVal="handleTypeInput"
          @getValue="getTypeValue"
          :items="OffersFilters"
          @getMore="getMoreTypeItems"
          @selectHandler="selectInputhandler"
          :meta="{}"
          title="تصفية بالمدينة"
          placeholder="اختار المدينة"
        />
        <button
            @click="offersTabHandler('الكل')"
            class="flex items-center  justify-center px-4 py-3 bg-red-500 text-white border-white text-sm font-medium uppercase transition-all duration-300 ease-out  border-[3px] rounded-full shadow-sm  hover:border-red-500 hover:bg-white hover:text-red-500">
            الغاء جميع الفلاتلر
        </button>
    </section>

    <section class="grid grid-cols-4 gap-6 mt-10">
        <OfferCard v-for="service in services" :key="service.id" :service="service"/>
    </section>
  </div>
</template>

<script>
import {data} from '../utils/filters/OffersFilters'
import SearchIcon from '../components/icons/SearchIcon.vue';
import DropDownSearch from '../components/layout/DropDownSearch.vue'
import OfferCard from '../components/layout/OfferCard.vue'
export default {
    components:{DropDownSearch , OfferCard},
    data() {
        return {
            OffersFilters: data,
            offersTab: "",
            inputValue: "",
            selectedInput:'',
            filters: {}
        };
    },
    async fetch() { 
      await this.$store.dispatch("services/getItems");
   },
    computed: {
    services() {
      return this.$store.state.services.services;
    },
  },
    methods: {
        offersTabHandler(val) {
            this.offersTab = val;

            let offerTab ={
            offerTab: {
              id: "offerTab",
              key: "filter[stage.id]",
              values: val,
            },
            }

            this.filters = { ...this.filters, ...LeadFilterStage };
        },
        handleInput(e) {
            // this.inputValue = e.target.value;
            let inputValue ={
              inputValue: {
              id: "offerTab",
              key: "filter[stage.id]",
              values:  e.target.value,
            },
            }

            this.filters = { ...this.filters, ...inputValue };
        },

    selectInputhandler(val) {
      this.selectedInput = val;
    },
    async handleTypeInput(value) {
    //   await this.$store.dispatch("global/filter", value);
    },
    getTypeValue(value, name) {
    //   this.propertyTypeId = value;
    //   this.propertyType = name;
    },
    async getMoreTypeItems(val) {
    //   await this.$store.dispatch("global/getMoreItems", val);
    },

    async applyFilters() {
      //generate filter link
      let filterLink = "";
      for (const key in this.filters) {
        filterLink =
          filterLink + `${this.filters[key].key}=${this.filters[key].values}&`;
      }
      filterLink = filterLink.slice(0, -1);
      
    //   this.$store.commit("global/filterLink", filterLink);
    //   this.$store.commit("global/loadHandler", true);
    //   await this.$store.dispatch("leads/leads/getLeads");
    //   this.$store.commit("global/loadHandler", false);
    },
    },
    components: { SearchIcon }
}
</script>

<style scoped>
.subOffers{
    /* position: absolute; */
    animation: subOffer 1.5s forwards ease-in;
    /* right: 110%; */
}
@keyframes subOffer{
    0%{
        position: absolute;
        right: 110%;
    }
    1%{
        position: relative;
    }
    100%{
       position: relative;
       right: 0px;
    }
}

</style>