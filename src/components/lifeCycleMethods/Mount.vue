<!-- beforemount and Mount  -->
<!-- so the order is 
1) beforeMount
2) Template
3) mounted
-->
<template>
    <h1>{{ name }}</h1>
</template>

<script>
export default {
    name: 'Mount',
    data() {
        return {
            name: "ajay"
        }
    },
    beforeMount() {
        console.warn("beforeMount", this.$el)
    },
    mounted() {
        console.warn("mounted", this.$el)
    }
}
</script>