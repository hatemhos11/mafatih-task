
<template>
    <div id="page">
        <!-- HEAD -->
        <MngHead />
        <!-- SEARCH & Filter -->
            <Search/>
        <!-- DATA -->
        <Loader  v-if="isLoading" />
        <div class="flex flex-col lg:flex-row gap-[30px] justify-between" v-if="!isLoading">
            <!-- LIST -->
            <List :data="listData" @change-active="changeActive" :activeID="activeID" />
            <!-- INFO -->
            <div class="bg-white flex-grow basis-1/2 drop-shadow-light w-full px-9 pt-20 pb-14 font-semibold relative rounded-main">
                <img width="30" height="30" src="@/assets/icons/close.svg" class="absolute top-[17px] left-[20px]" alt="close"/>
                <div class="form mb-12">
                    <div class="grid grid-cols-2 mb-3 gap-4">
                        <div class="text-alt">الاسم (عربي)</div>
                        <div>{{info?.name_ar}}</div>
                    </div>
                    <div class="grid grid-cols-2 mb-3 gap-4">
                        <div class="text-alt">اسم المسؤول</div>
                        <div>{{info?.name}}</div>
                    </div>
                    <div class="grid grid-cols-2 mb-3 gap-4">
                        <div class="text-alt">رقم هاتف المسؤول</div>
                        <div>{{info?.phone}}</div>
                    </div>
                    <div class="grid grid-cols-2 mb-3 gap-4">
                        <div class="text-alt">البريد الالكتروني</div>
                        <div>{{info?.email}}</div>
                    </div>
                </div>
                <div class="border-b"></div>
            </div>
        </div>
    </div>
</template>

<script>
import InputC from '../components/elements/InputC.vue';
import SelectC from '../components/elements/SelectC.vue';
import MngHead from '../components/mng/MngHead.vue';
import Search from '../components/mng/Search.vue';
import List from '../components/mng/List.vue';
import Loader from '../layout/Loader.vue';

export default{
    components: { SelectC, InputC, MngHead, Search, List, Loader },
    data(){
        return{
            listData: [],
            isLoading: true,
            activeID: null,
            info: {}
        }
    },
    methods:{
        changeActive(id){
            this.activeID = id
            this.info = this.listData.find(x=>x.id === id)?.info
        },
        // simulate api funtionality
        async getAllData(){
            return new Promise((resolve, reject) => {
                this.isLoading = true
                setTimeout(()=>{
                    this.isLoading = false
                    return resolve([
                        {id: 1, name: 'مصطفى محمد1', branch: 'فرع رئيسي', city: 'الرياض', info: {name_ar: 'فرع الرياض', name: 'محمد', phone: '0123456789', email: 'm@gmail.com'}},
                        {id: 2, name: 'مصطفى محمد2', branch: 'فرع فرعي', city: 'الدمام', info: {name_ar: 'فرع الدمام', name: 'خالد', phone: '0123456789', email: 'k@gmail.com'}},
                        {id: 3, name: 'مصطفى محمد3', branch: 'فرع رئيسي', city: 'الشارقة', info: {name_ar: 'فرع الشارقة', name: 'سعيد', phone: '0123456789', email: 'S@gmail.com'}},
                        {id: 4, name: 'مصطفى محمد4', branch: 'فرع فرعي', city: 'دبي', info: {name_ar: 'فرع دبي', name: 'ابراهيم', phone: '0123456789', email: 'E@gmail.com'}},
                        {id: 5, name: 'مصطفى محمد5', branch: 'فرع رئيسي', city: 'الرياض', info: {name_ar: 'فرع الرياض', name: 'محمد', phone: '0123456789', email: 'm@gmail.com'}},
                    ])
                }
                , Math.random() * 1000)
            })
        }
    },
    async mounted(){
        await this.getAllData().then((data)=>{
            this.listData = data
        })
    },

}
</script>