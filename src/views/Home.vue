
<template>
    <div id="page">
        <Modal :isOpen="isOpen" @close="closeModal">
            <Dues/>
        </Modal>
        <div class="flex justify-between flex-wrap gap-8 mb-14">
            <div class="basis-full md:basis-1/2">
                <h2 class="title ">إعدادات الحساب</h2>
                <h4 class="sub-title">معلومات الشركة</h4>
                <InputC name="ar_company_name" label="اسم الشركه (العربيه)" wrapperClass="max-w-full"/>
                <InputC name="en_company_name" label="اسم الشركه (الانجليزية)" wrapperClass="max-w-full"/>
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
import Modal from '../components/Modals/Modal.vue';
import OTP from '../components/Modals/OTP.vue';
import LimitUsers from '../components/Modals/LimitUsers.vue';
import Dues from '../components/Modals/Dues.vue';
import Info from '../components/Modals/Info.vue';
export default {
    components: { InputC, TextareaC, Modal, OTP, LimitUsers, Dues },
    data(){
        return {isOpen: true}
    },
    methods: {
        closeModal(){
            this.isOpen = false
        }
    }
}

</script>