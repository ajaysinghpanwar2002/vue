<!-- beforeupdate and updated  -->
<!-- so the order is 
1) beforeUpdate
2) UI update
3) updated
-->
<template>
    <h1 ref="count">{{ counter }}</h1>
    <button @click="counter = counter + 1">Update Count</button>
</template>

<script>
import { onUpdated } from 'vue';

export default {
    name: 'Update',
    data() {
        return {
            counter: 0
        }
    },
    beforeUpdate() {
        console.log('before update', this.$refs['count'].textContent);
    },
    updated() {
        console.log('onUpdated', this.$refs['count'].textContent);
    }
}
</script>