<template>
    <h3>dynamic component</h3>
    <div>
        <button class="bg-blue-400 px-2 m-5" @click="tab = 'CheckboxVue'">Load CheckboxVue </button>
        <button class="bg-blue-600 px-2 m-5" @click="tab = 'ClassBindingVue'">Load ClassBindingVue</button>
        <button class="bg-blue-800 px-2 m-5" @click="tab = 'ComputedVue'">Load ComputedVue</button>
    </div>

    <div class="m-10 bg-red-400">
        <component :is="tab" />
    </div>
</template>

<script>
import CheckboxVue from './Checkbox.vue';
import ClassBindingVue from './ClassBinding.vue';
import ComputedVue from './Computed.vue';

export default {
    name: 'DynamicComponent',
    components: {
        CheckboxVue,
        ComputedVue,
        ClassBindingVue
    },
    data() {
        return {
            tab: "CheckboxVue"
        }
    }
}
</script>