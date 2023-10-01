<template>
    <div class="flex gap-12">
        <div class="md:flex hidden items-center gap-8 text-white">
            <button class="btn btn-fill text-lg  gap-2"><img src="@/assets/icons/plus.svg" alt="+"/>اضف عقارك</button>
            <button class="btn text-lg">طلبات الباحثين</button>
        </div>
        <div class="flex gap-2 items-center select-none">
            <RouterLink to="#">
                <img height="45" class="bg-white rounded-full" width="45" src="@/assets/images/alt-person.png" alt="profile">
            </RouterLink>
            <div class="flex gap-1 text-white">
                <div class="hidden md:block">username</div>
                <img src="@/assets/icons/bottom-arrow.svg" alt="b-arrow">
            </div>
        </div>
    </div>
</template>