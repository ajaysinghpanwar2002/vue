<template>
    <h1 class="bg-red-600">{{ Message }}</h1>
    <Child MessageToChildFromParent="You are the children to Parent component" :user="user" :getdata="getdata" />
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
            user: { name: 'peter', email: 'peter@example.com' }
        }
    },
    methods:{
        getdata(){
            console.warn('Parent function called')
        }
    },
    components: {
        Child,
    }
}
</script>