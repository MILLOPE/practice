<style>
    #name {
        color: blue;
    }
</style>
<style scoped>
    #age {
        color: blue;
    }
</style>
<template>
    <div id="name">我的名字是{{name}}</div>
</template>
<script>
    export default {
        props:['name']
    }
</script>