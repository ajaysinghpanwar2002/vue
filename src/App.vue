<template>
  <div>
    <!-- <Hello message="Welcome to the Vue app" /> -->
    <!-- <Button text="Click me" /> -->
    <!-- <Input placeholder="Please enter email" /> -->
    <!-- <Form/> -->
    <!-- <Checkbox /> -->
    <!-- <Parent Message="You are the parent component"/> -->
    <!-- <HtmlBinding /> -->
    <!-- <ClassBinding/> -->
    <!-- <Modifiers/> -->
    <!-- <NonProps data="some data" id="user-cmp"/> -->
    <!-- <Computed/> -->
    <!-- <Watchers/> -->
    <Slots/>
  </div>
</template>

<script>
// import Hello from './components/Hello.vue';
// import Button from './components/UI/Button.vue';
// import Input from './components/UI/Input.vue';
// import Form from './components/Form.vue';
// import Checkbox from './components/Checkbox.vue';
// import Parent from './components/Parent.vue';
// import HtmlBinding from './components/HtmlBinding.vue';
// import ClassBinding from './components/ClassBinding.vue';
// import NonProps from './components/NonProps.vue';
// import Modifiers from './components/Modifiers.vue';
// import Computed from './components/Computed.vue';
// import Watchers from './components/Watchers.vue';
import Slots from './components/Slots.vue';

export default {
  name: 'App',
  components: {
    Slots
}
};
</script>
