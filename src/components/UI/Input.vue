<template>
    <input type="text" :placeholder="placeholder" />
</template>
    
<script>
export default {
    name: 'Input',
    props: {
        placeholder: {
            type: String,
            required: true
        }
    }
};
</script>
    