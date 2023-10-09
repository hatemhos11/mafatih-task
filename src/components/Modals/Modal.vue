<script>
export default {
    name: 'modal-component',
    methods: {
        closeModal(event) {
            if (event.target === event.currentTarget) {
                this.$emit('close')
            }
        }
    },
    props: {
        isOpen: {
            typeof: Boolean,
            default: false
        }
    }
}
</script>


<template>
    <div class="modal-container" @click="closeModal" v-if="isOpen">
        <div class="modal-block">
            <span role="button" class="close-btn" @click="closeModal">X</span>
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .modal-container{
        @apply fixed top-0 left-0 w-screen h-screen grid place-items-center bg-black bg-opacity-40 justify-center items-center z-50;
    }
    .close-btn{
        @apply absolute top-6 left-7 font-bold text-gray-400;
    }
    .modal-block{
        @apply relative bg-white rounded-main p-4 lg:w-[450px] md:w-80 w-full mx-1 overflow-auto;
        animation:fadeIn .5s;
    }
    @keyframes fadeIn {
        from{opacity: 0; transform: translateY(-20px);}
        to{opacity: 1;transform: translateY(0)}
    }
</style>