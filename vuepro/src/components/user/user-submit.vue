<template>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="button" v-on:click="test" class="btn btn-success">submit</button>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            test () {
                //alert(this.$parent.$children[0].username)
                console.log(this.$parent.$refs.uname.$data.username)
            }
        }
    }
</script>