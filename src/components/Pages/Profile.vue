<template>
    <h1>Hello {{ username }} </h1>
</template>
<script>
import { useRoute } from 'vue-router'
export default {
    name: 'Profile',
    mounted() {
        const route = useRoute();
        this.username = route.params.name
    },
    data() {
        return {
            username: ''
        }
    }
}
</script>