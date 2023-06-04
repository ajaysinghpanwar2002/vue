<template>
    <h1>Watchers {{ count }}</h1>
    <button @click="count = count + 1" class="w-4 bg-red-300 mx-10">+</button>
    <button @click="count = count - 1" class="w-4 bg-red-700 mx-10">-</button>
</template>

<script>
export default {
    name: "Watchers",
    data() {
        return {
            count: 0
        }
    },
    watch:{
        count(val,prev){
            console.log(val,prev);
        }
    }
}
</script>

