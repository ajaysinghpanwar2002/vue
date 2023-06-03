<template>
    <h1>{{ text }}</h1>
    <div v-html="tag"></div>
</template>

<script>
export default {
    name: "HtmlBinding",
    data() {
        return {
            text: "ajay singh",
            tag: "<h1>ajay singh</h1>"
        }
    }
}
</script>