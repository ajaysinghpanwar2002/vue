<template>
    <h1>Call API</h1>
    <p v-for="item in list" :key="item.id">
        {{ item.id }}
    </p>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Users',
    data() {
        return {
            list: [],
        };
    },
    async mounted() {
        try {
            let response = await axios.get('https://reqres.in/api/users?page=1');
            console.warn('api data', response.data.data);
            this.list = response.data.data;
        } catch (error) {
            console.error(error);
        }
    },
};
</script>
