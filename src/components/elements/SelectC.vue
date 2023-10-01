<template>
    <div class="input-wrapper" :class="wrapperClass">
        <select value="" :class="inputClass" class="styled-select" type="text" >
            <slot/>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'select-custom',
        props:{
            name: String,
            label: String,
            inputClass: String,
            wrapperClass: String,
        },
        setup(){}
    }
</script>