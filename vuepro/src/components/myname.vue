<style>
    #myage {
        color: blue;
    }
</style>
<template>
    <div id="myname">
        我的名字是{{value}}
    </div>
</template>
<script>
    export default {
        props:['value']
    }
</script>
