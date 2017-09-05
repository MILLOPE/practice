<style>
    #myage {
        color: red;}
</style>
<template>
    <div id="myage">我的年龄是{{value}}</div>
</template>
<script>
export default {
    props: ['value']
    /*data: ()=>{
        return {age: '18'};
    }*/
};
</script>
