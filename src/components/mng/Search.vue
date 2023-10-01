<template>
        <div class="rounded-main drop-shadow-light bg-white px-6 py-5 mb-12">
            <div class="first-line md:flex hidden items-center lg:flex-row flex-col gap-6 mb-10">
                <div class="search flex items-center gap-[14px] basis-full ">
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
</template>
<script>
import InputC from '../elements/InputC.vue';
import SelectC from '../elements/SelectC.vue';

export default{
    components: { SelectC, InputC }
}
</script>