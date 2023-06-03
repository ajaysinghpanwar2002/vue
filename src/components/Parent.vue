<template>
    <h1 class="bg-red-600">{{ Message }}</h1>
    <h1 class="bg-red-600">{{ childUser }}</h1>
    <Child MessageToChildFromParent="You are the children to Parent component" :user="user" :getdata="getdata" :childToParent="getDataFromChild" />
</template>

<script>
import Child from './Child.vue';

export default {
    name: "Parent",
    props: {
        Message: String
    },
    data() {
        return {
            user: { name: 'peter', email: 'peter@example.com' },
            childUser:""
        }
    },
    methods:{
        getdata(){
            console.warn('Parent function called')
        },
        getDataFromChild(name){
            this.childUser=name
        }
    },
    components: {
        Child,
    }
}
</script>