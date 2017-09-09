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
            <user-name ref="uname" v-on:updateUserName="setUserName" placeholder="input username"></user-name>
            <user-pass ref="upass" v-on:updateUserPass="setUserPass" placeholder="input userpass"></user-pass>
            <user-submit></user-submit>
            <input type="button" value="test" v-on:click="show">
        </form>
    </div>
</template>
<script>
    import username from './user/user-name.vue';
    import userpass from './user/user-pass.vue';
    import usersubmit from './user/user-submit.vue';
    export default {
        data () {
            return {
                username:'',
                userpass:'',
                isadmin:false
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
            show(){
                this.isadmin=!this.isadmin;
            }
        },
        components: {
            'user-name': username,
            'user-pass': userpass,
            'user-submit': usersubmit
        }
    }
</script>