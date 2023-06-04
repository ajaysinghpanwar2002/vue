<template>
    <h1 class="">{{ email }}</h1>
    <h1>{{ message }}</h1>
    <h1>{{ getname("ajay") }}</h1>
    <h1>{{getData()}}</h1>
</template>

<script>
export default {
    name: 'Hello',
    props: {
        message: String
    },
    data() {
        return {
            email: "ajaysingh@gmail.com"
        }
    },
    methods: {
        getname: function (name) {
            return name;
        },
        getData(){
            return{
                name: 'ajay',
                email: this.email
            }
        }
    }
} 
</script>