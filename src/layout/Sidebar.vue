<template>
    <div id="sidebar" class="sidebar" style="overflow-y: auto; height: calc(100vh - 70px);">
        <nav id="sidebar_nav">
            <ul>
                <li class="sidebar_nav_item " >
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/dashboard.svg" alt="dashboard">
                    <span class="xl:inline hidden">لوحة التحكم</span>
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
                    <span class="xl:inline hidden">إعدادات الحساب</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>
            <ul>
                <li class="sidebar_nav_item">
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/users.svg" alt="users">
                    <span class="xl:inline hidden">المستخدمين</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>
            <ul>
                <li class="sidebar_nav_item">
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/building.svg" alt="building">
                    <span class="xl:inline hidden">عقاراتي</span>
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
                    <span class="xl:inline hidden">إدارة الأملاك</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>
            <ul>
                <li class="sidebar_nav_item">
                    <img class="sidebar_nav_item-icon" src="@/assets/icons/q_a.svg" alt="q_a">
                    <span class="xl:inline hidden">استفسارات</span>
                </li>
                <ul v-if="$route.path === '/'"></ul>
            </ul>

        </nav>
    </div>
</template>

<script>

export default {
    name: 'sidebar'
}
</script>

<style lang="scss">
#sidebar{
    @apply fixed xl:top-8 xl:right-8 top-0 right-0 z-10
        xl:w-[268px] w-16 mt-[70px] py-12 /* sidebar resposive */
        bg-dark text-white drop-shadow-layout
    ;
}

.sidebar_nav{}

.sidebar_nav_item{
    @apply flex items-center xl:justify-normal justify-center 
        h-12 px-3 mx-2 mb-1 gap-2 rounded-main cursor-pointer 
        text-main-gray hover:bg-main-gray hover:text-alt 
        text-lg leading-5 font-bold;
}

.sidebar_nav_item-active{
    @apply bg-main-gray text-alt;
}

</style>
