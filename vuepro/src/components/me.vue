<template>
    <div id="me">
        <myage value="21"></myage>
        <myname value="lisi"></myname>
    </div>
</template>
<script>
    import myage from './myage.vue';
    import myname from './myname.vue';
    export default {
        components:{
            'myage':myage,
            "myname":myname
        }
    }
</script>