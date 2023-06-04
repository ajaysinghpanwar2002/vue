<template>
    <div class="border w-96 text-center ">
        <header>
            <slot name="header"></slot>
        </header>
        <content>
            <slot name="content"></slot>
        </content>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>
export default {
    name: "Slots",
}
</script>