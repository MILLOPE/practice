<template>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="button" v-on:click="submit" class="btn btn-success">submit</button>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            submit () {
                //alert(this.$parent.$children[0].username)
                //alert(this.$parent.$refs.uname.$data.username)
                //alert('username:'+this.$parent.$data.username+'\n'+'userpass:'+this.$parent.$data.userpass)
                this.$store.commit("showUserName");
            }
        }
    }
</script>