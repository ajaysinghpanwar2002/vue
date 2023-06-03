<template>
  <div>
    <!-- <Hello message="Welcome to the Vue app" />
    <Button text="Click me" />
    <Input placeholder="Please enter email" />
    <Input placeholder="Please enter a password" /> -->
    <Form/>
  </div>
</template>

<script>
// import Hello from './components/Hello.vue';
// import Button from './components/UI/Button.vue';
// import Input from './components/UI/Input.vue';
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    // Hello,
    // Button,
    // Input,
    Form
  }
};
</script>
