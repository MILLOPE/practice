<template>
    <div class="row">
        <div class="form-group">
            <label class="col-sm-2 control-label">username</label>
            <div class="col-sm-10">
                <input type="text" v-model="username" v-on:change="userNameChange" class="form-control" v-bind:placeholder="placeholder">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['placeholder'],
        data () {
            return {
                username:''
            }
        },
        methods:{
            userNameChange()
            {
                //this.$emit("updateUserName",this.username)
                this.$emit('childChange','username',this.username)
            }
        }
    }
</script>