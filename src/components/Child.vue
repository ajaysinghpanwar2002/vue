<template>
    <div class="bg-red-300">
        <h2>{{ MessageToChildFromParent }}</h2>
        <h3>
            {{ user.name }}
        </h3>
        <button @click="getdata()" class="bg-slate-700">Call function in the parent </button>
        <br />
        <button @click="childToParent(userName)">Send username</button>
    </div>
</template>

<script>
export default {
    name: 'Child',
    props: {
        MessageToChildFromParent: String,
        user: Object,
        getdata: Function,
        childToParent: Function
    },
    data() {
        return {
            userName: "peter"
        }
    }
}
</script>