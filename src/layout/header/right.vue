<template>
    <div class="flex items-center justify-between gap-5" >
        <RouterLink to="/" class="xl:w-[268px] w-16">
            <img width="85" height="57" src="@/assets/images/logo.png" alt="">
        </RouterLink>
        <div class="lg:flex hidden items-center gap-[10px]">
            <img src="@/assets/icons/search.svg" alt="">
            <input type="text" class="input search-input" placeholder="البحث...">
        </div>
    </div>
</template>

<style>
.search-input{
    @apply border-border bg-white h-7 w-80;
}

</style>