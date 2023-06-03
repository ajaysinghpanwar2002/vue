<template>
    <button class="bg-red-400 font-black" @click="test()">{{ text }}</button>
    {{ count }}
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        test() {
            this.count = this.count + 1;
        }
    }
}

</script>