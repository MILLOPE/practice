<style>
    #age {
        color: red;
    }
</style>
<template>
    <div id="age">我的年龄是{{age}}</div>
</template>
<script>
    export default {
        props:['age']
    }
</script>