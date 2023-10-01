
<template>
    <div id="page">
        <!-- HEAD -->
        <MngHead />
        <!-- SEARCH -->
        <div class="rounded-main drop-shadow-light bg-white px-6 py-5 mb-12">
            <div class="first-line flex items-center gap-6 mb-10">
                <div class="search flex items-center gap-[14px] ">
                    <img src="@/assets/icons/search.svg" alt="search">
                    <InputC inputClass="bg-white" placeholder="الاسم او جزء منه..."/>
                </div>
                <div class="buttons flex gap-4">
                    <button class="btn btn-fill font-bold">بحث</button>
                    <button class="btn btn-fill font-bold">إعادة ضبط</button>
                </div>
            </div>
            <div class="flex gap-x-4 flex-wrap ">
                <SelectC >
                    <option value="" disabled>النوع</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </SelectC>
                <SelectC >
                    <option value="" disabled>المدينة</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </SelectC>
                <SelectC >
                    <option value="" disabled>الحي</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </SelectC>
            </div>
        </div>
        <!-- DATA -->
        <div class="flex flex-col lg:flex-row gap-[30px] justify-between">
            <!-- LIST -->
            <div>
                <div class="flex items-center gap-[30px] lg:justify-start justify-around w-full lg:w-fit py-2 px-[14px] mb-7 rounded-main text-white font-semibold bg-main drop-shadow-[0_3px_6px_rgba(209,176,83,.6)]">
                    <img width="50" height="50" src="@/assets/icons/maps.svg" alt="maps">
                    <h4>مصطفى محمد</h4>
                    <h4>فرع رئيسي</h4>
                    <h4>الرياض</h4>
                    <img width="20" height="20" class="rotate-90" src="@/assets/icons/bottom-arrow-colored.svg" alt="arrow">

                </div>
                <div class="flex items-center gap-[30px] w-full lg:w-fit py-2 px-[14px] mb-7 rounded-main text-alt font-semibold bg-white drop-shadow-light">
                    <img width="50" height="50" src="@/assets/icons/maps.svg" alt="maps">
                    <h4>مصطفى محمد</h4>
                    <h4>فرع رئيسي</h4>
                    <h4>الرياض</h4>
                    <img width="20" height="20" class="rotate-90" src="@/assets/icons/bottom-arrow-colored.svg" alt="arrow">
                </div>
                <div class="flex items-center gap-[30px] w-full lg:w-fit py-2 px-[14px] mb-7 rounded-main text-alt font-semibold bg-white drop-shadow-light">
                    <img width="50" height="50" src="@/assets/icons/maps.svg" alt="maps">
                    <h4>مصطفى محمد</h4>
                    <h4>فرع رئيسي</h4>
                    <h4>الرياض</h4>
                    <img width="20" height="20" class="rotate-90" src="@/assets/icons/bottom-arrow-colored.svg" alt="arrow">
                </div>
                <div class="flex items-center gap-[30px] w-full lg:w-fit py-2 px-[14px] mb-7 rounded-main text-alt font-semibold bg-white drop-shadow-light">
                    <img width="50" height="50" src="@/assets/icons/maps.svg" alt="maps">
                    <h4>مصطفى محمد</h4>
                    <h4>فرع رئيسي</h4>
                    <h4>الرياض</h4>
                    <img width="20" height="20" class="rotate-90" src="@/assets/icons/bottom-arrow-colored.svg" alt="arrow">
                </div>
                <div class="flex items-center gap-[30px] w-full lg:w-fit py-2 px-[14px] mb-7 rounded-main text-alt font-semibold bg-white drop-shadow-light">
                    <img width="50" height="50" src="@/assets/icons/maps.svg" alt="maps">
                    <h4>مصطفى محمد</h4>
                    <h4>فرع رئيسي</h4>
                    <h4>الرياض</h4>
                    <img width="20" height="20" class="rotate-90" src="@/assets/icons/bottom-arrow-colored.svg" alt="arrow">
                </div>
                <div class="flex items-center gap-[30px] w-full lg:w-fit py-2 px-[14px] mb-7 rounded-main text-alt font-semibold bg-white drop-shadow-light">
                    <img width="50" height="50" src="@/assets/icons/maps.svg" alt="maps">
                    <h4>مصطفى محمد</h4>
                    <h4>فرع رئيسي</h4>
                    <h4>الرياض</h4>
                    <img width="20" height="20" class="rotate-90" src="@/assets/icons/bottom-arrow-colored.svg" alt="arrow">
                </div>
            </div>
            <!-- INFO -->
            <div class="bg-white flex-grow basis-1/2 drop-shadow-light w-full px-9">
                <h1>test</h1>
            </div>
        </div>

    </div>
</template>

<script>
import InputC from '../components/elements/InputC.vue';
import SelectC from '../components/elements/SelectC.vue';
import MngHead from '../components/mng/MngHead.vue';


export default{
    components: { SelectC, InputC, MngHead }
}
</script>