<template>
    <div>
        <!-- for the div it is default, you can turn it off using, inheritAttrs:false -->
        <!-- this is how you attach a id to a child from parent without keeping i n a div -->
        <!-- v-bind="$attrs" -->
        <h3 v-bind="$attrs">Peter</h3>
        {{ data }}
    </div>
</template>

<script>
export default {
    name: "ajay",
    props:{
        data: String
    }
}
</script>
