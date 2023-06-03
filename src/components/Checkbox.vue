<template>
    <h1>Get checkbox and radio button value</h1>

    <label for="java">Java</label>
    <input type="checkbox" value="java" id="java" v-model="Technology" />
    <br />
    <label for="php">Php</label>
    <input type="checkbox" value="php" id="php" v-model="Technology" />
    <br />
    <label for="javascript">Javascript</label>
    <input type="checkbox" value="javascript" id="javascript" v-model="Technology" />
    <br />
    <h2>Who i am?</h2>
    <input type="radio" value="student" id="student" name="profession" v-model="profession" />
    <label for="student">Student</label>
    <input type="radio" value="developer" id="developer" name="profession" v-model="profession" />
    <label for="developer">Developer</label>
    <br />
    <h3>Selected options: {{ Technology }}</h3>
    <h4>Selected profession: {{ profession }}</h4>

    <ul>
        <li v-for="item in Technology" :key="item">
            {{ item }}
        </li>
    </ul>
    <br/>
    <ul>
        <li v-for="item in user" :key="item.email">
            Name :{{ item.name }} and Email is : {{ item.email }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "Checkbox",
    data() {
        return {
            Technology: [],
            profession: null,
            user: [
                {
                    name: "ajay singh",
                    email: "ajaysingh1234@gmail.com"
                },
                {
                    name: "ayush singh",
                    email: "ayush12@gmail.com"
                },
            ]
        }
    },
    methods: {

    }
}
</script>