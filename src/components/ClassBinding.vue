<template>
    <h1 :class="applyStyle">{{ text }}</h1>
    <button @click="showcolor = !showcolor">toggle css</button>
</template>

<script>
export default {
    name: "ClassBinding",
    data() {
        return {
            text: "ajay singh",
            showcolor: true
        }
    },
    computed: {
        applyStyle() {
            return {
                "bg-slate-300": this.showcolor,
                "px-10": this.showcolor,
            }
        }
    }
}
</script>
