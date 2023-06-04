<template>
    <h1>Get input field</h1>
    <input type="text" placeholder="enter email" v-model="email" />
    <br />
    <input type="password" placeholder="enter password" v-model="password" />
    <br />
    <button @click="getData()" type="button">Get values</button>
</template>

<script>
import axios from 'axios';

export default {
    name: "Form",
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async addUser() {
            console.warn(this.email, this.password);
            let result = await axios.post(url, {
                email: this.email,
                password: this.password
            });
            console.warn("result", result)
        }
    }
}
</script>