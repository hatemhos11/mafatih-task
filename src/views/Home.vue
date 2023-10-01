
<template>
    <div id="page">
        <div class="flex justify-between flex-wrap gap-8 mb-14">
            <div>
                <h2 class="title ">إعدادات الحساب</h2>
                <h4 class="sub-title">معلومات الشركة</h4>
                <InputC name="ar_company_name" label="اسم الشركه (العربيه)" wrapperClass="w-[400px]"/>
                <InputC name="en_company_name" label="اسم الشركه (الانجليزية)" wrapperClass="w-[400px]"/>
            </div>
            <div>
                <img src="@/assets/images/company-img.png" alt="">
            </div>
        </div>
        <div class="input-group">
            <InputC name="ar_address" label="العنوان (العربيه)" />
            <InputC name="en_address" label="العنوان (الانجليزية)" />
        </div>
        <div class="input-group">
            <TextareaC name="ar_desc" label="الوصف (العربيه) الشركه (العربيه)"  />
            <TextareaC name="en_desc" label="الوصف (الانجليزيه)" />
        </div>
        <div class="input-group mb-24">
            <InputC name="car_id" label="رقم رخصه فال للوساطه و التسويق العقاري" />
            <InputC name="civil_id" label="رقم الهوية / الرقم الموحد للمنشأه (الانجليزية)" />
        </div>
        <div class="mb-16">
            <InputC name="areas1" label="مناطق خدمات"  wrapperClass="flex lg:items-start lg:items-center lg:flex-row flex-col gap-x-0 lg:gap-x-28" />
            <InputC name="areas2" label="مناطق خدمات"  wrapperClass="flex lg:items-start lg:items-center lg:flex-row flex-col gap-x-0 lg:gap-x-28" />
            <InputC name="areas3" label="مناطق خدمات"  wrapperClass="flex lg:items-start lg:items-center lg:flex-row flex-col gap-x-0 lg:gap-x-28" />
        </div>
        <button class="btn btn-fill font-bold">حفظ</button>
    </div>
</template>

<script>
import InputC from '../components/elements/InputC.vue';
import TextareaC from '../components/elements/TextareaC.vue';
export default {
    components: { InputC, TextareaC }
}

</script>