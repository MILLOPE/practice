<style>
    @import "./../css/bootstrap.css";
    #user{
        margin-top: 50px;
    }
</style>
<template>
    <div id="user" class="col-md-8 col-md-offset-2">
        <h2 class="text-center" v-if="isadmin">Admin Login</h2>
        <h2 class="text-center" v-else>User Login</h2>
        <form class="form-horizontal" role="form">
            <user-name ref="uname" v-on:childChange="setValue" placeholder="input username"></user-name>
            <user-pass ref="upass" v-on:childChange="setValue" placeholder="input userpass"></user-pass>
            <user-area v-on:childChange="setValue"></user-area>
            <user-submit></user-submit>
            <input type="button" value="test" v-on:click="show">
        </form>
    </div>
</template>
<script>
    import username from './user/user-name.vue';
    import userpass from './user/user-pass.vue';
    import usersubmit from './user/user-submit.vue';
    import userarea from './user/user-area.vue';
    export default {
        data () {
            return {
                username:'',
                userpass:'',
                isadmin:false,
                userarea:0
            }
        },
        methods:{
            setUserName(uname){
                this.username=uname;
            },
            setUserPass(upass){
                this.userpass=upass;
            },
            getisAdmin(){
                return location.hash === '#admin';
            },
            setValue(key,value){
                this.$data[key]=value;
            },
            show(){
                //this.isadmin=!this.isadmin;
                alert(this.userarea);
            }
        },
        components: {
            'user-name': username,
            'user-pass': userpass,
            'user-submit': usersubmit,
            'user-area': userarea
        }
    }
</script>