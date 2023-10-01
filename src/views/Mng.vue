
<template>
    <div id="page">
        <!-- HEAD -->
        <MngHead />
        <!-- SEARCH & Filter -->
            <Search/>
        <!-- DATA -->
        <div class="flex flex-col lg:flex-row gap-[30px] justify-between">
            <!-- LIST -->
            <List />
            <!-- INFO -->
            <div class="bg-white flex-grow basis-1/2 drop-shadow-light w-full px-9 pt-20 pb-14 font-semibold relative rounded-main">
                <img width="30" height="30" src="@/assets/icons/close.svg" class="absolute top-[17px] left-[20px]" alt="close"/>
                <div class="form mb-12">
                    <div class="grid grid-cols-2 mb-3 gap-4">
                        <div class="text-alt">الاسم (عربي)</div>
                        <div>فرع الرياض</div>
                    </div>
                    <div class="grid grid-cols-2 mb-3 gap-4">
                        <div class="text-alt">اسم المسؤول</div>
                        <div>محمد</div>
                    </div>
                    <div class="grid grid-cols-2 mb-3 gap-4">
                        <div class="text-alt">رقم هاتف المسؤول</div>
                        <div>0123456789</div>
                    </div>
                    <div class="grid grid-cols-2 mb-3 gap-4">
                        <div class="text-alt">البريد الالكتروني</div>
                        <div>m@gmail.com</div>
                    </div>
                </div>
                <div class="border-b"></div><div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import InputC from '../components/elements/InputC.vue';
import SelectC from '../components/elements/SelectC.vue';
import MngHead from '../components/mng/MngHead.vue';
import Search from '../components/mng/Search.vue';


export default{
    components: { SelectC, InputC, MngHead, Search }
}
</script>