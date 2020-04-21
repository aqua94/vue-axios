<template>
    <div>
        <p>hello</p>
        <li>{{user}}</li>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        user: String,
        index: Number
    }
}
</script>

<style scoped>

</style>
