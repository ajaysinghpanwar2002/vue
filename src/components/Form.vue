<template>
    <h1>Get input field</h1>
    <input type="text" placeholder="enter email" v-model="email"/>
    <br/>
    <input type="password" placeholder="enter password" v-model="password"/>
    <br/>
    <button @click="getData()" type="button">Get values</button>
</template>

<script>
export default {
    name: "Form",
    data(){
        return{
            email: null,
            password: null,
        }
    },
    methods:{
        getData(){
            console.log("email: ",this.email,"password: ", this.password)
        }
    }
}
</script>