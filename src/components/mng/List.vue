<template>
    <div>
        <div 
            class="map-items" 
            :class="activeID === item.id ? ' map-items-active' : ''" 
            :key="item.id" 
            v-for="item in data" 
            @click="$emit('changeActive', item.id)"
        >
            <img width="50" height="50" src="@/assets/icons/maps.svg" alt="maps">
            <h4>{{item.name}}</h4>
            <h4>{{item.branch}}</h4>
            <h4>{{item.city}}</h4>
            <img width="20" height="20" class="rotate-90" src="@/assets/icons/bottom-arrow.svg" alt="arrow">
        </div>
    </div>
</template>

<script>

export default {
    props: {
        data: Array,
        activeID: Number
    },

}
</script>

<style>
.map-items{
    @apply flex items-center gap-[20px] md:gap-[30px] lg:justify-start justify-around w-full py-2 px-[14px] mb-7 rounded-main text-alt hover:text-white font-semibold bg-white hover:bg-main cursor-pointer drop-shadow-light;
}
.map-items-active{
    @apply text-white font-semibold bg-main drop-shadow-[0_3px_6px_rgba(209,176,83,.6)];
}

</style>