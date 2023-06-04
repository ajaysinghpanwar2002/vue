<!-- beforeUnmount and UnMounted  -->
<!-- so the order is 
1) beforeUnmount
2) Component Removed 
3) unmounted
-->
<template>
    <button @click="show = !show">Toggle</button>
    <div class="bg-slate-500" v-if="show">
        <Hello />
        <h1>hello</h1>
    </div>
</template>

<script>
import Hello from '../Hello.vue';

export default {
    name: 'UnMount',
    data() {
        return {
            show: true,
        }
    },
    components: {
        Hello
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    }
}
</script>