<template>
    <div class="input-wrapper flex-grow" :class="wrapperClass">
        <label :for="name" >{{ label }}</label>
        <input :id="name" :class="inputClass" :placeholder="placeholder" class="input w-full" type="text" />
    </div>
</template>

<script>
    export default {
        name: 'input-custom',
        props:{
            name: String,
            label: String,
            placeholder: String,
            inputClass: String,
            wrapperClass: String,
        },
        setup(){}
    }
</script>