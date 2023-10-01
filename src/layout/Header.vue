
<template>
    <header id="header" class="header">
        <div class="flex justify-between items-center h-full">
            <Right/>
            <Left/>
        </div>
    </header>
</template>
<script>
import Left from './header/left.vue';
import Right from './header/right.vue';


export default{
    name: 'header-com',
    components: { Right, Left }
}
</script>

<style>
#header {
    @apply
        fixed xl:top-8 xl:left-8 xl:right-8 top-0 left-0 right-0 z-20 
        bg-dark drop-shadow-layout
        h-[70px] px-6 gap-3 
        xl:rounded-main xl:rounded-br-none rounded-none  
    ;
}
</style>