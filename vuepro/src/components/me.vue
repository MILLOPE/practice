<style>
    #me{
        color: violet;
    }
</style>
<template>
    <div id="me" v-bind:title="value">me {{value}} {{name}} {{age}}
        <name v-bind:name="name"></name>
        <age v-bind:age="age"></age>
    </div>
</template>
<script>
    import name from './name.vue';
    import age from './age.vue';
    export default {
        props:['name','age'],
        data(){
            return {
                value: 'hello'
            };
        },
        components:{name,age}

    }
</script>