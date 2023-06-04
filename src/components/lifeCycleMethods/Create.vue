<!-- before created and created -->
<!-- so the order is 
1) beforeCreate()
2) data()
3) created()
-->
<template>
    <h1>{{ name }}</h1>
</template>

<script>
export default {
    name: 'Create',
    data() {
        console.log("created");
        return {
            name: "ajay"
        }
    },
    beforeCreate() {
        this.name = "ayush";
        alert("Before created");
    },
    created() {
        this.name = 'ajay singh'
        alert("Created");
    }
}
</script>