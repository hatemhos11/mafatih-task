<template>
    <div id="layout-wrapper">
        <Header/>
        <Sidebar/>
        <slot/>
    </div>
    </template>


<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';


export default {
    name: 'layout-container',
    components: { Header, Sidebar }
}
</script>


<style>

</style>