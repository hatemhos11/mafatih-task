<script >
  import Layout from './layout/Layout.vue'

  export default {
    components: { Layout }
  }
</script>

<template>
  <Layout>
    <div id="app-wrapper">
      <router-view/>
    </div>
  </Layout>
</template>

<style>
#app-wrapper{
    @apply relative pt-[70px] mr-16 xl:mr-[268px] min-h-screen;
    overflow-y: auto;
}

</style>
