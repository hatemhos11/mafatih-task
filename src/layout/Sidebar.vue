<template>
    <div id="sidebar" class="sidebar " :class="isOpen ? 'opened' : ''" style="overflow-y: auto; height: calc(100vh - 70px);">
        <div id="menu-icon" class="h-[60px] border-b border-gray-500 flex ps-5 items-center gap-3 " @click="toggleMenu">
            <Menu />
            <span class="sidebar_nav_item-lbl">القائمة</span>
        </div>
        <nav id="sidebar_nav">
            <ul>
                <li class="sidebar_nav_item" >
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/dashboard.svg" alt="dashboard">
                    <span class="sidebar_nav_item-lbl">لوحة التحكم</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>
            <ul>
                <li 
                    class="sidebar_nav_item" 
                    @click="$router.push('/')"
                    :class="$route.path === '/' ? 'sidebar_nav_item-active' : ''"
                >
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/settings.svg" alt="settings">
                    <span class="sidebar_nav_item-lbl">إعدادات الحساب</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>
            <ul>
                <li class="sidebar_nav_item">
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/users.svg" alt="users">
                    <span class="sidebar_nav_item-lbl">المستخدمين</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>
            <ul>
                <li class="sidebar_nav_item">
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/building.svg" alt="building">
                    <span class="sidebar_nav_item-lbl">عقاراتي</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>
            <ul>
                <li 
                    class="sidebar_nav_item" 
                    :class="$route.path === '/mng' ? 'sidebar_nav_item-active' : ''"
                    @click="$router.push('/mng')"
                >
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/manage-build.svg" alt="manage-build">
                    <span class="sidebar_nav_item-lbl">إدارة الأملاك</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>
            <ul>
                <li class="sidebar_nav_item">
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/q_a.svg" alt="q_a">
                    <span class="sidebar_nav_item-lbl">استفسارات</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>

        </nav>
    </div>
</template>

<script>
import Menu from '@/assets/icons/menu.vue'
export default {
    name: 'sidebar',
    data(){
        return {
            isOpen: true
        }
    },
    components: {Menu},
    methods:{
        toggleMenu(){
            this.isOpen = !this.isOpen
        }
    }
}

</script>

<style lang="scss">
#sidebar{
    @apply fixed xl:top-8 xl:right-8 top-0 right-0 z-10
        w-16 mt-[70px] pb-12
        bg-dark text-white drop-shadow-layout ;
    ;
}
#sidebar.opened{
    @apply w-[268px]
}
#menu-icon{
    @apply hover:bg-inherit hover:opacity-90 cursor-pointer;
}
.sidebar_nav{}

.sidebar_nav_item{
    @apply flex items-center justify-center 
        h-12 px-3 mx-2 mb-1 gap-2 rounded-main cursor-pointer 
        text-main-gray hover:bg-main-gray hover:text-alt 
        text-lg leading-5 font-bold;
}
.opened .sidebar_nav_item{
    @apply justify-normal;
}

.sidebar_nav_item-active{
    @apply bg-main-gray text-alt;
}
.sidebar_nav_item-lbl{
    @apply hidden
}
.opened .sidebar_nav_item-lbl{
    @apply inline
}
</style>
