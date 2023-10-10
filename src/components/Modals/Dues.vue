<template>
    <div class="text-alt text-center flex flex-col gap-y-4 items-center justify-center pt-16 pb-16">
        <div class="flex flex-col gap-7 items-center">
            <img width="80" height="80" src="@/assets/images/warn.png" alt="warn">
            <p class="font-bold">يوجد في العقد مبالغ مستحقة</p>
        </div>
        <div class="w-[300px] flex justify-between">
            <p>مجموع المستحقات</p>
            <div class="border border-red-400 bg-orange-100 rounded-main font-bold px-5">1200 ريال</div>
        </div>
        <div class="w-[300px]">
            <button class="btn btn-fill border-dark-gray bg-dark-gray w-full shadow-sm mb-3">العميل سدد كل المستحقات</button>
            <button class="btn btn-fill border-dark-gray bg-dark-gray w-full shadow-sm mb-3">الغاء كل المستحقات</button>
            <button class="btn btn-fill border-dark-gray bg-dark-gray w-full shadow-sm mb-3">عدم اجراء أي تعديل على المستحقات</button>
            <button class="btn btn-fill border-dark-gray bg-dark-gray w-full shadow-sm mb-3">تم االتفاق على مبلغ غير المستحق</button>
        </div>
    </div>
</template>
