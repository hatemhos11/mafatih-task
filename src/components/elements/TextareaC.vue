<template>
    <div class="input-wrapper flex-grow" :class="wrapperClass">
        <label :for="name">{{ label }}</label>
        <textarea :id="name" :class="inputClass" class="input w-full" type="text" rows="5"/>
    </div>
</template>




<script>

export default {
    name: 'input-custom',
    props:{
        name: String,
        label: String,
        inputClass: String,
        wrapperClass: String,
    },
    setup(){

    }
}
</script>