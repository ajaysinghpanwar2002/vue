<template>
    <h1>Computed Property</h1>
    <h2>{{ getResult }}</h2>
    <h3>{{ getResultsMethod() }}</h3>
</template>

<script>
export default {
    name: 'Computed',
    data() {
        return {
            dollars: 100,
            Rupee: 70,
            Discount: 10,
        }
    },
    methods: {
        getResultsMethod() {
            return (this.dollars * this.Rupee) - this.Discount;
        }
    },
    computed: {
        getResult() {
            return (this.dollars * this.Rupee) - this.Discount;
        }
    }
}
</script>