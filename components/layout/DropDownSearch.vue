<template>
    <div class="relative" @click="selectInputhandler">
        <div 
            id="homePropertyType"
            @click="openMenuHandler"  
            class="flex items-center justify-between w-full h-full p-4 cursor-pointer rounded-xl" 
            :class="classes"
            >
            <More class="w-3 h-3 text-white transition-all duration-300 ltr:ml-2 rtl:mr-2" :class="menu === true ? 'more' : ''"/>
            <p class="inline-block m-0 text-xs text-white uppercase ">{{title}}</p>
            <!-- <div class="flex items-center justify-between p-0 ">
                <p class="text-sm text-white">{{initValue ? initValue : 'اختار بالمدينة'}}</p>
            </div> -->
        </div>

        <!-- filterList -->
        <div 
            v-if="menu"
            id="locationMenu" 
            class="absolute min-w-[200px] px-[10px] py-[10px] left-0 rounded-md z-[10] max-w-md bg-white shadow-md"
            :class="listClass"
            >
            <div class="relative w-full mb-2">
                <input
                    @input="handleInput"
                    class="text-sm bg-transparent focus:outline-none border-[1px] border-slate-200 p-2 pr-7 w-full" 
                    type="text" 
                    :placeholder="placeholder"
                    :autocomplete="false"
                    :value="searchValue"
                />
                <SearchIcon class="absolute w-[17px] h-[17px] top-[10px] right-3"/>
            </div>
            <ul v-if="items" class="overflow-y-auto max-h-[255px] pr-1">
                <li class="p-2 text-[11px] text-gray-400">{{items.length === 0 ? 'No results !': 'Select Property Type...'}} </li>
                <li 
                    @click="getValue(item.id,item.name)"
                    class="p-2 border-b-[1px] text-sm cursor-pointer border-gray-100 transition-all duration-300 hover:bg-gray-200"
                    v-for="item,i in items" :key="i">
                    {{item.name}}
                </li>
                <li id="list1" class="h-1"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
        props: {
        classes: String,
        listClass: {
            type: String,
            default: 'top-[74px]'
            },
        items: {
            default: ()=>[],
            type: Array
        },
        title: String,
        placeholder: String,
        meta: Object
    },
    data() {
        return {
            menu: false,
            clicked: false ,
            initValue: "",
            searchValue:''
        };
    },
    methods: {
        openMenuHandler(){
           this.menu = !this.menu;
        },
        checkIfClickedOutside(e) {
            if (this.menu === true && !document.getElementById("locationMenu").contains(e.target) && !document.getElementById("homePropertyType").contains(e.target)) {
                this.menu = false;
            }
        },
        getValue(value, name) {
            if (this.items.length !== 0) {
                let newLocations = this.items.filter(item => item.id === value);
                this.initValue = newLocations[0].name;
            }
            ;
            this.$emit("getValue", value, name);
            // this.$emit("handleVal", '');
            this.menu = false;
        },
        handleInput(e) {
            let inputValue = e.target.value;
            this.searchValue = inputValue;
            this.$emit("handleVal", inputValue);
        },
        selectInputhandler(){
            this.$emit("selectHandler", 'type')
        }
    },
    computed: {},
    watch: {
        menu() {
            if (this.menu) {
                setTimeout(() => {
                    const location = document.getElementById("list1");
                    const observer = new IntersectionObserver(async (entries) => {
                        if (this.meta.current_page < this.meta.last_page && entries[0].isIntersecting) {
                            let nextPage = this.meta.current_page + 1;
                            this.$emit("getMore", nextPage);
                        }
                    });
                    observer.observe(location);
                }, [100]);
            }
        }
    },
    mounted() {
        document.addEventListener("mousedown", this.checkIfClickedOutside);
    },
    beforeDestroy() {
        window.removeEventListener("mousedown", this.checkIfClickedOutside);
    },
    beforeDestroy() {
        window.removeEventListener("mousedown", this.checkIfClickedOutside);
    }    
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 3px;
  /* height: 2px; */
}

::-webkit-scrollbar-track {
  background-color: rgb(221, 221, 221);
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: #09acb8;
}
::-webkit-scrollbar-thumb:hover {
  background: #007981;
}
.more{
    transform: rotate(-90deg);
}
/* .less{
    transform: rotate(-180deg);
} */

</style>