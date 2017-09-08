<style>
    #age {
        color: red;
    }
</style>
<template>
    <div id="age">我的名字{{name}}</div>
</template>
<script>
    export default {
        data:() => {
            return {
                name: 'hello'
            }
        }
    }
</script>
