<template>
    <h1>Form Modifiers</h1>
    <input type="text" v-model.lazy="data"/>
    <br/>
    <h2>Data is {{data}}</h2>
</template>

<script>
export default {
    name: "Home",
    data(){
        return{
            data: ''
        }
    }
}
</script>